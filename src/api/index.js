import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Универсальный запрос к API через axios
 * @param {string} endpoint - путь относительно baseURL
 * @param {object} config - axios config (method, data, params и т.д.)
 * @returns {Promise<any>} - результат запроса
 */
export async function apiRequest(endpoint, config = {}) {
  const response = await api(endpoint, config);
  return response.data;
}

// Пример использования:
// const data = await apiRequest('/rooms', { method: 'get' });
// const created = await apiRequest('/rooms', { method: 'post', data: payload }); 