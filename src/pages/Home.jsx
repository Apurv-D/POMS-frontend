import { Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import Header from "../components/Header"
import LogoCenter from "../components/LogoCenter"

const Home = () => {
  return (
    <VStack m={0} p={0}>
      <Header />
      <LogoCenter />
    </VStack>
  );
};

export default Home