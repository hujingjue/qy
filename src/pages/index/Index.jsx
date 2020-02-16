import React, { Component } from 'react'

import Header from './header/Header.jsx'
import Nav from './nav/Nav.jsx'
import Discount from './discount/Discount.jsx'
import SelectPlay from './selectPlay/SelectPlay.jsx'
import SelectStrategy from './selectstrategy/SelectStrategy.jsx'
import Footer from './footer/Footer.jsx'



export class Index extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Nav></Nav>
                <Discount></Discount>
                <SelectPlay></SelectPlay>
                <SelectStrategy></SelectStrategy>
                <Footer></Footer>
            </div>
        )
    }
}

export default Index
