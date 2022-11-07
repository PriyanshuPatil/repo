import React from "react";
import {Text,Image,Box,Stack,Heading,Tag,TagLabel} from '@chakra-ui/react'
const Product = (props) => {
  // TODO: Remove below const and instead import them from chakra
  const {title,gender,image,price,category}=props;
  return (
    <Stack data-cy="product" border="1px solid black" width="100%" margin={'auto'} >
      <Image data-cy="product-image" src={image} width="60%" margin={'auto'} />
      <Text data-cy="product-category">{category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{title}</Heading>
      <Box data-cy="product-price">{price}</Box>
    </Stack>
  );
};

export default Product;
