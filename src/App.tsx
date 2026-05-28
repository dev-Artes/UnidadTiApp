import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import useRouterTitle from './hooks/useRouterTitle'

import { 
  Home,
  CreateUser,
  CreateBrand,
  CreateDevice,
  CreateSoftware,
  CreateCertificate,
  UserView,
  BrandView,
  DeviceView,
  SoftwareView,
  CertificateView,
  ReassignmentCertificate
} from './features'



function App() {
  const RouterTitle = () => {
    useRouterTitle()
    return null
  }

  return (
    <Router>
      <RouterTitle/>
        <Routes>
          <Route path='/' element={<Home/>}/>


          
          <Route path='/certificate/create' element={<CreateCertificate/>}/>
          <Route path='/certificate/reassignment' element={<ReassignmentCertificate/>}/>
          <Route path='/certificates' element={<CertificateView/>}/>

          <Route path='/users' element={<UserView/>}/>
          <Route path='/user/create' element={<CreateUser/>}/>

          <Route path='/brands' element={<BrandView/>}/>
          <Route path='/brand/create' element={<CreateBrand/>}/>

          <Route path='/devices' element={<DeviceView/>}/>
          <Route path='/device/create' element={<CreateDevice/>}/>

          <Route path='/softwares' element={<SoftwareView/>}/>
          <Route path='/software/create' element={<CreateSoftware/>}/>
          

        </Routes>
    </Router>
  )
}

export default App
