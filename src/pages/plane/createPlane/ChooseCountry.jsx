import React, { Component } from 'react'

import { ChooseCountryWrap } from './chooseCountry.js'
import Cancel from 'components/plane/Cancel.jsx'
import Search from 'components/plane/Search.jsx'

import { connect } from 'react-redux'
import { httpGet } from 'utils/http.js'

import { Tabs, WhiteSpace } from 'antd-mobile';
import BScroll from 'better-scroll'

const tabs = [
    { title: '热门', id: 0 },
    { title: '亚洲', id: 10 },
    { title: '欧洲', id: 12 },
    { title: '非洲', id: 76 },
    { title: '北美', id: 234 },
    { title: '南美', id: 235 },
    { title: '大洋洲', id: 239 },
    { title: '南极洲', id: 759 },
];

const mapState = state => ({
    countryShow: state.plane.countryShow,
    countryList:state.plane.countryList
})

const mapDispatch = dispatch => {
    return {
        changeCountry: () => {
            dispatch({
                type: 'countryShow',
                countryShow: true
            })
        },
        getCountry: (countryList) => {
            dispatch({
                type: 'countryList',
                countryList
            })
        }
    }
}
const url = '/plan/country/getcountry/'

class ChooseCountry extends Component {
    state = {
        list: [],
        a: '12'
    }

    componentDidMount() {
        let params = {
            contid: 0
        }
        this.getData(url, params)
    }

    handleChange = (tab, index) => {
        this.getData(url, {
            contid: tab.id
        })
    }

    chooseCountry = (id,img,name) => {
        return ()=>{
            this.props.getCountry({id,img,name})
        }
    }

    async getData(url, params) {
        let result = await httpGet({
            url,
            params
        })
        await this.setState({
            list: result.data.data
        })
        new BScroll('.section-wrap', {
            scrollY: true,
            mouseWheel: true,
            preventDefault:false
        })

    }

    render() {
        return (
            <ChooseCountryWrap>
                <section className="section-wrap">
                    <div>
                        <Search placehoder="请填写想去的国家及地区"></Search>
                        <WhiteSpace />
                        <Tabs
                            tabs={tabs}
                            initialPage={0}
                            animated={true}
                            useOnPan={false}
                            tabBarActiveTextColor="#fff"
                            tabBarUnderlineStyle={{ borderColor: '#fff' }}
                            onChange={this.handleChange}
                        >
                            <div>
                                <ul className="list-wrap">
                                    {
                                        this.state.list.map((value) => {
                                            return (
                                                <li
                                                    className="list-item"
                                                    key={value.countryid + value.countryname}
                                                    onClick={this.chooseCountry(value.countryid,value.countryimg,value.countryname)}
                                                >
                                                    <img src={value.countryimg} alt="" />
                                                    <span>{value.countryname}</span>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                                <div className="space"></div>
                            </div>
                        </Tabs>
                        <WhiteSpace />
                    </div>
                </section>

                <Cancel
                    type="chooseCountry"
                >
                </Cancel>
            </ChooseCountryWrap>
        )
    }
}
export default connect(mapState, mapDispatch)(ChooseCountry)
