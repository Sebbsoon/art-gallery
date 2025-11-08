import type { FilterData } from "../types/FilterData";

export default function useUpdateFilter() {

    async function updateFilter(newData: FilterData) {
        console.log("Update Filter");
        console.log(newData)
        fetch("https://art-gallery-backend-fv6z.onrender.com/api/filter", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                newData
            )
        }).then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        });
    }
    return { updateFilter };
}