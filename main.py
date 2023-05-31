from fastapi import FastAPI, Request, Body, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import uuid
import firebase_admin
from firebase_admin import credentials, firestore
import datetime

#table
from sqlalchemy.orm import sessionmaker
# from Models import Base,UserActivity
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, Column, Integer, String, DateTime, func
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.ext.declarative import declarative_base

#MUSIK GENG
import firebase_admin
from firebase_admin import credentials
from firebase_admin import storage

from fastapi import FastAPI, File, UploadFile, Request
import tempfile
import os

#ENKRIPSI DLL (FOR USER)
from pydantic import BaseModel
from passlib.context import CryptContext
import jwt
from datetime import datetime, timedelta
from firebase_admin import auth
from fastapi import Header
from firebase_admin import exceptions

#AMBIL MUSIC GENG
from fastapi.responses import StreamingResponse

session = Session()


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Update with the appropriate origin
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],  # Add other allowed methods if needed
    allow_headers=["*"],  # Update with the appropriate headers
)

# Initialize Firebase Admin SDK
cred = credentials.Certificate("Service.json")
firebase_admin.initialize_app(cred)

# Get a Firestore client
db = firestore.client()

class User(BaseModel):
    email: str
    password: str
    
emails = "aku@gmail.com"

@app.get("/")
async def root():
    return {"messages": emails}

musicname = "SAYANG.mp3"
realmusicname = "Ngencok.mp3"

@app.post("/upload/music")
async def upload_music(request: Request, file: UploadFile = File(None)):
    global musicname
    global realmusicname
    
    try:
        # Check if a file is uploaded
        if file is None:
            musicname = ""
            print("NO FILE HERE LOL")
            return {"error": "No file uploaded."}

        # Validate the file type
        allowed_extensions = ['.mp3', '.wav', '.ogg']
        file_ext = os.path.splitext(file.filename)[1].lower()
        if file_ext not in allowed_extensions:
            raise HTTPException(status_code=400, detail="Invalid file type. Only MP3, WAV, and OGG files are allowed.")

        # Create a temporary file to store the uploaded file
        temp_file = tempfile.NamedTemporaryFile(delete=False)

        realmusicname = file.filename
        print(file.filename)
        file.filename = str(uuid.uuid4()) + ".mp3"
        musicname = file.filename
        print(musicname)
        # Write the contents of the uploaded file to the temporary file
        contents = await file.read()
        temp_file.write(contents)
        temp_file.close()

        # Upload the temporary file to Firebase Storage
        bucket = storage.bucket('musicmate-c3684.appspot.com')
        blob = bucket.blob(file.filename)
        blob.upload_from_filename(temp_file.name)

        # Delete the temporary file
        os.remove(temp_file.name)

        # Return the URL of the uploaded file in Firebase Storage
        url = blob.public_url
        return {"url": url}

    except Exception as e:
        return {"error": str(e)}


@app.get("/music/{filename}")
async def get_music(filename: str):
    try:
        # Retrieve the music file from Firebase Storage
        bucket = storage.bucket('musicmate-c3684.appspot.com')
        blob = bucket.blob(filename)

        # Check if the file exists
        if not blob.exists():
            raise HTTPException(status_code=404, detail="File not found.")

        # Set the content type of the response based on the file extension
        content_type = 'audio/mpeg' if filename.endswith('.mp3') else 'audio/wav' if filename.endswith('.wav') else 'audio/ogg'

        # Open the file as a stream and yield chunks of data
        stream = blob.download_as_bytes()
        async def generate():
            yield stream

        # Return the streaming response
        return StreamingResponse(generate(), media_type=content_type)

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

from datetime import datetime

today = datetime.today()
formatted_date = today.strftime("%d/%m/%Y")

@app.post("/tweets")
async def add_tweets(request: Request, data: dict = Body(...)):
    global musicname
    global realmusicname
    global formatted_date
    try:
        search_term = data["search_term"]
        tweet = data["tweets"][0]["text"]
        love = 0
        email = emails
        print(email)

        # Generate a unique ID for the document
        doc_id = str(uuid.uuid4())
        post_id = str(uuid.uuid4())

        print(musicname)
        # Set the document in Firestore with the generated ID
        doc_ref = db.collection("tweets").document(doc_id)
        doc_ref.set({
            "search_term": search_term,
            "tweets": [{"text": tweet}],
            "love": love,
            "post_id": post_id,
            "username": email,
            "music": musicname,
            "musicName": realmusicname,
            "date": formatted_date
        })

        # realmusicname = ""
        return {"message": f"Tweets for {search_term} added successfully with ID {doc_id}"}
    except Exception as e:
        return {"error": str(e)}
    
