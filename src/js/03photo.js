'use strict';

const fr = new FileReader();
const uploadBtn = document.querySelector('.js-profileTrigger');
const fileField = document.querySelector('.js-profileUploadBtn');
const profileImage = document.querySelector('.js-profileImage');
const profilePreview = document.querySelector('.js-profilePreview');
let photo = '';
/**
 * @param {evento} e
 */
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  photo = fr.result;
  updatePhoto();

  saveInLocalStorage();
}

const defaultPhoto = document.querySelector('.sample__photo');

function updatePhoto() {
  const currentPhoto = photo || `url(${defaultPhoto.style.backgroundImage}`;
  profilePreview.style.backgroundImage = `url(${currentPhoto})`;
  profileImage.style.backgroundImage = `url(${currentPhoto})`;
}

function fakeFileClick() {
  fileField.click();
}

uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);
