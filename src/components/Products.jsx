import React from "react";
import {Flex,Grid} from '@chakra-ui/react';
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import { Getpost } from "./axios";
import { useEffect } from "react";
import { useState } from "react";
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
const [page,setpage]=useState(1);
const [limit,setlimit]=useState(3);
const [post,setPost]=useState([]);

useEffect(()=>{
Getpost(limit,page).then((res)=>{
  setPost(res.data)
}).catch((err)=>{
  console.log(err);
});

},[page,limit])




  return (
    <Flex flexDirection={'column'} > 
      <AddProduct/>
   <Grid margin={'auto'} gap='20px' templateColumns='repeat(3, 1fr)'>
     {post.map((el)=>{
      return<Product key={el.id} title={el.title} gender={el.gender} image={el.imageSrc} price={el.price} category={el.category} />
      })} 
      </Grid>
      <Pagination/>
    </Flex>
  );
};

export default Products;