@app.post("/tweets/{post_id}/like")
async def add_like_to_tweet(request: Request, post_id: str):
    try:
        # Retrieve all documents in the "tweets" collection
        tweets_ref = db.collection("tweets")
        docs = tweets_ref.stream()

        # Loop through each document and find the one with the matching post ID
        for doc in docs:
            if doc.to_dict().get("post_id") == post_id:
                # If the document is found, update the "love" field and return a success message
                love = doc.to_dict().get("love", 0)
                doc_ref = tweets_ref.document(doc.id)
                doc_ref.update({"love": love + 1})
                return {"message": f"Like added to tweet with ID {post_id}"}

        # If no document is found with the given post ID, return an error message
        return {"error": "Tweet not found"}
    except Exception as e:
        return {"error": str(e)}
    
@app.post("/tweets/{post_id}/dislike")
async def dislike_tweet(request: Request, post_id: str):
    try:
        # Retrieve all documents in the "tweets" collection
        tweets_ref = db.collection("tweets")
        docs = tweets_ref.stream()

        # Loop through each document and find the one with the matching post ID
        for doc in docs:
            if doc.to_dict().get("post_id") == post_id:
                # If the document is found, update the "love" field and return a success message
                love = doc.to_dict().get("love", 0)
                if love > 0:
                    doc_ref = tweets_ref.document(doc.id)
                    doc_ref.update({"love": love - 1})
                    return {"message": f"Dislike added to tweet with ID {post_id}"}
                else:
                    return {"error": "Tweet already has no likes"}
                
        # If no document is found with the given post ID, return an error message
        return {"error": "Tweet not found"}
    except Exception as e:
        return {"error": str(e)}

@app.get("/tweets")
async def get_tweets(search_term: str = None):
    try:
        # Get all the tweets documents from Firestore
        tweets_ref = db.collection("tweets")

        if search_term is not None:
            # Search for tweets with the given search term
            query = tweets_ref.where("search_term", "==", search_term)
            tweets_docs = query.stream()
        else:
            # Get all tweets
            tweets_docs = tweets_ref.stream()

        # Loop through all the documents and append the data to a list
        tweets = []
        for doc in tweets_docs:
            doc_data = doc.to_dict()
            tweets.append(doc_data)

        return {"tweets": tweets}
    except Exception as e:
        return {"error": str(e)}
    
#INI BELUM PASTI KARENA BELUM DITEST
# @app.get("/tweets")
# async def get_tweets(search_term: str = None):
#     try:
#         # Get all the tweets documents from Firestore
#         tweets_ref = db.collection("tweets")

#         if search_term is not None:
#             # Search for tweets with the given search term
#             query = tweets_ref.where("search_term", "==", search_term)
#             query = query.order_by("date", direction=firestore.Query.DESCENDING)
#             tweets_docs = query.stream()
#         else:
#             # Get all tweets
#             query = tweets_ref.order_by("date", direction=firestore.Query.DESCENDING)
#             tweets_docs = query.stream()

#         # Loop through all the documents and append the data to a list
#         tweets = []
#         for doc in tweets_docs:
#             doc_data = doc.to_dict()
#             tweets.append(doc_data)

#         return {"tweets": tweets}
#     except Exception as e:
#         return {"error": str(e)}

@app.post("/tweets/{post_id}/comment")
async def add_comment_to_tweet(request: Request, post_id: str, comment: str = Body(...)):
    try:
        # Retrieve all documents in the "tweets" collection
        tweets_ref = db.collection("tweets")
        docs = tweets_ref.stream()

        # Loop through each document and find the one with the matching post ID
        for doc in docs:
            if doc.to_dict().get("post_id") == post_id:
                # If the document is found, add the comment to the "comments" field and return a success message
                comments = doc.to_dict().get("comments", [])
                comments.append(comment)
                doc_ref = tweets_ref.document(doc.id)
                doc_ref.update({"comments": comments})
                return {"message": f"Comment added to tweet with ID {post_id}"}

        # If no document is found with the given post ID, return an error message
        return {"error": "Tweet not found"}
    except Exception as e:
        return {"error": str(e)}

@app.get("/tweets/{post_id}/comments")
async def get_comments_for_tweet(request: Request, post_id: str):
    try:
        # Retrieve all documents in the "tweets" collection
        tweets_ref = db.collection("tweets")
        docs = tweets_ref.stream()

        # Loop through each document and find the one with the matching post ID
        for doc in docs:
            if doc.to_dict().get("post_id") == post_id:
                # If the document is found, retrieve the comments and return them
                comments = doc.to_dict().get("comments", [])
                return {"comments": comments}

        # If no document is found with the given post ID, return an error message
        return {"error": "Tweet not found"}
    except Exception as e:
        return {"error": str(e)}

