import React, { useState } from "react";
import MobileNav from "./MobileNav";
import NextLink from "next/link";
import Image from "next/image";

import { Box, List, ListItem, Link } from "@chakra-ui/react";
import Container from "./Container";

const paths = {
  home: "/#",
  portfolio: "/#",
  blog: "/#",
  pages: "/#",
  features: "/#",
  mega_menu: "/#",
  contact: "/#",
};

export default function Nav() {
  const [linkActive, setLinkActive] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onLinkClick = (index) => {
    const result = linkActive.map((boolean, i) => (i === index ? true : false));
    setLinkActive(result);
  };

  return (
    <Box bgColor='white.0' py={4}>
      <Container>
        <Box w='full'>
          <Box d='flex' justifyContent='space-between' alignItems='center'>
            {/* <Image src={} width={40} height={40} /> */}
            <Box className='blue' width='40px' h='40px'></Box>
            <MobileNav paths={paths} />

            <List d={{ sm: "none", md: "flex" }}>
              {Object.entries(paths).map(([name, path], i) => (
                <ListItem
                  textTransform='uppercase'
                  d='inline-block'
                  fontWeight='500'
                  fontSize='0.85rem'
                  color={linkActive[i] ? "white" : "black"}
                  bgColor={linkActive[i] ? "teal.0" : "transparent"}
                  px={4}
                  mx={1}
                  borderRadius={6}
                  py={2}
                  key={name}>
                  <NextLink href={path} passHref>
                    <Link
                      _focus={{
                        outline: "1px solid tranparent",
                        textDecor: "none",
                      }}
                      onClick={() => onLinkClick(i)}>
                      {name}
                    </Link>
                  </NextLink>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
