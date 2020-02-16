import React, { Component } from 'react'

import Header from './header/Header.jsx'
import NavList from './nav/NavList.jsx'
import Footer from './footer/Footer.jsx'

export default class Guide extends Component {
    render() {
        return (
            <div style={{background:'#f5f5f5',height:'100%'}}>
                <Header></Header>
                <NavList></NavList>
                <Footer></Footer>
            </div>
        )
    }
}
