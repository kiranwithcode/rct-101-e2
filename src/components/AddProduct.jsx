import React  from "react";
import { Button, Input, Modal, ModalBody, Radio, RadioGroup, Select} from '@chakra-ui/react'

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  // const { isOpen, onOpen, onClose } = React.useDisclosure()
  // const finalRef = React.useRef()
  // const { isOpen, onOpen, onClose } = React.useDisclosure()
  return (
    <>
      <Button my={4} data-cy="add-product-button" maxWidth='200px' margin='auto'>Add Product</Button>
      <Modal >
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt"></option>
            <option data-cy="add-product-category-pant"></option>
            <option data-cy="add-product-category-jeans"></option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male"></Radio>
            <Radio data-cy="add-product-gender-female"></Radio>
            <Radio data-cy="add-product-gender-unisex"></Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button" maxWidth={10}>Create</Button>
        </ModalBody>
      </Modal>

      
    </>
  );
};

export default AddProduct;