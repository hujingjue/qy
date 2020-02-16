import React, { Component } from 'react'

import Index from './index/Index.jsx'
import Plane from './plane/index/Plane.jsx'
import {LayoutWrap} from './layout.js'
import StepOne from './plane/createPlane/StepOne.jsx'
import SelectStrategyDetail from './detail/selectStrategy/SelectStrategyDetail.jsx'
import Guide from 'pages/guide/Guide.jsx'
import DiscountDetail from 'pages/detail/discount/DiscountDetail.jsx'
import Reserve from 'pages/detail/discount/reserve/Reserve.jsx'
import Ask from 'pages/ask/Ask.jsx'
import Detail from 'pages/ask/content/select/Detail.jsx'
import Youji from 'pages/youji/Youji.jsx'
import SortDetail from 'pages/youji/detail/Detail.jsx'
import Biu from 'pages/biu/Biu.jsx';
import Mall from 'pages/mall/Mall.jsx'

import {Route,Switch} from 'react-router-dom'


export class Layout extends Component {
    render() {
        return (
            <>
                <LayoutWrap>
                    <Switch>
                        <Route
                            exact
                            path='/'
                            component={Index}
                        ></Route>
                        <Route
                            path='/guide'
                            component={Guide}
                        ></Route>
                        <Route
                            path='/plane'
                            component={Plane}
                        ></Route>
                        <Route
                            path='/plan/createplans'
                            component={StepOne}
                        ></Route>
                        <Route
                            path='/selectstrategy/:id'
                            component={SelectStrategyDetail}
                        ></Route>
                        <Route
                            path='/discount/reserve/:id'
                            component={Reserve}
                        ></Route>
                        <Route
                            path='/discount/:id'
                            component={DiscountDetail}
                        ></Route>
                        <Route
                            path='/question/select/detail/:id/:index'
                            component={Detail}
                        ></Route>
                        <Route
                            path='/question'
                            component={Ask}
                        ></Route>
                        <Route
                            path='/youji/detail/:id/:name'
                            component={SortDetail}
                        ></Route>
                        <Route
                            path='/youji'
                            component={Youji}
                        ></Route>
                        <Route
                            path='/biu'
                            component={Biu}
                        ></Route>
                        <Route
                            path='/mall'
                            component={Mall}
                        ></Route>
                        
                    </Switch>
                </LayoutWrap>
            </>
        )
    }
}

export default Layout
