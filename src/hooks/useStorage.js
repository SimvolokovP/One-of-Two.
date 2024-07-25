import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { firebaseStorage } from "../components/firebase/firebase";

const useStorage = (storageName) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const startUpload = async (file) => {
    if (!file) {
      return null;
    }

    setIsUploading(true);

    const fileId = uuidv4();
    const fileFormat = file.type.split("/")[1];
    const storageRef = ref(
      firebaseStorage,
      `${storageName}/${fileId}.${fileFormat}`
    );
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snap) => {
          const progress = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          setError(error);
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setUrl(downloadURL);
          setIsUploading(false);
          resolve(downloadURL);
        }
      );
    });
  };

  return { progress, url, error, startUpload, isUploading };
};

export default useStorage;
