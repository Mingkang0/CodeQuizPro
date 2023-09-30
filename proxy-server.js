import express from 'express';
import axios from 'axios';
import cors from 'cors'; // Import the cors middleware

const app = express();
const port = 3001;

// Use the cors middleware to allow requests from any origin
app.use(cors());

app.post('/api/oauth2/v1/token', async (req, res) => {
  // const { grant_type, client_id, client_secret } = req?.body;
  // const client_id = '1254476165561755328';
  // const client_secret = '2B0FB141D4F8044F44CA0C8133CD0A030AD80CA60B66445B1E0873CC49BE6466';
  // const grant_type = 'client_credentials';
  console.log(req?.body);
  try {
    const response = await axios.post('https://connect-api.cloud.huawei.com/oauth2/v1/token', {
      client_id,
      client_secret,
      grant_type,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
