const csrfToken = document.querySelector('meta[name=csrf-token]').content;

export const baseRequest = (path, params) =>
  fetch(path, params)
    .then((response) => {
      if (!response.ok) {
        throw response.status;
      }
      return response;
    })
    .then(response => response.json());

export const getRequest = (path, options = {}) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: options.accessToken || '',
  };
  const params = options.data !== null ? new URLSearchParams(options.data) : null;
  const uri = params !== null ? `${path}?${params.toString()}` : path;

  return baseRequest(uri, { headers });
};

export const postRequest = (path, options = {}) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-Token': csrfToken,
    Authorization: options.accessToken || '',
  };
  const body = JSON.stringify(options.data || null);
  const params = {
    method: 'POST',
    credentials: 'same-origin',
    headers,
    body,
  };

  return baseRequest(path, params);
};
