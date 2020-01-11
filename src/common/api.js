const BASE_URL = 'http://localhost:3000';

function api(data) {
  return fetch(`${BASE_URL}api/auth/sign_in`, {
    method: 'post',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .catch(error => ({ error }));
}

export default api;
