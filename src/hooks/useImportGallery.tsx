import { useEffect, useState } from "react";

let cachedData: { name: string; id: string; url: string }[] | undefined = undefined;

export default function useImportGallery() {
  const [data, setData] = useState<typeof cachedData>(cachedData);
  const [loading, setLoading] = useState<boolean>(!cachedData);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!cachedData) {
      fetch("https://art-gallery-backend-fv6z.onrender.com/api/images")
        .then(res => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();
        })
        .then((json: { name: string; id: string }[]) => {
          const mapped = json.map(img => ({
            ...img,
            url: `https://art-gallery-backend-fv6z.onrender.com/api/images/${img.id}`
          }));
          cachedData = mapped;
          setData(mapped);
          setLoading(false);
        })
        .catch(err => {
          setError(err as Error);
          setLoading(false);
        });
    }
  }, []);

  return { data, loading, error };
}
