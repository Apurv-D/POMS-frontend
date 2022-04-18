import React from 'react'
import Header from "../components/Header";
import {ChakraProvider, Box, HStack, VStack, FormControl, FormLabel, Input, Button} from '@chakra-ui/react';
import Typography from "@mui/material/Typography";
import theme from '../theme/index'

const Usersettings = () => {
  return (
    <>
    <Header />
    <center>
    <Typography
        // fontFamily="Cursive"
        fontSize="22px"
        variant="h6"
        fontWeight="bold"
    >
    Edit user settings
    </Typography><br/><br/><br/>
    <Box w='33%'>
    <HStack spacing='24px'>
        <Typography
            // fontFamily="Cursive"
            fontSize="18px"
            variant="h4"
            fontWeight="bold"
        >
        Notifications
        </Typography>
        <VStack spacing='24px'>
            <Typography
                // fontFamily="Cursive"
                fontSize="14px"
                align='left'
            >
            We require your email to send you product<br/> and account related updates.
            </Typography><br/>
                <ChakraProvider theme={theme}>
            <form>
                <FormControl>
                    <FormLabel><b>Email</b></FormLabel>
                    <Input type="email" placeholder="Email" />
                </FormControl><br/>
                <Button style={{float: 'left'}} type='submit' variant='solid' colorScheme='accept' size='md'>
                    Save changes
                </Button>
            </form>
                </ChakraProvider>
        </VStack>
    </HStack>
    </Box>
    </center>
    </>  
  );
};

export default Usersettings