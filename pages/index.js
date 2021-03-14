import React, { useState, useLayoutEffect, useRef } from "react";
import App from "../components/App";
import SubtitleWithLine from "../components/SubtitleWithLine";
import Container from "../components/Container";
import OfferItem from "../components/OfferItem";
import Performance from "../components/Performance";
import CircleProgressBar from "../components/CricleProgressBar";
import Supports from "../components/Supports";
import EmployeeCard from "../components/EmployeeCard";
import RegisterForm from "../components/RegisterForm";

import { Box, Text, Heading, Flex } from "@chakra-ui/react";

import offers from "../db/offers.json";
import Slider from "../components/Slider";
import ImageComponent from "../components/SlideImage";

export default function Home() {
  const [activeOfferItem, setActiveOfferItem] = useState([false, false, false]);
  const [isAniamte, setAnimate] = useState(false);
  const [performancePercentage, setPerformancePercentage] = useState({
    75: "web design",
    92: "web development",
    68: "speed optimazation",
    100: "customer support",
    83: "marketing",
    50: "advertisement",
  });

  const [count, setCount] = useState(0);

  const performanceRef = useRef(null);

  useLayoutEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top;
    const performanceBox = topPos(performanceRef.current);

    const onScroll = () => {
      if (isAniamte) return;
      const scrollPos = window.scrollY + window.innerHeight;

      if (performanceBox + 60 < scrollPos) {
        // Update animation
        setAnimate(true);
      }
      console.log("listen scrolling");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeOffer = (target) => {
    const result = activeOfferItem.map((_, i) => {
      if (target === i) return true;
      return false;
    });
    setActiveOfferItem(result);
  };

  const updateAnimation = (number) => {
    // const timer = setInterval(() => setCount(count + 1), 50);
    // if (timer === number) return clearInterval(timer);
  };

  return (
    <App>
      <Heading as='h1' position='absolute' top='-200px' left={0}>
        Resume growthOps
      </Heading>
      <Container mt={{ md: 10 }} mb={{ sm: 16, md: 20 }}>
        <Box w='full'>
          <Box textAlign='center'>
            <SubtitleWithLine>
              <Text as='h2'>
                what we{" "}
                <Text as='span' color='teal.500'>
                  offer
                </Text>
              </Text>
            </SubtitleWithLine>
            <Text fontSize='0.7em'>
              We offer our customers the best services & solutions, this is our
              main services list
            </Text>
          </Box>
          <Flex flexDirection={{ sm: "column", md: "row" }}>
            {offers.map(({ title, content }, i) => (
              <OfferItem
                key={i}
                title={title}
                content={content}
                onClick={activeOffer}
                activeOfferItem={activeOfferItem}
                target={i}
              />
            ))}
          </Flex>
        </Box>
      </Container>

      <Performance>
        <Box
          d='flex'
          width='100%'
          justifyContent='space-around'
          flexWrap='wrap'
          ref={performanceRef}
          flexDir={{ sm: "row", md: "row" }}>
          {Object.entries(performancePercentage).map(([percetage, title]) => (
            <CircleProgressBar
              // percentage={isAniamte ? updateAnimation(percetage) : 0}
              percentage={isAniamte ? percetage : 0}
              title={title}
            />
          ))}
        </Box>
      </Performance>

      <Container>
        <Box d='flex' flexWrap='wrap' py={10}>
          <Supports />
        </Box>
      </Container>

      <EmployeeCard />

      <RegisterForm />

      <Box mt={4} bgColor='teal.0' h={"300px"}>
        <Slider />
      </Box>

      <Box bgColor='gray.0' minH={"250px"}>
        <ImageComponent />
      </Box>
    </App>
  );
}
