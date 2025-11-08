import type { FilterData } from "./FilterData";

export type ImageData = {

    name: string;
    id: string;
    url: string;
    thumbnail?:string;
}

export type ImagesDisplayProps = {
    images: ImageData[] | undefined;
    thumbnails?: ImageData[] | undefined;
    loading: boolean;
    tags: string[];
    filter?: FilterData | undefined;
}
