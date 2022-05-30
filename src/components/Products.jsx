import React, { useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";
import { Flex, Grid } from '@chakra-ui/react'
import axios from "axios";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  const [data,setData] = useState([]);
  const [page,setPage] = useState(1);
  const [limit,setLimit] = useState(3);
  const [total, setTotal] = useState();

  useEffect(()=>{
    const callData = async () => {
      let res = await axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
      setData(res.data);
      setTotal(res.headers['x-total-count'])
    }
    callData();
  },[page]);

  const handleLimitChange = (value) => {
    console.log(`inside limit set ${value}`)
  }

  const firstPage = () => {
    setPage(1)
  }
  const lastPage = () => {
    setPage(Math.floor(total/limit))
  }
  const nextPage = () => {
    setPage(page+1)
  }
  const prevPage = () => {
    setPage(page-1)
  }
  return (
    <Flex flexDirection='column' padding={10} gap={10}>
      {/*  AddProduct */}
      <AddProduct />
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {/* List of Products */}
        {
          data.map((el)=>{
            return <Product details={el} key={el.id}/>
          })
        }
        
      </Grid>
      {/* Pagination */}
      <Pagination handleLimitChange={handleLimitChange}
                  firstPage={firstPage}
                  lastPage={lastPage}
                  nextPage={nextPage}
                  prevPage={prevPage}
                  total={total}
                  page={page}/>
    </Flex>
  );
};

export default Products;