import * as emoji from './emoji';
import * as tag from './tag';
import * as user from './user';

const COMMON_URL = '/api/v1/';
const DOWNLOAD = 'download';

export default {
  ...emoji,
  ...tag,
  ...user,
};

export function downloadEmojisLink(emojis) {
  const params = new URLSearchParams();
  emojis.forEach(emoji => params.append('emojis[]', emoji.id));
  return `${COMMON_URL}${DOWNLOAD}?${params.toString()}`;
}
