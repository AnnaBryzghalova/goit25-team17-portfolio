import axios from 'axios';
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study';

export async function fetchResponses() {
  const response = await axios.get('/api/reviews');
  return response.data;
}

export async function sendCooperationRequest({ email, comment }) {
  const response = await axios.post('/api/requests', { email, comment });
  return response.data;
}
