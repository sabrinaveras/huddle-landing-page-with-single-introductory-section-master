import React from "react";

import { Main, Container, ImageContainer, InformationContainer } from "./main.styles";

const MainComponent = () => (
    <Main>

        <Container>

            <ImageContainer>
                <div/>
            </ImageContainer>

            <InformationContainer>
                <h1>
                    Build The Community Your Fans Will Love
                </h1>
                <h2>
                    Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
                    Create connections with your users as you engage in genuine discussion.
                </h2>
                <button type="submit">Register</button>
            </InformationContainer>
        </Container>

    </Main>
)

export default MainComponent;