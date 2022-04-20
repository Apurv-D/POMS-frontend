// import { IconButton } from "@chakra-ui/button";
// import { useColorMode } from "@chakra-ui/color-mode";
// import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
// import { FaSun, FaMoon } from "react-icons/fa";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Flex, VStack, Heading, Switch } from "@chakra-ui/react";

import { Modal } from "@chakra-ui/react";
import React from "react";
import Landing from "./pages/Landing"
import UserSettings from "./pages/UserSettings"
import ProductHistory from "./pages/ProductHistory"
// import UserOption from "./components/UserOption";


function App(){
    return(
        <ProductHistory />
        // <Landing />
        // <UserSettings />
    )
}

export default App;
