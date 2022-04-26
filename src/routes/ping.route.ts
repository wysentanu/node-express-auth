import { Request, Response, Router } from 'express';
import { PingController } from '../controllers';
import passport from 'passport';
import '../libs/passport';

const router = Router();

/**
 * Contains all routes related to authentication
 */
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req: Request, res: Response) => {
    const result = PingController.ping();
    return res.status(200).json(result);
  },
);

export default router;
