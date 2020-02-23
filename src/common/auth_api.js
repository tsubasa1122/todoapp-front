const BASE_URL = 'http://localhost:3000';

function loginApi(path, method, data) {
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
    .then(function(response) {
      localStorage.setItem('client', response.headers.get('client'));
      localStorage.setItem('uid', response.headers.get('uid'));
      localStorage.setItem('access-token', response.headers.get('access-token'));
      localStorage.setItem('expiry', response.headers.get('expiry'));
      const json = response.json();
      return json;
    })
    .catch(error => ({ error }));
}

export default loginApi;
