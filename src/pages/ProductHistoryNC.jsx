import React from 'react'
import Header from "../components/Header";
// import Carousal from "../components/carousal";
// import RequestTable from '../components/RequestTable'
// import ConfirmTable from '../components/ConfirmTable'
import HistoryTable from '../components/HistoryTable'
import ProductCard from '../components/Product_Card'

const ProductHistoryNC = () => {
  return (
    <>
    <Header/>
    {/* <Carousal/> */}
    {/* <RequestTable columnHeader={['Company Name','Company Prefix','Action']}/> */}
    {/* <ConfirmTable /> */}
    <ProductCard/>
    <HistoryTable/>
      </>  
  );
};

export default ProductHistoryNC