import React, { Component } from 'react'
import {NavWrap} from './nav.js'

import {NavLink} from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <NavWrap>
                <ul>
                    <li>
                        <NavLink
                            to="/guide/hot"
                        >
                            <img src="https://fes.qyerstatic.com/FjiWdzANqPB2Nm0wtDTvrr8HDrsg?imageslim" alt=""/>
                            <span>锦囊</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/plane"
                        >
                            <img src="https://fes.qyerstatic.com/Fgg0Tsbl5u7zvbNnmVhjDJd-3I-_?imageslim" alt=""/>
                            <span>行程助手</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/youji"
                        >
                            <img src="https://fes.qyerstatic.com/FoRfPUtUloa5MqNwOv5iIcqQ4rHv?imageslim" alt=""/>
                            <span>游记</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/biu"
                        >
                            <img src="https://fes.qyerstatic.com/FkMxtgHBTCKsjaLBZ1B7xHGg08QT?imageslim" alt=""/>
                            <span>Biu</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/question"
                        >
                            <img src="https://fes.qyerstatic.com/FsqBlRsF2hnYNrfR9YhCWQqD2j_P?imageslim" alt=""/>
                            <span>问答</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/place"
                        >
                            <img src="https://fes.qyerstatic.com/Fgh5NStqSlSjuK7vtLSwOXg4RwNz?imageslim" alt=""/>
                            <span>目的地</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/hotel"
                        >
                            <img src="https://fes.qyerstatic.com/Fvv-TfNa_RKqKW0sTcp2BqwgVJNZ?imageslim" alt=""/>
                            <span>酒店</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/mall"
                        >
                            <img src="https://fes.qyerstatic.com/FmZQUj73tzL9QixhyTBUtpxbxBqt?imageslim" alt=""/>
                            <span>商城</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/partner"
                        >
                            <img src="https://fes.qyerstatic.com/Ft-_BNtwDwbLCwNbk8a6JKMx_OME?imageslim" alt=""/>
                            <span>约伴</span>

                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/column"
                        >
                            <img src="https://fes.qyerstatic.com/Fibzv7V9e1eoPD7XT4C0uC-hZIf7?imageslim" alt=""/>
                            <span>专栏</span>
                        </NavLink>
                    </li>
                    
                </ul>
                
            </NavWrap>
        )
    }
}

export default Nav
