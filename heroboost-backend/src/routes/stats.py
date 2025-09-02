from flask import Blueprint, jsonify
from main import db, supabase
from models.order import Order
from models.user import User
from sqlalchemy import func

stats_bp = Blueprint('stats', __name__)

@stats_bp.route('/stats', methods=['GET'])
def get_stats():
    total_orders = db.session.query(func.count(Order.id)).scalar()
    total_users = db.session.query(func.count(User.id)).scalar()
    total_revenue = db.session.query(func.sum(Order.total_price)).scalar()

    return jsonify({
        'total_orders': total_orders,
        'total_users': total_users,
        'total_revenue': str(total_revenue) if total_revenue else '0.00'
    })
