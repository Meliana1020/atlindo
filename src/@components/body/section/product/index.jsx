import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  Flex,
  SimpleGrid,
  Card,
  CardBody,
  Stack,
} from "@chakra-ui/react";
import { product } from "../../../data/dami-data";
import "./index.scss";

const categories = [
  "General Trading",
  "Fabrication",
  "Machining",
  "Interior",
  "Construction",
  "Electrical",
  "Security System",
];

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredProducts = product.filter(
    (item) => item.kategoriProduct === activeCategory
  );

  return (
    <div className="product-catalog">
      <Box className="catalog-header">
        <Heading color="white">Our Product Catalog</Heading>
        <Text color="white">
          Explore our comprehensive range of products and services
        </Text>
      </Box>

      <Flex className="category-nav" flexWrap="wrap" justify="center" mb={6}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${cat === activeCategory ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
            <div className="underline" />
          </button>
        ))}
      </Flex>

      <Box className="catalog-container">
        {product.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            {filteredProducts.map((item, idx) => (
              <Card
                key={idx}
                boxShadow="md"
                borderRadius="lg"
                overflow="hidden"
              >
                <CardBody>
                  <Image
                    src={item.img[0]}
                    alt={item.nameProduct}
                    objectFit="cover"
                    w="100%"
                    h="200px"
                    mb={4}
                    borderRadius="md"
                  />
                  <Stack spacing={2}>
                    <Heading size="md">{item.nameProduct}</Heading>
                    <Text fontSize="sm" noOfLines={3}>
                      {item.deskripsion || "Deskripsi tidak tersedia"}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        ) : (
          <Text color="white" textAlign="center" fontSize="lg" mt={10}>
            No products found in this category.
          </Text>
        )}
      </Box>
    </div>
  );
};

export default ProductSection;
