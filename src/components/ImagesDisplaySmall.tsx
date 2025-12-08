import { Flex, Skeleton, Spin, Typography } from 'antd';
import type { ImagesDisplayProps, ImageData } from "../types/ImageData";
import { useEffect, useState } from 'react';
import ImageDisplay from './ImageDisplay';


function ImagesDisplaySmall({ images, loading, filter, tags }: ImagesDisplayProps) {

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
            <Flex align='center'>
                <Typography.Paragraph>The first request from may take some time.</Typography.Paragraph>
                <Typography.Paragraph>Thank you for your patience.</Typography.Paragraph>
                <Flex justify='space-between' gap={'middle'} style={{ paddingTop: 50, width: '100%' }}>
                    <Skeleton.Image active style={{ minWidth: 100, backgroundColor: "#00000028", padding: 10, borderRadius: 4 }} />
                    <Skeleton.Image active style={{ minWidth: 100, backgroundColor: "#00000028", padding: 10, borderRadius: 4 }} />

                </Flex>
            </Flex>

        )
    }
    if (!filteredImages || filteredImages.length === 0) {
        return <text >No images available</text>;
    }

    return (
        <Flex vertical wrap gap={"middle"} align="center" style={{ paddingTop: 50 }}>
            {filteredImages && filteredImages.map((image: ImageData, index) => {
                return (
                    <ImageDisplay image={image} index={index} />
                )
            })}
        </Flex>
    );
}

export default ImagesDisplaySmall;
