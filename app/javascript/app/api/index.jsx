const COMMON_URL = 'api/v1/';
const SEARCH = 'search';
const DOWNLOAD = 'download';

export function searchEmojis(order, keyword = null, page = 0) {
  const params = new URLSearchParams();
  params.set('order', order);
  params.set('page', page);
  if (keyword != null) params.set('keyword', keyword);

  const path = `${COMMON_URL}${SEARCH}?${params.toString()}`;

  return fetch(path).then(response => response.json());
}

export function downloadEmojisLink(emojis) {
  const params = new URLSearchParams();
  emojis.forEach(emoji => params.append('emojis[]', emoji.id));
  return `${COMMON_URL}${DOWNLOAD}?${params.toString()}`;
}
