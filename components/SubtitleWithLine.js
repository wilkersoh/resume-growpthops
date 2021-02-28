import React from "react";

import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

export default function SubtitleWithLine({ children, ...props }) {
  const { lineColor, baseColor } = props;

  return (
    <Box
      d='flex'
      alignItems='center'
      textTransform='uppercase'
      color={baseColor ? baseColor : "black"}>
      <Line color={lineColor ? lineColor : "#e8e6e6"} />
      <ArrowForwardIcon mx={2} color='teal' />
      {children}
      <ArrowBackIcon mx={2} color='teal' />
      <Line color={lineColor ? lineColor : "#e8e6e6"} />
    </Box>
  );
}

const Line = ({ color }) => (
  <Box flex={1}>
    <Box borderTop={`1px solid ${color} `}></Box>
    <Box mt={1} borderTop={`1px solid ${color} `}></Box>
  </Box>
);
