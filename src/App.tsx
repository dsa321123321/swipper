import React from "react";
import { ThemeProvider } from "emotion-theming";
import { theme, globalStyles } from "./stylesConfig";
import { Global } from "@emotion/core";
import { Box, Heading } from "@react-yuki/ui";
import Slider from "./Slider";

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <Global styles={globalStyles} />
      <Box p={4}>
        <Box>
          <Heading
            as="h1"
            color="orange.4"
            fontSize={13}
            m={0}
            my={4}
            fontWeight={1}
            textAlign="center"
          >
            Auto Play - Example
          </Heading>
        </Box>
        <Box>
          <Slider
            params={{
              spaceBetween: 30,
              centeredSlides: true,
              autoplay: {
                delay: 2500,
                disableOnInteraction: false
              },
              pagination: {
                el: ".swiper-pagination",
                clickable: true
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
              }
            }}
          />
        </Box>
      </Box>
    </>
  </ThemeProvider>
);

export default App;
