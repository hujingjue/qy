import React, { Component } from 'react'

import {NavListWrap} from './navList.js'
import CityList from '../cityList/cityList.jsx'

import {Route,Redirect,withRouter,Switch} from 'react-router-dom'

import {httpGet} from 'utils/http.js'

class NavList extends Component {
    state={
        continent:[
            {
                id:'001',
                name:'热门',
                type:'hot'
            },
            {
                id:'002',
                name:'亚洲',
                type:'asia'
            },
            {
                id:'003',
                name:'欧洲',
                type:'europe'
            },
            {
                id:'004',
                name:'北美洲',
                type:'northAmerica'
            },
            {
                id:'005',
                name:'南美洲',
                type:'southAmerica'
            },
            {
                id:'006',
                name:'大洋洲',
                type:'oceania'
            },
            {
                id:'007',
                name:'非洲',
                type:'africa'
            },
            {
                id:'008',
                name:'南极洲',
                type:'antarctica'
            }
        ],
        type:'hot',
        data:[]
    }

    async componentDidMount(){
        if(this.props.location.pathname.substring(7)!==''){
            await this.setState({
                type:this.props.location.pathname.substring(7)
            })
        }
        await this.getData(`/api/${this.state.type}`)
    }
    
    handleHighLight=(type)=>{
        return async ()=>{
            this.props.history.push(`/guide/${type}`)
            await this.getData(`/api/${type}`)
            this.setState({
                type
            })
        }
    }

    async getData(url='/api/hot'){
        let result =await httpGet({
            url
        })
        this.setState({
            data:result.data.data
        })
    }

    render() {
        return (
            <NavListWrap>
                <ul>
                    {
                        this.state.continent.map((value,index)=>{
                            return (
                                <li 
                                onClick={this.handleHighLight(value.type)}
                                key={value.id}
                                >
                                    <span className={this.state.type===value.type?'active':''}>{value.name}</span>
                                    <i style={{display:(index===3||index===7)?'none':'inline-block'}}></i>
                                </li>
                            )
                        })
                    }
                </ul>

                <Switch>
                    <Route
                        path='/guide/:type'
                        render={(value)=>{
                                return (
                                    <CityList data={this.state.data}></CityList>    
                                )
                            }
                        }
                    ></Route>
                    <Redirect
                        from='/guide'
                        to='/guide/hot'
                    ></Redirect>

                </Switch>
            </NavListWrap>
        )
    }
}
export default withRouter(NavList)
