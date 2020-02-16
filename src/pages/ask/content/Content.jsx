import React,{useRef} from 'react'
import { NavLink ,Route,Redirect,Switch} from 'react-router-dom'

import {ContentWrap} from './content.js'
import Select from './select/Select.jsx'
import New from './new/New.jsx'
import Wait from './wait/Wait.jsx'

export default (props)=>{
    const navRef=useRef()
    return (
        <ContentWrap>
            <ul ref={navRef} className="">
                <li>
                    <NavLink to="/question/select" activeClassName="active">精选问答</NavLink> 
                </li>
                <li>
                    <NavLink to="/question/new" activeClassName="active">最新问答</NavLink> 
                </li>
                <li>
                    <NavLink to="/question/wait" activeClassName="active">待回答问题</NavLink> 
                </li>
            </ul>

            <Switch>
                <Route
                    path="/question/select"
                    render={
                        ()=>{
                            return (
                                <Select ele={navRef}></Select>
                            )
                        }
                    }
                ></Route>
                <Route
                    path="/question/new"
                    render={
                        ()=>{
                            return (
                                <New ele={navRef}></New>
                            )
                        }
                    }
                ></Route>
                <Route
                    path="/question/wait"
                    render={
                        ()=>{
                            return (
                                <Wait ele={navRef}></Wait>
                            )
                        }
                    }
                ></Route>
                <Redirect
                    from="/question"
                    to="/question/select"
                ></Redirect>
            </Switch>

            

        </ContentWrap>
    )
}