import { Flex, Spin, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import type { ImagesDisplayProps, ImageData } from "../types/ImageData";
import { useEffect, useState } from 'react';
import ImageDisplay from './ImageDisplay';


function ImagesDisplay({ images, loading, filter, tags }: ImagesDisplayProps) {

    const [filteredImages, setFilteredImages] = useState<(ImageData[] | undefined)>([]);

    useEffect(() => {
        if (filter && images) {
            const newFilter: ImageData[] = filter.filter
                .filter((f) => f.tags.some((tag) => tags.includes(tag)))
                .map((f) => images.find((img) => img.id === f.id))
                .filter((img): img is ImageData => img !== undefined);
            setFilteredImages(newFilter);
        }
    }, [filter, images]);

    useEffect(() => { console.log(filteredImages) }, [filteredImages])
    if (loading) {
        return (
            <Flex vertical style={{ alignItems: 'center' }}>
                <Typography>The first request from may take some time. Thank you for your patience.</Typography>
                <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
            </Flex>

        )
    }
    if (!filteredImages || filteredImages.length === 0) {
        return <text >No images available</text>;
    }

    return (
        <Flex wrap gap={"middle"} justify="space-between">
            {filteredImages && filteredImages.map((image: ImageData, index) => {
                return (
                    <ImageDisplay image={image} index={index} />
                )
            })}
        </Flex>
    );
}

export default ImagesDisplay;
