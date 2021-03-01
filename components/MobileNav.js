import React from "react";
import NextLink from "next/link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  useDisclosure,
  Button,
  DrawerBody,
  DrawerContent,
  List,
  ListItem,
  Link,
  Box,
} from "@chakra-ui/react";

export default function MobileNav({ paths }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClosePanel = () => onClose();

  return (
    <Box d={{ md: "none" }}>
      <Button onClick={onOpen}>
        <HamburgerIcon bgColor='transparent' />
      </Button>
      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px' my={4} position='relative'>
            <CloseIcon
              onClick={onClosePanel}
              className='blue'
              position='absolute'
              top={0}
              right={"1rem"}
            />
          </DrawerHeader>
          <DrawerBody>
            <List>
              {Object.entries(paths).map(([name, path]) => (
                <NextLink key={name} href={path} passHref>
                  <Link d='block' p={2} className='blue' mb={2}>
                    <ListItem className='uppercase'>
                      {name.split("_").join(" ")}
                    </ListItem>
                  </Link>
                </NextLink>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
