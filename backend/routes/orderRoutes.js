import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';
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
router.get('/:id', protect, checkObjectId, getOrderById);
router.put('/:id/pay', protect, checkObjectId, updateOrderToPaid);
router.put(
  '/:id/deliver',
  protect,
  admin,
  checkObjectId,
  updateOrderToDelivered
);

export default router;
