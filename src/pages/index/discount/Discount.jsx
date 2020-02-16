import React, { Component } from 'react'
import {DiscountWrap} from './discount.js'
import Title from 'components/title/Title.jsx'

import {withRouter} from 'react-router-dom'

import BScroll from 'better-scroll'

class Discount extends Component {
    componentDidMount(){
        new BScroll('.list-wrap',{
            scrollX:true,
            scrollY:false,
            preventDefault:false
        })
    }

    goDetail=(id,img)=>{
        return ()=>{
            this.props.history.push(`/discount/${id}`,{img})
        }
    }

    render() {
        return (
            <DiscountWrap>
                <Title title="主打折扣"></Title>
                <div className="list-wrap">
                    <ul>
                        <li
                            onClick={this.goDetail(79124,'https://pic.qyer.com/Fu7QES6wXTVWNUDxktj5_IamjzcT/300x200')}
                        >
                            <img src="https://pic.qyer.com/Fu7QES6wXTVWNUDxktj5_IamjzcT/300x200" alt=""/>
                            <div>
                                <p>[拒签全退][全国25城联运]北京往返格鲁吉亚+阿塞拜疆7-30天自由行（预售至20年6月底/中文接机/赠2-4晚酒店/乌鲁木齐可停留/优惠购签证/目的地旅游）</p>
                                <span>3799</span>
                                <i>元起</i>
                            </div>
                        </li>
                        <li
                            onClick={this.goDetail(66688,'https://pic.qyer.com/Fsv23ujO7bNWStGpkCfdNezIY4Xy/300x200')}
                        >
                            <img src="https://pic.qyer.com/Fsv23ujO7bNWStGpkCfdNezIY4Xy/300x200" alt=""/>
                            <div>
                                <p>[枫叶季甩尾狂欢]北京/天津直飞日本东京/大阪/冲绳/札幌/福冈4-7天往返含税机票（双人送wifi，可代订签证， 可订大阪心斋桥公寓）</p>
                                <span>1382</span>
                                <i>元起</i>
                            </div>
                        </li>
                        <li
                            onClick={this.goDetail(131084,"https://pic.qyer.com/FjmAZIUoOsBWIa-lFKXv6su-CIyt/300x200")}
                        >
                            <img src="https://pic.qyer.com/FjmAZIUoOsBWIa-lFKXv6su-CIyt/300x200" alt=""/>
                            <div>
                                <p>北京往返厦门5天含税机票（含首晚市区精品酒店住宿+专车接机）</p>
                                <span>999</span>
                                <i>元起</i>
                            </div>
                        </li>
                        <li
                            onClick={this.goDetail(73737,"https://pic.qyer.com/public/lastmin/supproduct/2019/12/03/15753664755723/300x200")}
                        >
                            <img src="https://pic.qyer.com/public/lastmin/supproduct/2019/12/03/15753664755723/300x200" alt=""/>
                            <div>
                                <p>[滑雪季]上海直飞北海道5-7天往返含税机票(可选1晚酒店住宿套餐+早去午回航班/含西瓜卡)</p>
                                <span>1399</span>
                                <i>元起</i>
                            </div>
                        </li>
                        <li className="find-more">
                            <section>
                                <i></i>
                                <p>
                                    千款折扣
                                    <br/>
                                    查看更多
                                </p>
                            </section>
                        </li>
                    </ul>
                </div>
            </DiscountWrap>
        )
    }
}

export default withRouter(Discount)
