import { Router, Request, Response } from 'express';

const router = Router();

router.get('/health', (_: Request, res: Response) => res.json({ ok: true }));

export default router;
