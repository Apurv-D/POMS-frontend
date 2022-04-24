import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/HeaderCSearch'
import HistoryTable from '../components/HistoryTable'
import ProductCard from '../components/Product_Card'
import { useParams } from 'react-router-dom';
import {ethers} from 'ethers';

const ProductHistory = () => {

  const { productID } = useParams();
  const address = '0xe988C4dd6E34fb732B80785b4334A225C14CB654';
  const abi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_mmAddr",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint32",
          "name": "EPC",
          "type": "uint32"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_phone",
          "type": "string"
        }
      ],
      "name": "createCustomer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "EPC",
          "type": "uint32"
        },
        {
          "internalType": "uint16",
          "name": "_cp",
          "type": "uint16"
        }
      ],
      "name": "enrollProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "EPC",
          "type": "uint32"
        }
      ],
      "name": "getCurrentOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "getCustomerDetails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "phone",
              "type": "string"
            },
            {
              "internalType": "uint32[]",
              "name": "productsOwned",
              "type": "uint32[]"
            },
            {
              "internalType": "bool",
              "name": "isCustomer",
              "type": "bool"
            }
          ],
          "internalType": "struct ProductManager.customerInfo",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "EPC",
          "type": "uint32"
        }
      ],
      "name": "getProductStatus",
      "outputs": [
        {
          "internalType": "enum ProductManager.ProductStatus",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "EPC",
          "type": "uint32"
        }
      ],
      "name": "getRecipient",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "EPC",
          "type": "uint32"
        }
      ],
      "name": "receiveProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "EPC",
          "type": "uint32"
        }
      ],
      "name": "shipProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
  
  const myContract_read = new ethers.Contract(address, abi,new ethers.providers.AlchemyProvider( "maticmum"));
  const logs = 
  React.useEffect(
     ()=>{async function fetch(){
      await myContract_read.queryFilter(
          myContract_read.filters.Transfer(null,null,123456),
          'earliest',
          'latest'
      ).then((res)=>
        console.log(res)
      ).catch((e)=>console.log('there is some errr'))
     }
    fetch()},
    []
  )



  return (
    <div>
      {/* <ChakraProvider>
          <Header />
        </ChakraProvider> */}
      {/* <h1>{productID}</h1> */}
      <HistoryTable ></HistoryTable>
      <ProductCard></ProductCard>
    </div>
  )
}

export default ProductHistory