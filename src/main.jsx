import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
const style={global:(props)=>({
  body:{
    color:mode('gray.800','whiteAlpha.900')(props),
    bg:mode('gray.100','#101010')(props),
  }
})};
const config={
  initialColorMode:"dark",
  useSystemColorMode:true
};
const colors={
  gray:{
    light:"#616161",
    dark:"#1e1e1e"
  }
}
const theme=extendTheme({config,styles,colors})
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
