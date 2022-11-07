import React from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import {Button,Modal,ModalBody,Input,Select,RadioGroup,ModalHeader,Radio,ModalOverlay,ModalContent,ModalCloseButton,} from '@chakra-ui/react'
import { useState } from "react";
const AddProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [title,settitle]=useState("");
  const [price,setprice]=useState("");
  const [gender,setgender]=useState("");
  const [category,setcategory]=useState("");

  const finalRef = React.useRef(null)
  // TODO: Remove below const and instead import them from chakra
const handleChange=(e)=>{
 
if(e.target.name=="title"){
  settitle(e.target.value)
}
if(e.target.name=="price"){
  setprice(e.target.value)
}
if(e.target.name=="category"){
  // setcategory(e.target.value)
  
}
if(e.target.name=="gender"){
  setgender(e.target.value)
}
console.log(e.target)
}


  
return (
    <Box width={'10%'} margin='auto' mt='50px'>
      <Button onClick={onOpen} my={4} data-cy="add-product-button">Add New Products</Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} >
      <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
         <ModalCloseButton />
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" onChange={(e)=>{handleChange(e)}} name={'title'} placeholder="add-product-title"/>
          <Select data-cy="add-product-category" onChange={(e)=>{handleChange(e)}} name={'category'}>
            <option data-cy="add-product-category-shirt" >Shirts</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender" onChange={(e)=>{handleChange(e)}} name={'gender'}>
            <Radio data-cy="add-product-gender-male">MALE</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" name={'price'} onChange={(e)=>{handleChange(e)}} placeholder="add-product-price" />
          <Button data-cy="add-product-submit-button"  onClick={()=>{console.log(title,category,gender,price);onClose()}} >Create</Button>
        </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
 
  );
};

export default AddProduct;
