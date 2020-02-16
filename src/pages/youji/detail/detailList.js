import styled from 'styled-components'

export const DetailListWrap = styled.div`
    margin-top:.2rem;
    ul{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        li{
            width:44vw;
            margin-bottom:.2rem;
            >img{
                width:44vw;
                border-radius:.1rem;
            }
            p{
                font-weight:bold;
                color:#333;
                font-size:.14rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            >div{
                display:flex;
                justify-content:space-between;
                img{
                    width:.2rem;
                    height:.2rem;
                    border-radius:50%;
                }
                div{
                    span{
                        color:#666;
                        font-size:.12rem;
                        font-weight:bold;
                    }
                    img{
                        width:.15rem;
                        height:.15rem;
                    }
                    .space{
                        margin-right:.1rem;
                    }
                }
            }
        }
        .more{
            width:100%;
            height:.6rem;
            line-height:.6rem;
            text-align:center;
            color:#11bf79;
            i{
                font-size:.12rem;
            }
        }
    }
`