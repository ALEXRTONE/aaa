import express from 'express';
import cors from 'cors'
import path from 'path'
// Import the connection object
import sequelize from './config/connection.js';
import routes from './routes/index.js'

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use(cors({
  origin: 'https://idex-backend-8rw0.onrender.com',
}));

app.get('*', (_req, res) => {
  res.sendFile(path.join('https://idex-backend-8rw0.onrender.com', '../../client/dist/index.html'));
});

// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
  console.log(`Connected to database successfully.`);
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
