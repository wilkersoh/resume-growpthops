import React, { useState } from "react";
import Container from "./Container";

import { Box, Heading, Input, Textarea, Button, Grid } from "@chakra-ui/react";

export default function RegisterForm() {
  let [textAreaValue, setTextAreaValue] = useState("");
  let [inputValue, setInputValue] = useState({});

  let handleTextAreaChange = (e) => {
    let inputValue = e.target.value;
    setTextAreaValue(inputValue);
  };

  const handleInputChange = (e) => {
    const name = e.target.name;

    console.log("e :>> ", e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Container>
      <Box w='full' mb={8}>
        <Heading my={3} textTransform='uppercase' color='teal.0'>
          register your interest
        </Heading>
        <Grid
          as='form'
          gridGap={3}
          gridTemplateColumns={{ sm: "1fr", md: "1fr 1fr" }}
          onSubmit={onFormSubmit}>
          <Input
            onChange={handleInputChange}
            type='text'
            variant='outline'
            placeholder='Name'
            name='username'
            mb={3}
          />
          <Input
            type='email'
            variant='outline'
            placeholder='Email Address'
            name='email'
            mb={3}
          />
          <Input
            type='text'
            variant='outline'
            placeholder='Occupation'
            name='occupation'
            mb={3}
          />
          <Input
            type='number'
            variant='outline'
            placeholder='Contact No'
            name='phone'
            mb={3}
          />
          <Textarea
            value={textAreaValue}
            onChange={handleTextAreaChange}
            placeholder='Message..'
            size='sm'
            mb={3}
          />
          <Box></Box>
          <Button
            type='submit'
            w={{ sm: "full", md: "80%" }}
            colorScheme='teal'
            textTransform='uppercase'>
            submit message
          </Button>
        </Grid>
      </Box>
    </Container>
  );
}
