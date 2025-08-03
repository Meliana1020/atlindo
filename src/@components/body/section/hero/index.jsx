// import React, { useRef, useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { heroSection } from "../../../data/dami-data";
// import "./index.scss";

// const HeroSection = () => {
//   const [windowWidth, setWindowWidth] = useState(
//     typeof window !== "undefined" ? window.innerWidth : 1200
//   );
//   //   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Settings for slider
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     arrows: false,
//     adaptiveHeight: true,
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="hero-wrapper">
//       {/* Navigation Header */}

//       {/* Hero Slider */}
//       <div className="hero-slider-container">
//         <Slider {...settings}>
//           {heroSection.map((item, index) => (
//             <div key={index} className="hero-slide">
//               <div className="slide-image-container">
//                 <img
//                   src={windowWidth > 768 ? item.img : item.imgMobile}
//                   alt={`Slide ${index + 1}`}
//                   className="slide-image"
//                 />
//                 <div className="image-overlay"></div>
//               </div>

//               <div className="slide-content">
//                 <h1>Engineering Excellence</h1>
//                 <h2>Building Indonesia's Future</h2>
//                 <p>
//                   PT ALTINDO MITRA PERKASA - Your trusted partner in
//                   construction and engineering
//                 </p>

//                 <div className="button-group">
//                   <a href="#about" className="primary-button">
//                     Learn More
//                   </a>
//                   <a href="#contact" className="secondary-button">
//                     Contact Us
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>

//         {/* Stats Badge */}
//         <div className="stats-badge">
//           <div className="stats-icon">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </div>
//           <div className="stats-text">
//             <span>50+</span>
//             <p>Successful Projects</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import { Box, Button, Flex, Heading, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./index.scss";
import heroImg from "../../../data/images/img-project/Fabrication.jpg";

// Ubah Chakra Box jadi MotionBox
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const HeroSection = () => {
  return (
    <MotionBox
      className="hero-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <MotionFlex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        className="hero-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <MotionBox
          flex="1"
          className="hero-text"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Text className="tagline">AWARD-WINNING CONSTRUCTION EXCELLENCE</Text>
          <Heading className="main-heading">
            Where Innovation Drives <br />
            <span>Structural Perfection</span>
          </Heading>
          <Text className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </Text>

          <Wrap spacing="10px" mt={4}>
            {["General Tranding", "Fabrication", "Machining", "Interior", "Construction", "Electrical", "Security System"].map((item, idx) => (
              <WrapItem key={idx}>
                <Button className="main-button" variant="outline" colorScheme="orange">
                  {item}
                </Button>
              </WrapItem>
            ))}
          </Wrap>
        </MotionBox>

        <MotionBox
          flex="1"
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <Image src={heroImg} alt="Hero" className="hero-image" />
          <Box className="hero-stat-box">
            <Flex justify="space-around" align="center">
              <Box textAlign="center">
                <Text className="stat-number">640+</Text>
                <Text className="stat-label">Projects Completed</Text>
              </Box>
              <Box textAlign="center">
                <Text className="stat-number">25+</Text>
                <Text className="stat-label">Years of Experience</Text>
              </Box>
              <Box textAlign="center">
                <Text className="stat-number">450+</Text>
                <Text className="stat-label">Happy Customers</Text>
              </Box>
            </Flex>
          </Box>
        </MotionBox>
      </MotionFlex>
    </MotionBox>
  );
};

export default HeroSection;