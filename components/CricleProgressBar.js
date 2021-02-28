import React from "react";

import { CSSTransition, SwitchTransition } from "react-transition-group";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Box, Text } from "@chakra-ui/react";

export default function CircleProgressBar({ percentage, title }) {
  return (
    <Box maxW={{ sm: 28, md: 40 }} mx={4} py={4}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={3}
        styles={buildStyles({
          textColor: "white",
          pathColor: "teal",
          trailColor: "gray",
        })}
      />
      <Text
        textAlign='center'
        mt={2}
        color='gray.500'
        fontSize='0.9em'
        textTransform='uppercase'>
        {title}
      </Text>
    </Box>
  );
}
