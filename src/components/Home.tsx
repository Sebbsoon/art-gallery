import { Flex, Typography } from "antd"



const Home = () => {

    return (
        <Flex >
            <Flex vertical >
                <Typography.Title italic>Hello and Welcome! </Typography.Title>
                <Flex vertical style={{ borderWidth: 2, borderStyle: "solid", margin: ' 10px 20px 30px 4px', padding: 10, borderRadius: 5 }}>
                    <Typography.Text italic style={{ fontSize: 20, marginBottom: 10, marginLeft: 5 }}>About Me</Typography.Text>
                    <Typography.Paragraph >I’m Sebastian Thunberg, also known as Sebbsoon or Sebbsoonart, a digital artist, oil painter, and developer.</Typography.Paragraph>
                    <Typography.Paragraph>I’ve been drawing for most of my life and enjoy working across a variety of mediums. My work includes digital art in Krita, oil on canvas, Warhammer miniature painting, and traditional drawing. I do not focus on one specific style or theme. I simply enjoy exploring different forms of art and creative expression.</Typography.Paragraph>
                    <Typography.Paragraph>This website is both my art portfolio and a personal development project. I designed, built, and deployed it myself to present my artwork and demonstrate my technical skills. The frontend is built with TypeScript and React, and the backend uses Java with Spring Boot, containerized with Docker, and hosted on Render.</Typography.Paragraph>
                    <Typography.Paragraph>The site is still a work in progress, with the goal of achieving clarity, performance, and maintainability. These are the same principles that guide my approach to both art and software development.</Typography.Paragraph>
                </Flex>
                <Flex vertical style={{ borderWidth: 2, borderStyle: "solid", margin: ' 10px 20px 30px 4px', padding: 10, borderRadius: 5 }}>
                    <Typography.Text italic style={{ fontSize: 20, marginBottom: 10, marginLeft: 5 }}>About this site</Typography.Text>

                    <Typography.Paragraph >This website is a personal project created as a fun challenge to build a complete system using only free tools and services. It includes a web frontend, a backend API, and an Android app. The site is still a work in progress, with the main goals being clarity, performance, and maintainability. All source code is publicly available on GitHub.</Typography.Paragraph>

                    <Typography.Paragraph>The frontend is built with React and TypeScript, using the Ant Design (antd) library as a foundation for UI components.
                        The layout and styling are kept minimal to keep the artwork central while maintaining responsiveness across devices.
                        Image assets are hosted on Google Drive and fetched dynamically.
                        This setup allows for a clean, efficient interface that remains lightweight and easy to maintain.</Typography.Paragraph>

                    <Typography.Paragraph>The backend is developed in Java using Spring Boot.
                        It is containerized with Docker and hosted on Render.
                        The backend communicates with the Google Drive API to stream or download image files for the frontend and Android app.
                        This setup enables serving dynamic content without relying on paid infrastructure or external databases.</Typography.Paragraph>

                    <Typography.Paragraph>The Android application is built with React Native and Expo.
                        It connects to the same backend as the web frontend and provides mobile access to the artwork.
                        The app is not publicly released but is part of the overall project architecture.</Typography.Paragraph>
                </Flex>
            </Flex>
        </Flex>

    )
}
export default Home
