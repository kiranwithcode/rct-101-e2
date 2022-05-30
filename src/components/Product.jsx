import React from "react";
import { Stack, Tag, TagLabel, Heading, Box, Image,Text } from '@chakra-ui/react';

const Product = (props) => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    <Stack data-cy="product">
      <Image 
          data-cy="product-image"
          src={props.details.imageSrc} 
          alt='Product Image' />
      <Text data-cy="product-category">{props.details.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{props.details.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{props.details.title}</Heading>
      <Box data-cy="product-price">{`Rs. ${props.details.price} / unit`}</Box>
    </Stack>
  );
};

export default Product;