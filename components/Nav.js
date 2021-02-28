import React from "react";
import MobileNav from "./MobileNav";
import Image from "next/image";

import { Box } from "@chakra-ui/react";
import Container from "./Container";

export default function Nav() {
  return (
    <Container d='flex' justifyContent='space-between'>
      {/* <Image src={} width={40} height={40} /> */}
      <Box className='blue' width='40px' h='40px'></Box>
      <MobileNav />
      
    </Container>
  );
}
