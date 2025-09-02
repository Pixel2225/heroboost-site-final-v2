from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from supabase import create_client, Client
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
CORS(app, resources={r"/api/*": {"origins": Config.CORS_ORIGINS}})

db = SQLAlchemy(app)

# Initialisation de Supabase
supabase: Client = create_client(Config.SUPABASE_URL, Config.SUPABASE_KEY)

# Importation des modèles et des routes après l'initialisation de db et supabase
from models.user import User
from models.product import Product
from models.order import Order
from routes.users import users_bp
from routes.orders import orders_bp
from routes.stats import stats_bp

# Enregistrement des blueprints
app.register_blueprint(users_bp, url_prefix="/api")
app.register_blueprint(orders_bp, url_prefix="/api")
app.register_blueprint(stats_bp, url_prefix="/api")

@app.route("/api/health", methods=["GET"])
def health_check():
    return jsonify({"status": "ok", "message": "Backend is running"}), 200

if __name__ == "__main__":
    with app.app_context():
        db.create_all() # Crée les tables si elles n'existent pas
    app.run(debug=True, host="0.0.0.0", port=5001)
