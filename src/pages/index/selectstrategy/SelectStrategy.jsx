import React, { Component, createRef } from 'react'


import { SelectStrategyWrap } from './selectStrategy.js'
import Title from 'components/title/Title.jsx'
import WaterFullList from 'components/selectStrategy/WaterFullList.jsx'

import { httpPost } from 'utils/http'
import {withRouter} from 'react-router-dom'

class SelectStrategy extends Component {
    constructor() {
        super()
        this.listWrap = createRef()
    }
    state = {
        list: [],
        page: 1,
        lock:false
       
    }

    async componentDidMount() {
        let res = await httpPost({
            url: '/home/api/biu_list',
            data: {
                page: this.state.page
            }
        })
        this.setState({
            list: res.data.data
        })
    }

    loadMoreData = async () => {
        if(!this.state.lock){
            await this.setState({
                page: ++this.state.page,
                lock:true
            })
            let res = await httpPost({
                url: '/home/api/biu_list',
                data: {
                    page: this.state.page
                }
            })
            this.setState({
                list: [
                    ...this.state.list,
                    ...res.data.data
                ]
            })
            this.setState({
                lock:false
            })
        }
    }

    render() {
        return (
            <SelectStrategyWrap>
                <Title title="精选攻略"></Title>
                <div>
                    <ul ref={this.listWrap}>
                        <WaterFullList
                            list={this.state.list}
                            listWrap={this.listWrap}
                        ></WaterFullList>
                    </ul>
                    <p className="loading-content" onClick={this.loadMoreData}>加载更多内容</p>
                </div>
            </SelectStrategyWrap>
        )
    }
}

export default withRouter(SelectStrategy)
