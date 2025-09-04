import { Grid, Card, CardMedia, Typography } from "@mui/material";

type ImageData = {
    url: string;
    name: string;
};

type ImagesDisplayProps = {
    images: ImageData[];
};

function ImagesDisplay({ images }: ImagesDisplayProps) {
    if (!images || images.length === 0) {
        return <Typography >No images available</Typography>;
    }

    console.log("Images:", images);

    return (
        <Grid container spacing={3}>
            {images.map((img, idx) => (
                <Grid key={idx}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="200"
                            image={img.url}
                            alt={img.name}
                        />
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default ImagesDisplay;
