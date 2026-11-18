
import {  Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Loginpage from '../components/loginpage';
import List from '../components/table';
import { useAuthStore } from '../components/AuthStore';
import Test from '../components/test';
 const Protucted = ()=>{
const {isLogin , token} = useAuthStore()
 if( !isLogin && !token){
    return <Navigate to="/" replace />
 }
 return <Outlet />

 }
 const Public = ()=>{
const {isLogin , token} = useAuthStore()
 if( isLogin && token){
    return <Navigate to="/table" replace />
 }
 return <Outlet />

 }


 export function Router (){
 return ( 
 <Routes>
    <Route element={<Public />}>
 <Route  path='/' element ={<Loginpage/>}/>
    </Route>
    <Route element={<Protucted />}>
 <Route  path='/table' element ={<List/>}/>
    </Route>
 </Routes>
 )
}








