import { Watermark, Image, Card } from "antd";
import type { ImageData } from "../types/ImageData";

const ImageDisplay = ({ image, index }: { image: ImageData, index: number }) => {

    return (
        <div style={{ maxWidth: 200, minWidth: 100 }}>
            <Card hoverable
                cover={<Watermark content={"SEBBSOON"} gap={[20, 50]} font={{ color: "rgba(0,0,0,.30)", fontSize: 10 }} key={index}  >
                    <Image src={image.url} />
                </Watermark>}>
            </Card>
        </div>
    )

}; export default ImageDisplay;