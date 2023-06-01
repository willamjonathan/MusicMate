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


app = FastAPI(docs_url="/docs", redoc_url="/redoc")

@app.get("/testbro")
async def root():
    # logging.debug("Inside the root endpoint")  # Add logging statements to track the flow of execution
    return {"messages": "waduh"}

print("a")