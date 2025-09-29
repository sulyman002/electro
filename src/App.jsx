import React from "react";
import { Routes, Route } from "react-router-dom";
import ElectroLayout from "./ElectroLayout/ElectroLayout";
import AllCollections from "./Pages/AllCollections";
import store, { persistor } from "./Redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductPage from "./Pages/ProductPage.jsx";
import { Toaster } from "sonner";

 const queryClient = new QueryClient();

function App() {
 
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
         <QueryClientProvider client={queryClient}>
           <Routes>
            <Route path="/" element={<ElectroLayout />}>
              <Route path="all-collection" element={<AllCollections />} />
              <Route path="product/:id" element={<ProductPage />} />
            </Route>
          </Routes>
          <Toaster position="top-right" />
         </QueryClientProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
