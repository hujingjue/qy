import styled from 'styled-components'

export const AskListWrap = styled.div`
    .space{
        width:100%;
        height:.08rem;
        background:#F5F5F5;
    }
    .item{
        padding:.15rem;
        h2{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size:.16rem;
        }
        p{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            color:rgba(0,0,0,.6);
        }
        >div{
            display:flex;
            justify-content:space-between;
            color:#AEAEAE;
            font-size:.12rem;
            height:.3rem;
            line-height:.3rem;
            div{
                display:flex;
                align-items:center;
                i{
                    margin-right:.03rem;
                }
                .icon-kan{
                    font-size:.22rem;
                }
                .icon-kan:before{
                    display:inline-block;
                    height:.3rem;
                    line-height:.35rem;
                }
                .icon-good{
                    margin-left:.1rem;
                }
            }
            
        }
    }
    .load{
        height:.5rem;
        line-height:.5rem;
        text-align:center;
    }
`