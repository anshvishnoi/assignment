import react from 'react'
import reactdom from 'react-router-dom'
import app from './app'
import { BrowserRouter } from 'react-router-dom'
import{cartprovider}from'./contex/cartcontex'

reactdom.creatroot(document.getelemntbyid('root')).render(
    <BrowserRouter>
    <cartprovider>
        <app/>
        </cartprovider>
        </BrowserRouter>
)