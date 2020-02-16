import styled from 'styled-components'

export const DiscountWrap = styled.div`
    padding-left:.15rem;
    margin-top:.3rem;
    >div{
        overflow:hidden;
        >ul{
            white-space:nowrap;
            display:inline-block;
            li{
                display:inline-block;
                width:1.63rem;
                margin-right:.1rem;
                border:1px solid rgba(0,0,0,.1);
                border-radius:.06rem;
                img{
                    max-width:100%;
                    border-radius:.06rem
                }
                >div{
                    padding:.05rem .1rem .15rem .1rem;
                    p{
                        width:100%;
                        white-space:pre-wrap;
                        text-overflow: -o-ellipsis-lastline;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        color:#1f2023;
                        font-weight:600;
                    }
                    span{
                        color:#ff7467;
                        font-size:.12rem;
                        font-weight:600;
                    }
                    i{
                        color:rgba(31,32,35,.4);
                        font-size:.12rem;
                    }
                }
                
            }
            .find-more{
                position: relative;
                border:none;
                height:1.92rem;
                padding-top:.7rem;
                padding-left:.5rem;
                text-align:center;
                >section{
                    position: absolute;
                    i{
                        width:.3rem;
                        height:.3rem;
                        background:url('data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlLz48L2RlZnM+PHBhdGggZD0iTTUxMiAwYTUxMiA1MTIgMCAxIDAgNTEyIDUxMkE1MTIgNTEyIDAgMCAwIDUxMiAwem0xNTguNzIgNTM0LjUyOEwzOTguNTI0IDgwNi43MjRhMzIuMDE3IDMyLjAxNyAwIDAgMS00NS4yNjEtNDUuMjk1TDYwMi43MDkgNTEyIDM1My4yOCAyNjIuNTM3YTMyLjAxNyAzMi4wMTcgMCAwIDEgNDUuMjYtNDUuMjYxTDY3MC43MiA0ODkuNDJhMzIuNDI3IDMyLjQyNyAwIDAgMSAwIDQ1LjEwN3oiIG9wYWNpdHk9Ii4yIi8+PC9zdmc+');
                        display:inline-block;
                        background-size:.3rem .3rem;
                    }
                }
                
            }
        }
    }
`