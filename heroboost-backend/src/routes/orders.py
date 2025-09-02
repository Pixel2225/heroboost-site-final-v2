from flask import Blueprint, jsonify, request
from main import db, supabase
from models.order import Order

orders_bp = Blueprint('orders', __name__)

@orders_bp.route('/orders', methods=['GET'])
def get_orders():
    orders = Order.query.all()
    return jsonify([{'id': order.id, 'user_id': order.user_id, 'product_id': order.product_id, 'quantity': order.quantity, 'total_price': str(order.total_price), 'status': order.status} for order in orders])

@orders_bp.route('/orders', methods=['POST'])
def add_order():
    data = request.get_json()
    new_order = Order(user_id=data['user_id'], product_id=data['product_id'], quantity=data['quantity'], total_price=data['total_price'])
    db.session.add(new_order)
    db.session.commit()
    return jsonify({'message': 'Order added successfully!'}), 201
