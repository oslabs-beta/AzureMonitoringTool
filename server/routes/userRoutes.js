import express from 'express';
import userController from '../controllers/userController.js';
const router = express.Router();

router.post(
  //checks to see if either the username or email are in use and then creates an account if it passes the test
  '/signup',
  userController.checkUserCred,
  userController.addUserCred,
  (req, res) => {
    res.status(200).json(res.locals.user);
  }
);

router.post('/login', userController.login, (req, res) => {
  res.status(200).json(res.locals.user);
});

export default router;