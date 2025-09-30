import React from "react";
import { Routes, Route } from "react-router-dom";
import ElectroLayout from "./ElectroLayout/ElectroLayout";
import AllCollections from "./Pages/AllCollections";





import ProductPage from "./Pages/ProductPage.jsx";
import { Toaster } from "sonner";
import Home from "./Pages/Home.jsx";

function App() {
  return (
    <>
      
       
          <Routes>
            <Route path="/" element={<ElectroLayout />}>
              <Route index element={<Home />} />
              <Route path="all-collection" element={<AllCollections />} />
              <Route path="product/:id" element={<ProductPage />} />
            </Route>
          </Routes>
          <Toaster position="top-right" />
        
      
    </>
  );
}

export default App;
