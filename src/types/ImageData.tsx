import type { FilterData } from "./FilterData";

export type ImageData = {

    name: string;
    id: string;
    url: string;
}

export type ImagesDisplayProps = {
    images: ImageData[] | undefined;
    loading: boolean;
    tags: string[];
    filter?: FilterData | undefined;
}
