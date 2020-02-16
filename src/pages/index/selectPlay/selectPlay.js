import styled from 'styled-components'

export const SelectPlayWrap = styled.div`
    padding-left:.15rem;
    margin-top:.3rem;
    >div{
        margin-top:.2rem;
        ul{
            display:flex;
            flex-wrap:wrap;
            li{
                flex:33.3333%;
                display:flex;
                height:.55rem;
                div{
                    margin-bottom:.1rem;
                    position: relative;
                    border:1px solid rgba(0,0,0,.1);
                    padding:.08rem;
                    width:1rem;
                    border-radius:.05rem;
                    img{
                        position:absolute;
                        bottom:0;
                        right:0;
                        width:.3rem;
                        height:.25rem;
                    }
                    span{

                    }

                }
            }
        }
    }
`