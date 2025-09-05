import { useEffect, useState } from "react";

type ImageData = {
  url: string;
  name: string;
};

function useImportGallery() {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    fetch("/api/images")
      .then(res => res.json())
      .then(setImages)
      .catch(console.error);
  }, []);

  return images;
}

export default useImportGallery;
