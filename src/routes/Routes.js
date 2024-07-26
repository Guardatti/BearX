import React from 'react'
import { BrowserRouter, Routes as ReactDomRoutes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import AboutUs from '../pages/AboutUs/AboutUs'
import Peripherals from '../pages/Peripherals/Peripherals'
import ComponentsPC from '../pages/ComponentsPC/ComponentsPC'
import Consoles from '../pages/Consoles/Consoles'
import GamingChairs from '../pages/GamingChairs/GamingChairs'
import Tablets from '../pages/Tablets/Tablets'
import AppleStore from '../pages/AppleStore/AppleStore'
import ConnectivityAndNetworks from '../pages/ConnectivityAndNetworks/ConnectivityAndNetworks'
import ContactUs from '../pages/ContactUs/ContactUs'
import Layout from '../components/Layout/Layout'
import PageNoutFound from '../pages/Error/PageNoutFound'
import Aerocool from '../pages/brands/aerocool/Aerocool'
import Amd from '../pages/brands/amd/Amd'
import Apple from '../pages/brands/apple/Apple'
import Asus from '../pages/brands/asus/Asus'
import Corsair from '../pages/brands/corsair/Corsair'
import Coolermaster from '../pages/brands/coolermaster/Coolermaster'
import Gigabyte from '../pages/brands/gigabyte/Gigabyte'
import Hyperx from '../pages/brands/hyperx/Hyperx'
import Intel from '../pages/brands/intel/Intel'
import Kingston from '../pages/brands/kingston/Kingston'
import Logitech from '../pages/brands/logitech/Logitech'
import Msi from '../pages/brands/msi/Msi'
import Pny from '../pages/brands/pny/Pny'
import Primus from '../pages/brands/primus/Primus'
import Ps from '../pages/brands/ps/Ps'
import Razer from '../pages/brands/razer/Razer'
import Redragon from '../pages/brands/redragon/Redragon'
import Samsung from '../pages/brands/samsung/Samsung'
import Seagate from '../pages/brands/seagate/Seagate'
import Secretlab from '../pages/brands/secretlab/Secretlab'
import Thermaltake from '../pages/brands/thermaltake/Thermaltake'
import Tplink from '../pages/brands/tplink/Tplink'
import Xppen from '../pages/brands/xppen/Xppen'
import Xseries from '../pages/brands/xseries/Xseries'
import Checkout from '../pages/Checkout/Checkout'
import Register from '../pages/Register_Login/Register/Register'
import Login from '../pages/Register_Login/Login/Login'
import Profile from '../pages/Profile/Profile'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'
import MyOders from '../pages/MyOrders/MyOders'
import Summary from '../pages/Summary/Summary'

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path='/' element={<Home />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='peripherals' element={<Peripherals />} />
          <Route path='components' element={<ComponentsPC />} />
          <Route path='consoles' element={<Consoles />} />
          <Route path='gamingchairs' element={<GamingChairs />} />
          <Route path='tablets' element={<Tablets />} />
          <Route path='applestore' element={<AppleStore />} />
          <Route path='connectivityandnetworks' element={<ConnectivityAndNetworks />} />
          <Route path='contactus' element={<ContactUs />} />
          <Route path='aerocool' element={<Aerocool />} />
          <Route path='amd' element={<Amd />} />
          <Route path='apple' element={<Apple />} />
          <Route path='asus' element={<Asus />} />
          <Route path='coolermaster' element={<Coolermaster />} />
          <Route path='corsair' element={<Corsair />} />
          <Route path='gigabyte' element={<Gigabyte />} />
          <Route path='hyperx' element={<Hyperx />} />
          <Route path='intel' element={<Intel />} />
          <Route path='kingston' element={<Kingston />} />
          <Route path='logitech' element={<Logitech />} />
          <Route path='msi' element={<Msi />} />
          <Route path='pny' element={<Pny />} />
          <Route path='primus' element={<Primus />} />
          <Route path='ps' element={<Ps />} />
          <Route path='razer' element={<Razer />} />
          <Route path='reddragon' element={<Redragon />} />
          <Route path='samsung' element={<Samsung />} />
          <Route path='seagate' element={<Seagate />} />
          <Route path='secretlab' element={<Secretlab />} />
          <Route path='thermaltake' element={<Thermaltake />} />
          <Route path='tplink' element={<Tplink />} />
          <Route path='xppen' element={<Xppen />} />
          <Route path='xboxseries' element={<Xseries />} />
          <Route path='checkout' element={
            <ProtectedRoute redirectTo='/login'>
              <Checkout />
            </ProtectedRoute>
          } />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='profile' element={
            <ProtectedRoute redirectTo='/login'>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path='myorders' element={
            <ProtectedRoute redirectTo='/Login'>
              <MyOders />
            </ProtectedRoute>
          }/>
          <Route path='summary/:OrderID' element={
            <ProtectedRoute redirectTo='/Login'>
              <Summary />
            </ProtectedRoute>
          }/>
          <Route path='*' element={<PageNoutFound />} />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes
