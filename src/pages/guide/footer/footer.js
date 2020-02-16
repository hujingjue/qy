import styled from 'styled-components'

export const FooterWrap = styled.div`
   margin-top:.2rem;
   .footer-wrap{
       border-top:1px solid #65ae76;
       padding:0 .15rem;
       >div{
           margin:.1rem 0;
            .list-wrap{
                display:flex;
                align-items:center;
                li{
                    color:#006aad;
                    font-size:.16rem;
                }
                span{
                    display:inline-block;
                    width:1px;
                    height:.16rem;
                    background:#006aad;
                    margin:0 .1rem;
                }
                .phone{
                    color:#000;
                }
            }
       }
       >div:nth-child(2){
           li{
               color:#727272;
               font-size:.14rem;
           }
       }
       p{
           color:#b4b4b4;
       }
   }
`