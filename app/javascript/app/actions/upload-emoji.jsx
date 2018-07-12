import * as types from '../constants/upload-emoji';

const uuidv4 = require('uuid/v4');

export function uploadEmoji(image, accessToken) {
  const filename = image.name.replace(/\.[^/.]+$/, '');
  const emoji = {
    id: uuidv4(),
    name: filename,
    description: null,
    image: null,
    status: types.STATUS.UPLOADING,
  };
  return {
    type: types.UPLOAD,
    emoji,
    image,
    accessToken,
  };
}

export function saveEmoji(id, name, description, url, accessToken) {
  const emoji = {
    id,
    name,
    description,
    image: url,
    status: types.STATUS.SAVING,
  };
  return { type: types.SAVE, emoji, accessToken };
}

export function deleteEmoji(id) {
  return { type: types.DELETE, id };
}

export function failedUploadEmoji(id, message) {
  const status = types.STATUS.UPLOAD_ERROR;
  return {
    type: types.FAILED_UPLOAD,
    id,
    message,
    status,
  };
}

export function failedSaveEmoji(id, message) {
  const status = types.STATUS.UPLOAD_ERROR;
  return {
    type: types.FAILED_SAVE,
    id,
    message,
    status,
  };
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

export function successSaveEmoji(id) {
  return { type: types.SUCCESS_SAVE, id };
}
