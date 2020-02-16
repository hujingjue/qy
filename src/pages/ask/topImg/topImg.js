import styled from 'styled-components'

export const TopImgWrap = styled.div`
    ul{
        display:flex;
        height:1.2rem;
        align-items:center;
        padding:0 .15rem;
        background:#f5f5f5;
        overflow-x:scroll;
        li:first-child{
            margin-right:.2rem;
        }
        li{
            position: relative;
            border-radius:.1rem;
            color:#fff;
            img{
                width:1.6rem;
                height:.9rem;
                border-radius:.1rem;
            }
            section{
                border-radius:.1rem;
                position:absolute;
                width:100%;
                height:100%;
                left:0;
                top:0;
                background:rgba(0,0,0,.4);
                display:flex;
                justify-content:center;
                align-items:center;
                p{
                    text-align:center;
                    span{
                        font-weight:bold;
                    }
                }
            }
            
        }
    }
`