import axios from 'axios';
import { setRequestHeadersInterceptor } from './interceptor';
const apiClient = axios.create({
  BASE_URL: 'http://localhost:8000',
  timeout: 3000,
  
  headers: {
    'x-access-token': localStorage.getItem('token'),
    'Content-Type': 'application/json'
  }
});
apiClient.interceptors.request.use(setRequestHeadersInterceptor);
export default apiClient;


