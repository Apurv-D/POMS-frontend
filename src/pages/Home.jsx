import React from 'react'
import HeaderC from "../components/HeaderC";
import AssetsManufacturedCarousal from "../components/AssetsManufacturedCarousal";
import RequestTable from '../components/RequestTable'
import ConfirmTable from '../components/ConfirmTable'
import HistoryTable from '../components/HistoryTable'
import ProductCard from '../components/Product_Card'

const Home = () => {
  return (
    <>
    <HeaderC/>
    {/* <Carousal/> */}
    {/* <RequestTable columnHeader={['Company Name','Company Prefix','Action']}/> */}
    {/* <ConfirmTable /> */}
    <ProductCard/>
    <HistoryTable/>
      </>  
  );
};

export default Home