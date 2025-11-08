import { useEffect, useState } from "react";
import type { ImageData } from "../types/ImageData";

let cachedData: ImageData[] | undefined = undefined;

export default function useImportGallery() {
  const [data, setData] = useState<typeof cachedData>(cachedData);
  const [loading, setLoading] = useState<boolean>(!cachedData);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!cachedData) {
      fetchImageList()
        .then(
          (json: ImageData[]) => {
            const mapped = mapImageData(json);
            cachedData = mapped;
            setData(mapped);
            setLoading(false);
          }
        )
        .catch(err => {
          setError(err as Error);
          setLoading(false);
        });
    }
  }, []);

  async function fetchImageList() {
    const res = await fetch("https://art-gallery-backend-fv6z.onrender.com/api/images");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return await res.json();
  }

  function mapImageData(imageList: ImageData[]) {
    const mapped: ImageData[] = imageList.map((img: ImageData) => ({
      ...img,
      url: `https://art-gallery-backend-fv6z.onrender.com/api/images/${img.id}`,
      thumbnail: `https://art-gallery-backend-fv6z.onrender.com/api/thumbnail/${img.id}`
    }));
    return mapped;
  }
  return { data, loading, error };
}
