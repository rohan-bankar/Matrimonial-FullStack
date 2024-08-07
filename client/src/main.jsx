import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp.jsx'
import Login from './components/Login/Login.jsx'
import Admin from './components/Admin/Admin.jsx'
import ChangePassword from './components/ChangePassword/ChangePassword.jsx'
import EmailVerify from './components/EmailVerify/EmailVerify.jsx'
import ForgetPasswordEmail from './components/ForgetPasswordEmail/ForgetPasswordEmail.jsx'
import ResetPassword from './components/ResetPassword/ResetPassword.jsx'
import Home from './components/Home/Home.jsx'
import Form from './components/Form/Form.jsx'
import Profile from './components/ProfilePage/ProfilePage.jsx'
import Search from './components/Search/Search.jsx'
import AdminDashBoard from './components/AdminDashBoard/AdminDashBoard.jsx'
// import { UserProvider } from './components/UserContext/UserContext.jsx'
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='/' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/admin-login' element={<Admin/>}/>
    <Route path='/change-password' element={<ChangePassword/>}/>
    <Route path='/verify-email/:userId' element={<EmailVerify/>}/>
    <Route path='/forget-password-email' element={<ForgetPasswordEmail/>}/>
    <Route path='/reset-password/:token' element={<ResetPassword/>}/>
    <Route path='/form' element={<Form/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/dash-board' element={<AdminDashBoard/>}/>
  </Route>
))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <UserProvider> */}
      <RouterProvider router={router}/>
    {/* </UserProvider> */}
  </React.StrictMode>,
)
