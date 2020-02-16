import styled from 'styled-components'

export const ReserveWrap = styled.div`
    height:100%;
    background:#f5f5f5;
    .title-wrap{
        padding:.15rem .15rem;
        background:#fff;
        color:#444;
        font-size:.16rem;
    }
    .production-wrap{
        margin-top:.05rem;
        background:#fff;
        .type-wrap{
            padding:.15rem .15rem;
            h2{
                color:#444;
            }
            ul{
                li{
                    display:inline-block;
                    border:1px solid rgba(31,32,35,.1);
                    color:#444;
                    padding:.04rem .1rem;
                    margin:.1rem .1rem 0 0;
                    border-radius:.05rem;
                }
                .active{
                    border-color: #f46f63;
                    box-shadow: 0 1.5px 9px #ffd6d1;
                    color: #ff7467;
                    font-weight: 700;
                }
            }
        }
    }
`