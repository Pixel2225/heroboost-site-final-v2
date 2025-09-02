import os

class Config:
    # Configuration de base de données - Supabase PostgreSQL
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:Loulou25&@25@db.xtqipytsljjmheyabmbj.supabase.co:5432/postgres'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # Configuration Supabase
    SUPABASE_URL = 'https://xtqipytsljjmheyabmbj.supabase.co'
    SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0cWlweXRzbGpqbWhleWJhbWJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3NDcyNTgsImV4cCI6MjA3MjMyMzI1OH0.ZsT2J1gJ_KFlWeP3vnXfPMiICFiNa9v55eKkJGUA4Dw'
    
    # Configuration Flask
    SECRET_KEY = '1687213e7a0342e2bbcaa65ab9b933312edf0224d8fcd1fd5c8516fdbdd947e2' # REMPLACEZ CECI PAR UNE VRAIE CLÉ SECRÈTE
    
    # Configuration CORS
    CORS_ORIGINS = ["http://localhost:5173", "https://heroboost.fr", "https://*.netlify.app"]
