import styled from 'styled-components'

export const NavWrap=styled.div`
    margin-top:.15rem;
    
    ul{
        display:flex;
        flex-wrap:wrap;
        li{
            display:flex;
            flex-direction:column;
            flex:20%;
            align-items:center;
            padding:.05rem;
            /* i{
               display:inline-block;
               background:url('https://fes.qyerstatic.com/FjiWdzANqPB2Nm0wtDTvrr8HDrsg?imageslim')no-repeat center ;
               background-size:cover;
               width:100%;
               padding-bottom:100%;
            } */
            a{
                color:rgba(0,0,0,.8);
                img{
                    max-width:100%;
                }
                span{
                    display:inline-block;
                    font-size:.12rem;
                    line-height:.1rem;
                    width:100%;
                    text-align:center;
                }
            }
        }
    }
`