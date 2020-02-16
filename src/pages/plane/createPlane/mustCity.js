import styled from 'styled-components'

export const MustCityWrap=styled.div`
    overflow:hidden;
    height:100%;
    background:url('https://fes.qyerstatic.com/_plan_/mobile/create/img/pg-2.jpg')no-repeat;
    background-size: cover;
    display:flex;
    flex-direction:column;
    section{
        flex:1;
        height:calc(100% - 162px);
        overflow:hidden;
        >div{
            padding:.2rem .15rem;
            color:#fff;
            h2{
                font-size:.16rem;
                font-weight:normal;
                margin-bottom:.15rem;
            }
            ul{
                display:flex;
                flex-wrap:wrap;
                justify-content:space-around;
                li{
                    position: relative;
                    margin-bottom:.1rem;
                    min-width:1.05rem;
                    img{
                        height:1.05rem;
                    }
                    span{
                        display:inline-block;
                        width:100%;
                        position:absolute;
                        bottom:.2rem;
                        text-align:center;
                        left:0;
                    }
                }
                
            }
            .space{
                height:1.62rem;
            }
        }
    }
    >div{
        height:1.62rem;
        background:#198760;
        display:flex;
        justify-content:space-around;
        flex-direction:column;
        ul{
            color:#4CA183;
            text-align:center;
            li{
                display:inline-block;
                height:.55rem;
                margin-top:.2rem;
                margin-right:.2rem;
                img{
                    border-radius:50%;
                    height:.41rem;
                }
                p{
                    text-align:center;
                    height:.3rem;
                    line-height:.3rem;
                }

            }
            .active{
                
                color:#fff;
                font-size:.16rem;
                img{
                    height:.5rem;
                }
            }
        }
        div{
            width:100%;
            height:.5rem;
            color:#fff;
            line-height:.5rem;
            text-align:center;
            font-size:.16rem;
            padding-right:.2rem;
        }
    }
    .icon-complete:before{
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        margin:auto;
        color:#000;
        font-size:.22rem;
    }
`