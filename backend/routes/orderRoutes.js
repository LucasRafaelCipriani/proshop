import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from '../controllers/orderController.js';

const router = express.Router();

router.route('/').get(protect, admin, getOrders).post(protect, addOrderItems);
router.get('/mine', protect, getMyOrders);
router.get('/:id', protect, admin, getOrderById);
router.put('/:id/pay', protect, updateOrderToPaid);
router.put('/:id/deliver', protect, updateOrderToDelivered);

export default router;
