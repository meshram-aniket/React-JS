import logo from "./logo.svg";
import "./App.css";
import Forms from "./Forms/MyForms";
import SelfMadeForm from "./Forms/SelfMadeForm";
import Validation from "./Validation/abc";
import Validationform from "./Validation/Validateform";

import SignUpForm from "./Forms/SignUpForm";
import Fetching from "./HTTP methods/Fetching"
import FetchingImage from "./HTTP methods/FetchingImage"
import Practice from "./HTTP methods/Practice"
import GetData from "./HTTP methods/GetData"

import {BrowserRouter, Routes, Route} from "react"
import Hello from "./Component/Hello";

function App() {
  return (
    <>
    <Hello/>
      {/* <div className="container">
        <div className="row">
          <div className="col-6 col.md-4">
            <Validationform />
          </div>
        </div>
      </div> */}


      {/* <Forms/> */}
      {/* <SelfMadeForm/>
    <Validation/> */}
    
    {/* <SignUpForm/> */}
    {/* <Fetching/> */}
    {/* <FetchingImage/> */}
    {/* <Practice/> */}
    <GetData></GetData>
    

    
    </>
  );
}

export default App;
