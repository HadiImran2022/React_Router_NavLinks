import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import OrderList from '../pages/OrderList'
import OrderDetail from '../pages/OrderDetail'
import Analytics from '../pages/Analytics'
import Customer from '../pages/Customer'
import Reviews from '../pages/Reviews'
import CustomersDetail from '../pages/CustomersDetail'
import FoodsDetail from '../pages/FoodsDetail'
import Foods from '../pages/Foods'
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='' element={<Dashboard/>}>
              <Route path='OrderList' element={<OrderList/>}/>
              <Route path='OrderDetails' element={<OrderDetail/>}/>
              <Route path='Analytics' element={<Analytics/>}/>
              <Route path='Customer' element={<Customer/>}/>
              <Route path='Reviews' element={<Reviews/>}/>
              <Route path='Reviews' element={<Foods/>}/>
              <Route path='FoodDetails' element={<FoodsDetail/>}/>
              <Route path='CustomerDetail' element={<CustomersDetail/>}/>


            </Route>
        </Route>
    )
)

export const Routing_App = () => {
  return (
    <>
     <RouterProvider router={router}/>
      
    </>
  )
}
