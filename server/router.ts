import express from 'express';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  res.json({ msg: 'Hello, world!' });
});


export default router;
