import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from 'src/boot/firebase';
import { v4 as uuidv4 } from 'uuid';
import { readAndCompressImage } from 'browser-image-resizer';

export async function uploadImage(file) {
  const filename = `images/${uuidv4()}.${getExtension(file.name)}`;
  const storageRef = ref(storage, filename);
  const thumbnail = await compressImage(file);
  const uploadResult = await uploadBytes(storageRef, thumbnail);
  // const downloadURL = await getDownloadURL(storageRef);
  const downloadURL = await getDownloadURL(uploadResult.ref);
  console.log('downloadURL : ', downloadURL);
  return downloadURL;
}

function getExtension(filename) {
  return filename.split('.').pop();
}

async function compressImage(file) {
  return readAndCompressImage(file, {
    quality: 0.8,
  });
}
