import { useEffect, useState } from "react";
import { type FilterData } from "../types/FilterData";

export default function useFetchFilter() {
    const [filter, setFilter] = useState<FilterData>();
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetch("https://art-gallery-backend-fv6z.onrender.com/api/filter")
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then(json => setFilter(json))
            .catch(err => {
                setError(err as Error);
            });
    }, []);

    return { filter, error };
}