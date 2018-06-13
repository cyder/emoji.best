const COMMON_URL = 'api/v1/';
const SEARCH = 'search';

export default function searchEmojis() {
  const path = `${COMMON_URL}${SEARCH}`;
  return fetch(path).then(response => response.json());
}
