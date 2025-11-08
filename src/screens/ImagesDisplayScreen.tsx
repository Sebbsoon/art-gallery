import ImagesDisplay from "../components/ImagesDisplay"
import type { ImagesDisplayProps } from "../types/ImageData"

const ImagesDisplayScreen = ({ images, loading, filter, tags }: ImagesDisplayProps) => {

    return (<ImagesDisplay images={images} loading={loading} filter={filter} tags={tags} />)
}
export default ImagesDisplayScreen