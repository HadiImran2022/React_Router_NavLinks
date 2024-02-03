import React from 'react'
import { useNavigate, useParams , Link} from 'react-router-dom';

export const Layout = () => {
    const list= ["OrderList","OrderDetails","Analytics","Customer","Reviews","FoodDetails","CustomerDetail"];
    const naviagte = useNavigate();
    const params = useParams();
  return (
    <div style={{backgroundColor:"lightgray",height:"100vh", width:"500px",padding:"0",margin:"0px"}} className='my-nav'>
        <div style={{padding:""}} className='inside-nav'>
            <h1 className=''>Dashboard</h1>
        </div>
        <div style={{padding:""}} className=''>
            {
                list.map((item,index)=>{
                    return(
                        <div key={index} style={{padding:"15px",color:"black",textDecoration:"none"}} className=''>
                            <Link style={{color:"black",textDecoration:"none",fontSize:"19px",fontWeight:"600"}} className='tabs' to={item}>{item}</Link>
                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}
