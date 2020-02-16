import React, { Component } from 'react'

import { DiscountDetailWrap } from './discountDetail.js'

export default class DiscountDetail extends Component {
    goBack = () => {
        this.props.history.goBack()
    }


    goReserve=(id)=>{
        return ()=>{
            this.props.history.push(`/discount/reserve/${id}`)
        }
    }

    render() {
        return (
            <DiscountDetailWrap>
                <section>
                    <div className="banner-wrap">
                        <img src={this.props.location.state.img} alt="" />
                        <i className="iconfont icon-back" onClick={this.goBack}></i>
                        <span>产品编号{this.props.match.params.id}</span>
                    </div>
                    <div className="title-wrap">
                        <p>[滑雪季]上海直飞北海道5-7天往返含税机票(可选1晚酒店住宿套餐+早去午回航班/含西瓜卡)</p>
                        <div>
                            <div className="left">
                                <span>1399</span>
                                <span>元起</span>
                                <span>底价指南</span>
                            </div>
                            <div>
                                <span>浏览3478887</span>
                                <span>已售2839份</span>
                            </div>
                        </div>
                    </div>
                    <div className="active-wrap">
                        <div className="active-box">
                            <div className="border-box">
                                <span>APP专享</span>
                                <span>用穷游App预订, 更快更方便</span>
                            </div>
                        </div>
                        <div className="active-box">
                            <div>
                                <span>优惠券</span>
                                <span>优惠100.00元</span>
                            </div>
                        </div>
                    </div>
                    <div className="time-wrap">
                        <div>
                            <i className="iconfont icon-rili"></i>
                            <span>选择 产品类型/日期</span>
                        </div>
                        <p>1月、2月、3月、4月、5月、6月 多日期出发</p>
                    </div>
                    <div className="confirm-wrap">
                        <div>
                            <i className="iconfont icon-complete"></i>
                            <p>二次确认</p>
                        </div>
                        <div>
                            <p>二次确认商品，需要卖家确认后出行  请至少提前2天预订</p>
                        </div>
                    </div>
                </section>
                <div className="footer-wrap">
                    <div>
                        <i className="iconfont icon-zixun"></i>
                        <span>咨询</span>
                        <div>
                            <i className="iconfont icon-shoucang"></i>
                            <span>收藏</span>
                        </div>
                    </div>
                    <div 
                        onClick={this.goReserve(this.props.match.params.id)}
                    >立即预定</div>
                </div>
            </DiscountDetailWrap>
        )
    }
}
