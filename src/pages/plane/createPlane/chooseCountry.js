import styled from 'styled-components'

export const ChooseCountryWrap = styled.div`
    overflow:hidden;
    height:100%;
    display:flex;
    flex-direction:column;
    background:url('https://fes.qyerstatic.com/_plan_/mobile/create/img/pg-2.jpg')no-repeat;
    background-size: cover;
    section{
        height:100%;
        >div:first-child{
            flex:1;
            padding:.1rem .2rem;
            .list-wrap{
                margin-top:.2rem;
                display:flex;
                flex-wrap:wrap;
                justify-content:space-around;
                .list-item{
                    position: relative;
                    padding-right:.1rem;
                    padding-bottom:.1rem;
                    img{
                        height:14.542vh;
                        width:25.9333vw;
                    }
                    span{
                        display:inline-block;
                        width:100%;
                        position:absolute;
                        bottom:.2rem;
                        text-align:center;
                        left:0;
                        color:#fff;
                    }
                }
            }
            .space{
                width:100%;
                height:.5rem;
            }
            .am-tabs-default-bar{
                background-color:rgba(0,0,0,0) !important;
            }
            .am-tabs{
                height:auto !important;
            }
            .am-tabs-default-bar-top .am-tabs-default-bar-tab::after{
                background-color:rgba(0,0,0,0)!important;
            }
            .am-tabs-default-bar-nextpage{
                background:rgba(0,0,0,0)!important;
            }
            .am-tabs-default-bar-prevpage{
                background:rgba(0,0,0,0)!important;
            }
            .am-tabs-default-bar-tab-active{
                border-bottom:#fff !important;
            }
            .am-tabs-default-bar-content{
                color:rgba(255,255,255,.4);
            }
            .am-tabs-default-bar-tab{
                /* width:auto!important;
                padding-right:.4rem!important; */
            }
        }
    }
    >div:last-child{
        height:.5rem;
        color:#fff;
        line-height:.5rem;
        text-align:center;
        background:#198760;
        
}
`