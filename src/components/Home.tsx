import { Button, Divider, Flex, Layout, Space, Typography } from "antd"
import type { ImagesDisplayProps } from "../types/ImageData"
import type { FilterData } from "../types/FilterData";
import useUpdateFilter from "../hooks/useUpdateFilter";

const { updateFilter: updateFilterJson } = useUpdateFilter();

const Home = () => {
    
    return (
        <>
            <Flex vertical >
                <Typography.Title >Hi and Welcome! </Typography.Title>
                <Typography.Paragraph >I’m Sebastian Thunberg, also known as Sebbsoon or Sebbsoonart, a digital artist, oil painter, and developer.</Typography.Paragraph>
                <Typography.Paragraph>I’ve been drawing for most of my life and enjoy working across a variety of mediums. My work includes digital art in Krita, oil on canvas, Warhammer miniature painting, and traditional drawing. I do not focus on one specific style or theme. I simply enjoy exploring different forms of art and creative expression.</Typography.Paragraph>
                <Typography.Paragraph>This website is both my art portfolio and a personal development project. I designed, built, and deployed it myself to present my artwork and demonstrate my technical skills. The frontend is built with TypeScript and React, and the backend uses Java with Spring Boot, containerized with Docker, and hosted on Render.</Typography.Paragraph>
                <Typography.Paragraph>The site is still a work in progress, with the goal of achieving clarity, performance, and maintainability. These are the same principles that guide my approach to both art and software development.</Typography.Paragraph>
            </Flex>
        </>

    )
}
export default Home