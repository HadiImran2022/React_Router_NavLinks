import React from 'react'
import {Layout}  from './Layout'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
       <>
        <div style={{height:"100vh",display:"flex",width:""}} className=''>
            <div style={{width:"30%"}} className="">
            <Layout/>
            </div>
            <div style={{width:"70%",marginTop:"20px",backgroundColor:"lightblue",padding:"50px",fontSize:"32px",fontWeight:"bold"}} className="">
            <Outlet/>
            </div>
        </div>
    </>
    </div>
  )
}

export default Dashboard
