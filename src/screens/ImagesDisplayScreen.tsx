import ImagesDisplay from "../components/ImagesDisplay"
import ImagesDisplaySmall from "../components/ImagesDisplaySmall";
import useScreenSize from "../hooks/useScreenSize"
import type { ImagesDisplayProps } from "../types/ImageData"
import type { ScreenSize } from "../types/ScreenSize";

const ImagesDisplayScreen = ({ images, loading, filter, tags }: ImagesDisplayProps) => {
    const screenSize: ScreenSize = useScreenSize();

    if (screenSize === "xs") {
        return (<ImagesDisplaySmall images={images} loading={loading} filter={filter} tags={tags} />)
    }

    return (<ImagesDisplay images={images} loading={loading} filter={filter} tags={tags} />)
}
export default ImagesDisplayScreen