import React, { useEffect, useState } from "react";
import "./fullversion.css";
import axios from "axios";
const firstSoundsGroup = [
    {
      keyCode: 81,
      key: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      key: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      key: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      key: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      key: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      key: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      key: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      key: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      key: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

const secondSoundsGroup = [
    {
      keyCode: 81,
      key: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      key: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      key: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      key: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      key: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      key: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      key: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      key: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      key: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];

  const soundsName = {
    trapKit: "Trap Kit",
    smoothPianoKit: "Smooth Piano Kit",
  };
  
  const soundsGroup = {
    trapKit: firstSoundsGroup,
    smoothPianoKit: secondSoundsGroup,
  };
  
  const KeyboardKey = ({ sound: { id, key, url, keyCode }, play }) => {
    return (
      <button
        value="test"
        id={keyCode}
        className="drum-pad"
        onClick={() => play(key, id)}
      >
        <audio className="clip" src={url} id={key} />
        {key}
      </button>
    );
  };
  
  const Keyboard = ({ sounds, play, power, deactivateAudio }) => {
    const handleKeyDown = (e) => {
      sounds.forEach((sound) => {
        if (sound.keyCode === e.keyCode) {
          play(sound.key, sound.id);
        }
      });
    };
  
    useEffect(() => {
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [sounds, play]);
  
    return (
      <div className="keyboard">
        {sounds.map((sound) => (
          <KeyboardKey
            key={sound.id}
            sound={{
              ...sound,
              url: power ? sound.url : "", // Use empty URL when power is off
            }}
            play={play}
            deactivateAudio={deactivateAudio}
          />
        ))}
      </div>
    );
  };
  
  const DrumControl = ({
    stop,
    name,
    power,
    volume,
    handleVolumeChange,
    changeSoundGroup,
  }) => (
    <div className="control">
      <button onClick={stop}>Turn Power {power ? "OFF" : "ON"}</button>
      <h2>Volume: %{Math.round(volume * 100)}</h2>
      <input
        max="1"
        min="0"
        step="0.01"
        type="range"
        value={volume}
        onChange={handleVolumeChange}
      />
      <h2 id="display">{name}</h2>
      <button onClick={changeSoundGroup}>Change Sounds Group</button>
    </div>
  );
  
  const Appfull = () => {
    const [power, setPower] = useState(true);
    const [volume, setVolume] = useState(1);
    const [soundName, setSoundName] = useState("");
    const [soundType, setSoundType] = useState("trapKit");
    const [sounds, setSounds] = useState(soundsGroup[soundType]);
    const [recordedKeys, setRecordedKeys] = useState([]);
    const [recording, setRecording] = useState(false);
  
    const styleActiveKey = (key) => {
      key.parentElement.style.backgroundColor = "#000000";
      key.parentElement.style.color = "#ffffff";
    };
  
    const deactivateAudio = (audio) => {
      setTimeout(() => {
        audio.parentElement.style.backgroundColor = "#ffffff";
        audio.parentElement.style.color = "#000000";
      }, 100);
    };
  
    const play = (key, sound) => {
      if (power) {
        const audio = document.getElementById(key);
        audio.volume = volume;
        audio.currentTime = 0;
        audio.play();
        setSoundName(sound);
        styleActiveKey(audio);
        deactivateAudio(audio);
  
        if (recording) {
          setRecordedKeys((prevKeys) => [...prevKeys, key]);
        }
      }
    };
  
    const stop = () => {
      setPower((prevPower) => !prevPower);
      setSoundName("");
      setRecordedKeys([]);
    };
  
    const handleVolumeChange = (e) => {
      const volume = parseFloat(e.target.value);
      setVolume(volume);
    };
  
    const changeSoundGroup = () => {
      const newSoundType = soundType === "trapKit" ? "smoothPianoKit" : "trapKit";
      setSoundType(newSoundType);
      setSounds(soundsGroup[newSoundType]);
    };
  
    const saveMusicScript = () => {
      const musicScript = recordedKeys.join(""); // Convert recordedKeys to a string
      const musicName = "Your Music Name"; // Set the desired music name
    
      axios
        .post("http://localhost:8000/save_music", { MusicScript: musicScript, MusicName: musicName })
        .then((response) => {
          console.log(response.data);
          // Handle success or display a message to the user
        })
        .catch((error) => {
          console.error(error);
          // Handle error or display an error message to the user
        });
    };
  
    const toggleRecording = () => {
      setRecording((prevRecording) => !prevRecording);
      setRecordedKeys([]);
    };
  
    return (
      <div className = "memek" id="drum-machine">
        <div className="back-button">
          back
        </div>
        <h1>Music Maker Pro</h1>
        <div className="wrapper">
          <div className="keyboard">
            <Keyboard
              sounds={sounds}
              play={play}
              power={power}
              deactivateAudio={deactivateAudio}
            />
          </div>
          <div className="controle">
            <DrumControl
              stop={stop}
              name={soundName}
              power={power}
              volume={volume}
              handleVolumeChange={handleVolumeChange}
              changeSoundGroup={changeSoundGroup}
            />
          </div>
          <div className="button-wrapper">
            <button className={recording ? "active-button toggle-recording-button" : "toggle-recording-button"} onClick={toggleRecording}>
              {recording ? "Stop Recording" : "Start Recording"}
            </button>
            <button className="save-music-script-button" onClick={saveMusicScript}>Save Music Script</button>
          </div>
        </div>
      </div>
    );
    
    
  };
  
  export default Appfull;
  