import { useEffect, useState } from "react";

type ImageData = {
  url: string;
  name: string;
};

function useImportGallery() {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY as string;
    const folderId = import.meta.env.VITE_GOOGLE_FOLDER_ID as string;

    const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType)`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const imgLinks: ImageData[] = data.files
          .filter((f: any) => f.mimeType && f.mimeType.startsWith("image/"))
          .map((f: any) => ({
            url: `https://drive.google.com/uc?export=view&id=${f.id}`,
            name: f.name,
          }));
        setImages(imgLinks);
      })
      .catch((err) => console.error("Error loading images:", err));
  }, []);

  return images;
}

export default useImportGallery;
