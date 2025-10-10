import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Route here
import Home from './pages/Home'
import RouteScrollToTop from './helper/RouteScrollToTop';
import Header from './headerfooter/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './headerfooter/Footer';
import './styles/common.css'
import About from './pages/About';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import BankDetails from './pages/BankDetails';
import TermsCondition from './pages/TermsCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Return from './pages/Return';
import Disclouse from './pages/Disclouse';
import PageNotFound from './pages/PageNotFound';
import Equity from './pages/Equity';
import Ipo from './pages/Ipo';
import MutualFund from './pages/MutualFund';
import EquityDerivatives from './pages/EquityDerivatives';
import CurrencyDerivatives from './pages/CurrencyDerivatives.jsx'
import Support from './pages/Support.jsx';
import Research from './pages/Research.jsx';
import WhatsappButton from "./components/WhatsappButton";

// #ac1929
const App = () => {
  return (
   <>
   <BrowserRouter>
   <RouteScrollToTop/>
   <Header/>
   {/* <Headersecond/> */}
   <Routes>
    <Route  path="/" element={<Home />} />
    <Route  path="/about" element={<About />} />
    <Route  path="/package" element={<Packages />} />
    <Route  path="/contact" element={<Contact />} />
    <Route  path="/bank-detail" element={<BankDetails />} />
    <Route  path="/terms-and-condition" element={<TermsCondition />} />
    <Route  path="/privacy-policy" element={<PrivacyPolicy />} />    
    <Route  path="/return-refund" element={<Return />} />
    <Route  path="/disclosure" element={<Disclouse />} />
    <Route  path="/products/equity" element={<Equity />} />
    <Route  path="/products/currency-derivatives" element={<CurrencyDerivatives/>} />
    <Route  path="/products/ipo" element={<Ipo />} />
    <Route  path="/products/mutual-funds" element={<MutualFund />} />
    <Route  path="/products/equity-derivatives" element={<EquityDerivatives />} />
    <Route  path="/support" element={<Support />} />
    <Route  path="/research" element={<Research />} />
    
    
    <Route  path="*" element={<PageNotFound />} />
   </Routes>
   <WhatsappButton />
<Footer/>
   </BrowserRouter>
   </>
  )
}

export default App