import React, { Component,createRef } from 'react'

import { SelectStrategyDetailWrap } from './selectStrategyDetail.js'
import WaterFullList from 'components/selectStrategy/WaterFullList.jsx'
import { httpGet } from 'utils/http'

import { Carousel, WingBlank } from 'antd-mobile'

export default class SelectStrategyDetail extends Component {
    constructor(){
        super()
        this.listWrap=createRef()
    }
    state = {
        data: [
            'https://p.qyer.com/fugc/fe4cd79077e9b0af25eeb70e12bef148?imageView2/2/w/1080/format/jpg',
            'https://p.qyer.com/fugc/2acaf07da078ac898c03cd2cf7a9a757?imageView2/2/w/1080/format/jpg',
            'https://p.qyer.com/fugc/1b830f82e8d58ddcb50a67e336bfe548?imageView2/2/w/1080/format/jpg'
        ],
        imgHeight: 281,
        list:[]
    }
    componentWillMount(){
        document.getElementById('root').scrollIntoView(true)
    }
    
    UNSAFE_componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: [
                    'https://p.qyer.com/fugc/fe4cd79077e9b0af25eeb70e12bef148?imageView2/2/w/1080/format/jpg',
                    'https://p.qyer.com/fugc/2acaf07da078ac898c03cd2cf7a9a757?imageView2/2/w/1080/format/jpg',
                    'https://p.qyer.com/fugc/1b830f82e8d58ddcb50a67e336bfe548?imageView2/2/w/1080/format/jpg'
                ],
            });
        }, 100);
    }

    async componentDidMount(){
        let id=this.props.match.params.id
        let result = await httpGet({
            url:`/feeds/p/recommends/${id}.json`,
            params:{
                ajaxID:'5bf50dc6c0233db039d84821'
            }
        })
        this.setState({
            list:result.data.data
        })
    }

    render() {
        return (
            <SelectStrategyDetailWrap className='wrap'>
                <div>
                    <header>
                        <div className='usermessage'>
                            <img src="https://pic.qyer.com/avatar/011/22/42/75/200?v=1553152473" alt="" />
                            <span>演员王智</span>
                        </div>
                        <div className='follow'>
                            <i></i>
                            <span>关注</span>
                        </div>
                    </header>
                    {/* 轮播图 */}
                    <WingBlank>
                        <Carousel
                            autoplay={true}
                            infinite
                        >
                            {this.state.data.map(val => (
                                <div
                                    key={val}
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                    <img
                                        src={val}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </WingBlank>
                    {/* 内容区 */}
                    <div className='content-wrap'>
                        乘坐藤泽—镰仓往返的复古电车🚃行走在镰仓高校前…仿佛让你又回到了学生时的样子…
                        <br/>
                        <br/>
                        江之电是行驶于藤泽与镰仓之间的路面有轨电车🚃，至今已有百年历史啦。这列绿皮慢速前进的小火车，一路上时而与湘南海岸的蔚蓝携手，时而钻入狭小的民宅之间，与路边的行人同行，一路风景，真的让人目不暇接。
                        <br/>
                        <br/>
                        镰仓高校前站即是《灌篮高手》的取景素材之一，从而成为大家打卡热门地。这次也凑了个热闹～电车轨道的另一边就是一片深蓝大海，沙滩拍照也是蛮不错的选择～
                        <br/>
                        <br/>
                        其实江之电的每一站都是一个景点，尤其是最后一站镰仓站，必下站之一，街边有很多小店可以逛逛走走，感觉蛮好。推荐在藤泽站购买江之电一日往返券，每一站可以不限次数随上随下，建议早点出发哦，去程一个多小时，每站小街的旅行景点基本都在下午5-6点左右就关店啦～⭐回程建议大家乘坐快速车回来，时间可以压缩一点点呢🌟有时间的话大家可以感受下这趟绿皮小火车之旅，蛮治愈。
                        
                    </div>
                    <div className='footer-wrap'>
                        <div className="position">
                            <img src="https://fes.qyerstatic.com/FmPShahZ7unF29C6Woe-FF7_B46F?imageslim" alt=""/>
                            <span>镰仓高校前站</span>
                        </div>
                        <p className='release-time'>发布于11-05</p>
                        <div className='icon-group'>
                            <div>
                                <span>838</span>
                            </div>
                            <div>
                                <span>30</span>
                            </div>
                            <div>
                                <span>3.4k</span>
                            </div>
                        </div>
                    </div>
                    <div className='line'></div>
                    {/* 相关推荐 */}
                    <div className='recommend-wrap'>
                        <h2>
                            相关推荐
                        </h2>
                        <div>
                            <ul
                                ref={this.listWrap}
                            >
                                <WaterFullList
                                    list={this.state.list}
                                    listWrap={this.listWrap}
                                    type='detail'
                                ></WaterFullList>
                            </ul>
                        </div>
                    </div>

                </div>

            </SelectStrategyDetailWrap>
        )
    }
}
