import React, { useState, useRef } from "react";
import Image from "next/image";
import { Box, Button } from "@chakra-ui/react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// const ImageComponent = () => {
//   const [values, seValues] = useState({
//     currentIndex: 0,
//     itemsInSlide: 1,
//     galleryItems: [
//       <div
//         className='item'
//         style={{ border: "2px solid red", color: "white", padding: "10px" }}>
//         1
//       </div>,
//       <div
//         className='item'
//         style={{ border: "2px solid red", color: "white", padding: "10px" }}>
//         2
//       </div>,
//       <div
//         className='item'
//         style={{ border: "2px solid red", color: "white", padding: "10px" }}>
//         3
//       </div>,
//       <div
//         className='item'
//         style={{ border: "2px solid red", color: "white", padding: "10px" }}>
//         4
//       </div>,
//       <div
//         className='item'
//         style={{ border: "2px solid red", color: "white", padding: "10px" }}>
//         5
//       </div>,
//     ],
//   });

//   const slidePrevPage = () => {
//     const currentIndex = values.currentIndex - values.itemsInSlide;
//     seValues({ ...values, currentIndex });
//   };

//   const slideNextPage = () => {
//     const { itemsInSlide } = values;
//     let currentIndex = values.currentIndex + itemsInSlide;
//     console.log("currentIndex :>> ", currentIndex);
//     if (currentIndex > values.galleryItems.length)
//       currentIndex = values.galleryItems.length;

//     seValues({ ...values, currentIndex });
//   };

//   const handleOnSlideChange = (event) => {
//     const { itemsInSlide, item } = event;
//     console.log("event :>> ", event);
//     seValues({ ...values, itemsInSlide, currentIndex: item });
//   };

//   console.log("values :>> ", values);
//   console.log("values.currentIndex :>> ", values.currentIndex);

//   return (
//     <div>
//       <AliceCarousel
//         items={values.galleryItems}
//         slideToIndex={2}
//         // onInitialized={handleOnSlideChange}
//         onSlideChanged={handleOnSlideChange}
//         // onResized={handleOnSlideChange}
//       />

//       <Button colorScheme='teal' onClick={slidePrevPage}>
//         Prev Page
//       </Button>
//       <Button colorScheme='teal' onClick={slideNextPage}>
//         Next Page
//       </Button>
//     </div>
//   );
// };

function SlideImage({ urls, currentIndex, onSlideChanged, onClick }) {
  return (
    <Box w={{ sm: "100%", md: "75%" }} h='full'>
      <Box h={"full"}>
        <AliceCarousel
          onSlideChanged={onSlideChanged}
          autoWidth={true}
          slideToIndex={currentIndex}
          mouseTracking
          disableDotsControls={true}
          items={urls}
        />
      </Box>
    </Box>
  );
}

const ImageComponent = () => {
  const [values, setValues] = useState({
    galleryItems: [
      "/images/stamp.jpg",
      "/images/stamp.jpg",
      "/images/stamp.jpg",
      "/images/stamp.jpg",
      "/images/stamp.jpg",
      "/images/stamp.jpg",
      "/images/stamp.jpg",
      "/images/stamp.jpg",
    ],
    currentIndex: 0,
  });

  const slideNext = () =>
    setValues({ ...values, currentIndex: values.currentIndex + 1 });

  const onSlideChanged = (e) => {
    setValues({ ...values, currentIndex: e.item });
  };

  return (
    <Box d='flex' py={10} textAlign='center' justifyContent='center'>
      <SlideImage
        onSlideChanged={onSlideChanged}
        onClick={slideNext}
        currentIndex={values.currentIndex}
        urls={values.galleryItems.map((url, i) => (
          <Box w={"200px"} px={2}>
            <Image
              key={i}
              src={url}
              width={200}
              height={200}
              layout='responsive'
            />
          </Box>
        ))}
      />
    </Box>
  );
};

export default ImageComponent;
