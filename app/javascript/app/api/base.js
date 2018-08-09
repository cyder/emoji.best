const csrfToken = document.querySelector('meta[name=csrf-token]').content;

/**
 * requestの基本メソッド
 * @param {string} path - URL指定
 * @param {object} params - パラメータ(fetchの引数に準ずる))
 */
export const baseRequest = (path, params) =>
  fetch(path, params)
    .then((response) => {
      if (!response.ok) {
        throw response.status;
      }
      return response;
    })
    .then(response => response.json());

/**
 * get request
 * @param {string} path - URL指定
 * @param {object} [params={}] - オプション
 *  data: 送信データオブジェクト
 *  accessToken: アクセストークン
 */
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

/**
 * post request(delete, fetchも可能)
 * @param {string} path - URL指定
 * @param {object} [params={}] - オプション
 *  data: 送信データオブジェクト
 *  accessToken: アクセストークン
 *  method: POST / DELETE / FETCH
 *  isFile: ファイルをform-dataで送る際にtureにする。
 */
export const postRequest = (path, options = {}) => {
  const headers = {
    Accept: 'application/json',
    'X-CSRF-Token': csrfToken,
    Authorization: options.accessToken || '',
  };

  if (!options.isFile) {
    headers['Content-Type'] = 'application/json';
  }

  const body = (() => {
    if (options.isFile) {
      const temp = new FormData();
      Object.keys(options.data).forEach(key => (
        temp.append(key, options.data[key])
      ));
      return temp;
    }
    return JSON.stringify(options.data || null);
  })();

  const params = {
    method: options.method || 'POST',
    credentials: 'same-origin',
    headers,
    body,
  };

  return baseRequest(path, params);
};

/**
 * patch request
 * @param {string} path - URL指定
 * @param {object} [params={}] - オプション
 *  data: 送信データオブジェクト
 *  accessToken: アクセストークン
 */
export const patchRequest = (path, options = {}) =>
  postRequest(path, { ...options, method: 'PATCH' });

/**
 * delete request
 * @param {string} path - URL指定
 * @param {object} [params={}] - オプション
 *  data: 送信データオブジェクト
 *  accessToken: アクセストークン
 */
export const deleteRequest = (path, options = {}) =>
  postRequest(path, { ...options, method: 'DELETE' });
