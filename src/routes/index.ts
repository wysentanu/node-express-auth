import { Request, Response, Router } from 'express';
import pingRoute from './ping.route';
import loginValidation from '../validations/auth/login.validation';
import registerValidation from '../validations/auth/login.validation';
import validateRequest from '../middlewares/validation.middleware';
import { LoginController, RegisterController } from '../controllers';

const router = Router();

/**
 * Health check endpoint
 */
router.get('/', (req: Request, res: Response) => {
  res.send('API is running');
});

/**
 * APIs
 */
router.post(
  '/api/login',
  loginValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const result = await LoginController.login(req.body);

    if (result === null) {
      return res.status(401).json({
        message: 'Invalid credentials',
      });
    }

    return res.status(201).json(result);
  },
);

router.post(
  '/api/register',
  registerValidation,
  validateRequest,
  async (req: Request, res: Response) => {
    const result = await RegisterController.register(req.body);
    return res.status(201).json(result);
  },
);

router.use('/api/ping', pingRoute);

export default router;
