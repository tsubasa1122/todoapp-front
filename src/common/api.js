const BASE_URL = 'http://localhost:3000';

function api(path, method, data) {
  let url = BASE_URL + path;
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  };

  return fetch(url, {
    method: method,
    mode: 'cors',
    headers,
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(res => res.headers.get('client'))
    .catch(error => ({ error }));
}

export default api;
