import * as types from '../constants/upload-emoji';

export function uploadEmoji(image) {
  const emoji = {
    name: null,
    description: null,
    image: null,
    status: types.STATUS.UPLOADING,
  };
  return { type: types.UPLOAD, emoji, image };
}

export function saveEmoji(id, name, description, url) {
  const emoji = {
    id,
    name,
    description,
    image: url,
    status: types.STATUS.SAVING,
  };
  return { type: types.SAVE, emoji };
}

export function successUploadEmoji(id, url) {
  const emoji = {
    id,
    name: null,
    description: null,
    image: url,
    status: types.STATUS.UPLOADED,
  };
  return { type: types.SUCCESS_UPLOAD, emoji };
}

export function successSaveEmoji(id, data) {
  const emoji = {
    id,
    name: data.name,
    description: data.description,
    image: data.image.thumb_url,
    status: types.STATUS.UPLOADING,
  };
  return { type: types.SUCCESS_SAVE, emoji };
}
