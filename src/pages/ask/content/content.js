import styled from 'styled-components'

export const ContentWrap = styled.div`
    >ul{
        display:flex;
        border-bottom:1px solid #D8D8D8;
        li{
            flex:1;
            height:.5rem;
            text-align:center;
            line-height:.5rem;
            a{
                display:inline-block;
                color:#363636;
                height:100%;
                
            }
            .active{
                color:#11BF79;
                border-bottom:2px solid #11BF79;
                font-weight:bold;
            }
        }
    }
    .scrollActive{
        background:#fff;
        width:100%;
        position:fixed;
        left:0;
        top:0;
    }
`