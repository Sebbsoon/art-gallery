import { Watermark, Image, Card, Skeleton } from "antd";
import type { ImageData } from "../types/ImageData";
import { useEffect, useState } from "react";

const ImageDisplay = ({ image, index }: { image: ImageData, index: number }) => {

    const [loading, setLoading] = useState(false);

    if (loading) {
        return (
            <div style={{ minWidth: 75, backgroundColor: "#00000028", padding: 10, borderRadius: 4 }}>
                <Skeleton.Image />
            </div>
        )
    }
    return (
        <div style={{  minWidth: 75, backgroundColor: "#00000028", padding: 10, borderRadius: 4 }}>
            <Watermark content={"SEBBSOON"} gap={[20, 50]} font={{ color: "rgba(0,0,0,.30)", fontSize: 10 }} style={{
                borderWidth: 1, borderStyle: "solid", borderRadius: 4, borderColor: "#00000080", overflow: "hidden"
            }} key={index}  >
                <Image src={image.thumbnail ?? image.url} preview={{ src: image.url }} onLoadStart={() => { setLoading(true) }} onLoad={() => { setLoading(false) }} />
            </Watermark>
        </div>
    )

}; export default ImageDisplay;