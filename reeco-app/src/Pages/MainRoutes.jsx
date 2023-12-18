import React from 'react'
import {Route, Routes } from "react-router-dom"
import { Store } from './Store'
import { Login } from './Login'
import { Orders } from './Orders'
import { Analytics } from './Analytics'
import { Cart } from './Cart'


export const MainRoutes = () => {

  return <Routes>
  <Route path={"/"} element={<Store/>} />
  <Route path={"/user"} element={<Login/>} />
  <Route path={"/Orders"} element={<Orders/> } />
  <Route path={"/Analytics"} element={<Analytics/> } />
  <Route path={"/Cart"} element={<Cart/> } />
  // <Route path={"*"} element={<img src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif" alt="404 Not Found" />} />
    </Routes>
}
