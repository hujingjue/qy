import styled from 'styled-components'

export const WaterFullListWrap = styled.div`
    height:100%;
    position: relative;
    li{
        position:absolute;
        img{
            width:1.68rem;
            border-radius:.1rem;
        }
        .bottom-wrap{
            .other{
                font-weight:bold;
                color:#000;
                font-size:.14rem;
                width:1.68rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .ask{
                position:absolute;
                left:0;
                top:0;
                color:#fff;
                font-size:.18rem;
                font-weight:bold;
                padding:.2rem .2rem 0 .2rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 5;
                -webkit-box-orient: vertical;
            }
            >div{
                display:flex;
                justify-content:space-between;
                div:first-child{
                    img{
                        width:.18rem;
                        height:.18rem;

                    }
                    span{
                        color: rgba(0,0,0,.4);
                        font-size:.12rem;
                    }
                }
                div:last-child{
                    display:flex;
                    align-items:center;
                    i{
                        display:inline-block;
                        width:.13rem;
                        height:.18rem;
                        background:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAzMCAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+aWNfTGlrZTwvdGl0bGU+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMiAyKSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuOCI+PHBhdGggZD0iTTI2IDguMDU2QzI2IDMuNjE2IDIyLjYgMCAxOC40MjMgMCAxNi4zNiAwIDE0LjQxLjkxIDEzIDIuNDY3IDExLjU5LjkxMSA5LjYzNCAwIDcuNTc3IDAgMy40IDAgMCAzLjYxMyAwIDguMDU2YzAgLjE0OC4wMTUuMjgyLjAyNi4zOTItLjAwMy4wMzYtLjAwMy4wNzItLjAwMy4xMSAwIC43ODYuMTg2IDEuNjUyLjU1MiAyLjU2OS4wMTEuMDMyLjAyMy4wNjUuMDM3LjA5NSAyLjMxIDUuNjc1IDExLjE5NSAxMi4yIDExLjU3MyAxMi41MDFhMS4yODIgMS4yODIgMCAwIDAgMS41OTgtLjAwNmMuMzIzLS4yNjIgNy45MDItNS44NTMgMTAuOTExLTExLjE0MS4xMTMtLjE3OS4yLS4zNTEuMjc2LS41LjAyMy0uMDQ4LjA0My0uMDk1LjA3LS4xNGwuMDA4LS4wMmEuMzIzLjMyMyAwIDAgMSAuMDMyLS4wNTRjLjE4LS4zNi4zMjItLjY5NC40MzgtMS4wMTguMzE0LS44NC40NjUtMS41ODYuNDY1LTIuMjgzIDAtLjA1My0uMDAzLS4xLS4wMDYtLjE0LjAxMS0uMDk1LjAyMy0uMjIuMDIzLS4zNjV6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMyIvPjxyZWN0IGZpbGw9IiMwMDAiIHg9IjE2IiB5PSI4IiB3aWR0aD0iMyIgaGVpZ2h0PSI0IiByeD0iMS41Ii8+PHJlY3QgZmlsbD0iIzAwMCIgeD0iNyIgeT0iOCIgd2lkdGg9IjMiIGhlaWdodD0iNCIgcng9IjEuNSIvPjwvZz48L3N2Zz4=');
                        background-size:.13rem .18rem;
                    }
                    span{
                        color: #666;
                        font-size:.12rem;
                        padding-left:.05rem;
                    }
                }
            }
        }
    }
`