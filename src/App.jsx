import React from "react"
import { Routes, Route } from "react-router-dom";
import ElectroLayout from "./ElectroLayout/ElectroLayout";


function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<ElectroLayout />} >

      </Route>
    </Routes>
     
    </>
  )
}


export default App
