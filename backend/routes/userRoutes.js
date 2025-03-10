import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  getUserById,
  updateUserProfile,
  getUsers,
  deleteUser,
  updateUser,
} from '../controllers/userController.js';

const router = express.Router();

router.route('/').get(protect, admin, getUsers).post(registerUser);
router.post('/logout', protect, logoutUser);
router.post('/auth', authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route('/:id')
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)
  .delete(protect, admin, deleteUser);

export default router;
