/** @format */

import { useState } from "react";
import { validateImage } from "@/utils/imageValidation";

export function useUpload() {
  const [file, setFile] = useState(null);

  const [preview, setPreview] = useState(null);

  const [error, setError] = useState(null);

  const upload = (selectedFile) => {
    setError(null);

    const validation = validateImage(selectedFile);

    if (validation) {
      setError(validation);

      return false;
    }

    setFile(selectedFile);

    const url = URL.createObjectURL(selectedFile);

    setPreview(url);

    return true;
  };

  const remove = () => {
    setFile(null);

    setPreview(null);

    setError(null);
  };

  return {
    file,
    preview,
    error,

    upload,
    remove,

    setFile,
  };
}