@app.post("/signup")
async def signup(user: User):
    try:
        # Create the user in Firebase Authentication
        user_record = auth.create_user(email=user.email, password=user.password)
        
        # Store additional user data in Firestore
        doc_ref = db.collection("users").document(user.email)
        doc_ref.set({"email": user.email})

        return {"message": "User signup successful"}

    except auth.EmailAlreadyExistsError:
        raise HTTPException(status_code=400, detail="Email already exists.")

    except Exception as e:
        raise HTTPException(status_code=500, detail="Error occurred during signup (maybe already sign up)")

@app.post("/userPost")
async def givePost():
    global musicname
    global emails
    global realmusicname
    try:
        print(emails)
        doc_ref = db.collection("users").document(emails)

        # Retrieve existing user document
        doc = doc_ref.get().to_dict()

        print(doc)
        print(musicname)
        if doc is None:
            # If the document doesn't exist, create a new one with the new post
            doc_ref.set({"email": emails, "post": [musicname] ,"music" : [realmusicname]})
        else:
            # If the document exists, append the new post to the existing list of posts
            posts = doc.get("post", [])
            posted = doc.get("music", [])
            print(posts)
            posts.append(musicname)
            posted.append(realmusicname)
            print(posts)
            # Update the document with the updated list of posts
            doc_ref.update({"post": posts})
            doc_ref.update({"music": posted})
            musicname = ""
            realmusicname = ""
        return {"Posted a post for user": emails}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error occurred posting")

SECRET_KEY = "your_secret_key"
TOKEN_EXPIRATION = timedelta(hours=1)

def generate_access_token(user_id: str) -> str:
    # Set the token's expiration time
    expires_at = datetime.utcnow() + TOKEN_EXPIRATION

    # Create the payload containing the user_id and expiration time
    payload = {
        "user_id": user_id,
        "exp": expires_at
    }

    # Generate the access token
    token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")

    return token

import bcrypt

import requests

def sign_in_with_email_and_password(email, password):
    api_key = "AIzaSyC831BH9Ll3it1EKGQrlQDBmNkYNyMMnJk"

    url = f"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key={api_key}"
    payload = {
        "email": email,
        "password": password,
        "returnSecureToken": True
    }

    response = requests.post(url, json=payload)
    response_data = response.json()

    if response.ok:
        # User signed in successfully
        id_token = response_data["idToken"]
        local_id = response_data["localId"]
        # Handle the tokens or perform further actions

        return id_token, local_id
    else:
        # Error occurred during sign-in
        error_message = response_data["error"]["message"]
        # Handle the error appropriately
        print(f"Sign-in failed: {error_message}")
        return "waduhbang", "waduhbang"
    
def verify_password(plain_password, hashed_password):
    return bcrypt.checkpw(plain_password.encode('utf-8'), hashed_password.encode('utf-8'))

@app.post("/login")
async def login(user: User):
    global emails
    emails = user.email
    
    id_token, local_id = sign_in_with_email_and_password(user.email, user.password)

    if (local_id == "waduhbang" or id_token == "waduhbang"):
        
        print("WRONG")
        emails = ""
        raise HTTPException(status_code=400, detail="Invalid email or password.")
    # Sign in the user using Firebase Authentication

    user_record = auth.get_user_by_email(user.email)
    
    auth_token = auth.create_custom_token(user_record.uid)

    return {"access_token": auth_token}

#HANDLING NICE STUFF
ChoosedUser = "test.com"

@app.get("/Choose")
async def SeeUser():
    return {"messages":ChoosedUser}

@app.post("/ChooseNow")
async def UserNow(email: str):
    global ChoosedUser
    ChoosedUser = email

    try:
        # Retrieve the user document from Firestore
        doc_ref = db.collection("users").document(ChoosedUser)
        doc = doc_ref.get().to_dict()

        if doc is None:
            return {"error": "User not found"}

        # Retrieve the list of posts for the chosen user
        posts = doc.get("post", [])
        # print(posts)

        print("test")
        posted = doc.get("music", [])
        print("test")
        print(posted)
        
        return{"songs": posts, "posted":posted}


    except Exception as e:
        print("kok error")
        return {"error": str(e)}

@app.post("/TakeNow")
async def UserNow():
    global ChoosedUser

    try:
        # Retrieve the user document from Firestore
        doc_ref = db.collection("users").document(ChoosedUser)
        doc = doc_ref.get().to_dict()

        if doc is None:
            return {"error": "User not found"}

        # Retrieve the list of posts for the chosen user
        posts = doc.get("post", [])
        print(posts)
        
        posted = doc.get("music", [])
        return{"songs": posts, "posted":posted}

    except Exception as e:
        print("kok error")
        return {"error": str(e)}

#lagu
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