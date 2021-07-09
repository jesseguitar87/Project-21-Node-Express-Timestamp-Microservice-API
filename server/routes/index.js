import express from 'express';
import moment from 'moment';
import path from 'path';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/api/timestamp*', (req, res, next) => {
  let time = req.params[0];

  if (!time) {
    time = new Date();
  } else {
    time = time.slice(1);
    if (!time) time = new Date();
    else time = new Date(time);
  }

  if (time.getTime()) {
    res.send({
      unix: time.getTime(),
      utc: time.toUTCString()
    });
  } else res.send({ "error": "Invalid Date" })
});

export default router;
