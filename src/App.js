import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';
import Form from './Form/Form';
import Help from './Help/Help';
import { Routes, Route } from 'react-router-dom';
import Mobile from './Mobile/Mobile';
import Polarturn from './Polarturn/Polarturn';
import Polar360 from './Polar360/Polar360';
import Thankyou from './Thankyou/Thankyou';
import ShippingPolicy from './ShippingPolicy/ShippingPolicy';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import RefundPolicy from './RefundPolicy/RefundPolicy';
import CookiePolicy from './CookiePolicy/CookiePolicy';
import MyOrders from './MyOrders/MyOrders';
import AllProducts from './AllProducts/AllProducts';
import MyAddresses from './MyAddresses/MyAddresses';
import { CellPhones } from './CellPhones/CellPhones';
import { SpecialOffers } from './SpecialOffers/SpecialOffers';
import Laptoptabs from './Laptoptabs/Laptoptabs';
import MyAccount from './MyAccount/MyAccount';
import Speakerhead from './Speakerhead/Speakerhead';















function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/help' element={<Help />}></Route>
        <Route path='/AllProducts' element={<AllProducts />}></Route>
        <Route path='/CellPhones' element={<CellPhones />}></Route>
        <Route path='/Speakerhead' element={<Speakerhead />}></Route>
        <Route path='/Laptoptabs' element={<Laptoptabs />}></Route>
        <Route path='/SpecialOffers' element={<SpecialOffers />}></Route>
        <Route path='/MyOrders' element={<MyOrders />}></Route>
        <Route path='/help' element={<Help/> }></Route>
        <Route path='/' element={ <HomePage /> }></Route>
      </Routes>


      {/* <Mobile/> */}
      {/* <Polarturn/>
      <Polar360/>
      <Form/>
      <Thankyou/>
      <ShippingPolicy />
      <PrivacyPolicy />
      <RefundPolicy />
      <CookiePolicy />
      <MyOrders />  
      <AllProducts /> */}
      {/* <MyAddresses />
      <CellPhones/>
      <SpecialOffers />
      <Laptoptabs/>
      <SpecialOffers/>
      <MyAccount />
      <Speakerhead/> */}
      






      <Footer />
    </div>
  )


}

export default App;
