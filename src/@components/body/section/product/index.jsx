import React, { useState } from "react";
import Slider from "react-slick";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Stack,
  useBreakpointValue,
  Flex,
  Card,
  CardBody,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  SimpleGrid,
} from "@chakra-ui/react";
import { product, portfolioData } from "../../../data/dami-data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleDetailClick = (productItem) => {
    setSelectedProduct(productItem);
    onOpen();
  };

  return (
    <Box as="section" py={10} px={{ base: 4, md: 10 }} maxW="7xl" mx="auto">
      <Heading textAlign="center" fontSize={{ base: "2xl", md: "4xl" }} mb={4}>
        Our Product Catalog
      </Heading>
      <Text textAlign="center" fontSize={{ base: "sm", md: "md" }} mb={10}>
        Explore our comprehensive range of products and services
      </Text>

      <Slider {...settings}>
        {product.map((item, idx) => (
          <Box key={idx} px={2}>
            <Card boxShadow="md" borderRadius="xl" overflow="hidden" h="100%">
              <CardBody>
                <Image
                  src={isMobile ? item.imgMobile[0] : item.img[0]}
                  alt={item.nameProduct}
                  borderRadius="lg"
                  h="200px"
                  w="full"
                  objectFit="cover"
                  mb={4}
                />
                <Stack spacing={3}>
                  <Heading fontSize="xl">{item.nameProduct}</Heading>
                  <Text fontSize="sm" noOfLines={3}>
                    {item?.deskripsion || "Deskripsi tidak tersedia"}
                  </Text>
                  <Flex justifyContent="flex-end">
                    <Button
                      size="sm"
                      colorScheme="orange"
                      onClick={() => handleDetailClick(item)}
                    >
                      Detail
                    </Button>
                  </Flex>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        ))}
      </Slider>

      {/* Modal Detail Produk */}
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedProduct?.nameProduct}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
             <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                          {portfolioData.map((item) => (
                            <Box
                              key={item.id}
                              bg="white"
                              boxShadow="md"
                              borderRadius="lg"
                              overflow="hidden"
                            >
                              <Image
                                src={item.img}
                                alt={item.title}
                                objectFit="cover"
                                w="100%"
                                h="200px"
                              />
                              <Box p={4}>
                                <Heading as="h3" size="md" mb={1}>
                                  {item.title}
                                </Heading>
                                <Text fontSize="sm" color="gray.500">
                                  {item.category} • {item.year}
                                </Text>
                                <Text mt={2} fontSize="sm">
                                  {item.description}
                                </Text>
                              </Box>
                            </Box>
                          ))}
                        </SimpleGrid>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" onClick={onClose}>
              Tutup
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductSection;