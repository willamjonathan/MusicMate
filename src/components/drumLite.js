import React, { useEffect, useState } from "react";
import "../styles/drumLite.css";
import "../styles/fullversion.css"
import { Link, useNavigate } from "react-router-dom";


const firstSoundsGroup = [
  {
  keyCode: 65,
      key: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83, 
    key: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68, 
    key: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90, 
    key: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88, 
    key: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67, 
    key: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

const soundsName = {
  trapKit: "Trap Kit"
};

const soundsGroup = {
  trapKit: firstSoundsGroup
};

const KeyboardKey = ({ play, deactivateAudio, sound: { id, key, url, keyCode } }) => {
  const handleKeydown = (e) => {
    if (keyCode === e.keyCode) {
      if (url) {
        const audio = document.getElementById(key);
        play(key, id);
        deactivateAudio(audio);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, );

  return (
    <button value="test" id={keyCode} className="drum-pad" onClick={() => play(key, id)}>
      <audio className="clip" src={url} id={key} />
      {key}
    </button>
  );
};

const Keyboard = ({ sounds, play, power, deactivateAudio }) => (
  <div className="keyboard">
    {sounds.map((sound) => (
      <KeyboardKey
        key={sound.id}
        sound={power ? sound : { ...sound, url: "" }}
        play={play}
        deactivateAudio={deactivateAudio}
      />
    ))}
  </div>
);

const DrumControl = ({ togglePower, power, name }) => (
  <div className="control">
    <button onClick={togglePower}>Turn Power {power ? "OFF" : "ON"}</button>
    <h2 id="display">{name}</h2>
  </div>
);

const Applite = () => {
  const [power, setPower] = useState(true);
  const [soundName, setSoundName] = useState("");
  const [soundType] = useState("trapKit");
  const [sounds] = useState(soundsGroup[soundType]);

  const styleActiveKey = (key) => {
    key.parentElement.style.backgroundColor = "#000000";
    key.parentElement.style.color = "#ffffff";
  };

  const deactivateAudio = (audio) => {
    setTimeout(() => {
      audio.parentElement.style.backgroundColor = "#ffffff";
      audio.parentElement.style.color = "#000000";
    }, 300);
  };

  const play = (key, sound) => {
    setSoundName(sound);
    if (power) {
      const audio = document.getElementById(key);
      if (audio && audio.src) {
        styleActiveKey(audio);
        audio.currentTime = 0;
        audio.play();
        deactivateAudio(audio);
      }
    }
  };

  const togglePower = () => {
    setPower(!power);
  };

  return (
    <div className = "drum-machines" id="drum-machine">
      <div className="back-button">
          <Link to ="/produce" className="link link-produce">back</Link>
        </div>
      <div className="wrapper">
        <Keyboard sounds={sounds} play={play} power={power} deactivateAudio={deactivateAudio} />
        <DrumControl togglePower={togglePower} power={power} name={soundName || soundsName[soundType]} />
      </div>
    </div>
  );
};

export default Applite;
