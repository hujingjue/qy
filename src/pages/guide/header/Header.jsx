import React, { Component } from 'react'

import {HeaderWrap} from './header.js'

import {withRouter} from 'react-router-dom'

class Header extends Component {
    goBack=()=>{
        this.props.history.goBack()
    }
    render() {
        return (
            <HeaderWrap>
                <header>
                    <i 
                    className='iconfont icon-back'
                    onClick={this.goBack}
                    ></i>
                    <h2>穷游锦囊</h2>
                    <i className='iconfont icon-menu1'></i>
                </header>
            </HeaderWrap>
        )
    }
}
export default withRouter(Header)
