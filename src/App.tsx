import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import useRouterTitle from './hooks/useRouterTitle'

import { 
  Home,
  UserView, CreateUser,
  BrandView, CreateBrand,
  DeviceView, CreateDevice,
  SoftwareView, CreateSoftware,
  CertificateView, CreateCertificate,
  ReassignmentCertificate,
} from './features'

import LoginLuxury from './components/UI/Table/Login'
import ProtectedRoute from './components/auth/ProtectedRoute'
import RoleProtectedRoute from './components/auth/RoleProtectedRoute'



function App() {
  const RouterTitle = () => {
    useRouterTitle()
    return null
  }

  return (
    <Router>
      <RouterTitle/>
        <Routes>
          <Route path='/login' element={<LoginLuxury/>}/>

          <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>

          
          <Route path='/certificate/create' element={<ProtectedRoute><CreateCertificate/></ProtectedRoute>}/>
          <Route path='/certificate/reassignment' element={<ProtectedRoute><ReassignmentCertificate/></ProtectedRoute>}/>
          <Route path='/certificates' element={<ProtectedRoute><CertificateView/></ProtectedRoute>}/>

          <Route path='/users' element={<ProtectedRoute><RoleProtectedRoute allowedRoles={['admin']}><UserView/></RoleProtectedRoute></ProtectedRoute>}/>
          <Route path='/user/create' element={<ProtectedRoute><RoleProtectedRoute allowedRoles={['admin']}><CreateUser/></RoleProtectedRoute></ProtectedRoute>}/>

          <Route path='/brands' element={<ProtectedRoute><BrandView/></ProtectedRoute>}/>
          <Route path='/brand/create' element={<ProtectedRoute><CreateBrand/></ProtectedRoute>}/>

          <Route path='/devices' element={<ProtectedRoute><DeviceView/></ProtectedRoute>}/>
          <Route path='/device/create' element={<ProtectedRoute><CreateDevice/></ProtectedRoute>}/>

          <Route path='/softwares' element={<ProtectedRoute><SoftwareView/></ProtectedRoute>}/>
          <Route path='/software/create' element={<ProtectedRoute><CreateSoftware/></ProtectedRoute>}/>
          

        </Routes>
    </Router>
  )
}

export default App
