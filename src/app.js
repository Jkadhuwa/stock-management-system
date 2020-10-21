import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import db from './sequelize/models';

import router from './routes';

const app = express();

app.use(cors());
const port = process.env.PORT;

app.use('/api/v1', router);

app.use('*', (req, res) => res.status(404).json({
  message: 'Page Not Found!!'
}));

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running on PORT ${port}`);
  });
});

export default app;
