from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

class MusicInput(BaseModel):
    MusicScript: str
    MusicName: str

simpanLagu = ""

@app.post("/save_music", response_model=dict)
async def save_music(music: MusicInput):
    global simpanLagu
    simpanLagu = music.MusicScript

    print(simpanLagu)
    # Save the music script to a file or database
    # You can use music.MusicScript and music.MusicName to access the input values
    # Implement your logic here to handle the music script storage
    # For example, you can save the music script to a file
    with open(f"{music.MusicName}.txt", "w") as f:
        f.write(music.MusicScript)
    
    return {"message": "Music script saved successfully"}

# Allow CORS (Cross-Origin Resource Sharing) to enable API access from a different origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
