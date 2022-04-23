// import { IconButton } from "@chakra-ui/button";
// import { useColorMode } from "@chakra-ui/color-mode";
// import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
// import { FaSun, FaMoon } from "react-icons/fa";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Flex, VStack, Heading, Switch } from "@chakra-ui/react";

import { Modal } from "@chakra-ui/react";
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import UserDashboard from "./pages/UserDashboard";
// import NavBar from "./components/Header";
import Landing from "./pages/Landing"
import UserSettings from "./pages/UserSettings"
import ProductHistory from "./pages/ProductHistory"
import ProductHistoryNC from "./pages/ProductHistoryNC"
import Home from "./pages/Home"
import HomeWalletC from "./pages/HomeWalletC"
import AdminDashboard from "./pages/AdminDashboard";
import ManufacturerDashboard from "./pages/ManufacturerDashboard";
import Header from "./components/Header";


function App() {
    const [data, setdata] = useState({
        address: "",
        Balance: 0,
      });
const userType = 'customer';
    return (
        <>
            <Router>
            <Header _setdata={setdata} _data={data} _userType={userType}/>  
                <Routes>
                    <Route path='/' element={data.address? <Navigate to='/home' /> : <Landing />} />
                    <Route path='/home' element={data.address? <Home/> : <Landing />} />
                    <Route path='/customer' element={<UserDashboard />} />
                    <Route path='/manufacturer' element={<ManufacturerDashboard />} />
                    <Route path='/settings' element={<UserSettings />} />
                    {/* <Route path='/' element={<Landing />} /> */}

                    {/* <Home/> */}
                    {/* <HomeWalletC/> */}
                    {/* <AdminDashboard/> */}
                    {/* <ManufacturerDashboard/> */}
                    {/* <UserDashboard /> */}
                    {/* <ProductHistory/> */}
                    {/* <ProductHistoryNC/> */}
                    {/* <UserSettings /> */}
                </Routes>
            </Router></>
    )
}

export default App;
