import styled from 'styled-components'

export const CalendarWrap = styled.div`
    margin-top:.1rem;
    background:#fff;
    .calendar-wrap{
        .choose-date{
            padding:.15rem;
            span:first-child{
                font-weight:bold;
                color:#444;
                margin-right:.1rem;
            }
            span:last-child{
                color:#ff7467;
                font-size:.12rem;
            }
        
        }
        .calendar{
            margin-top:.2rem;
            .date-title{
                text-align:center;
                font-weight:bold;
                color:#636363;
                margin-bottom:.1rem;
                i{
                    color:#959595;
                }
                span{
                    margin:0 .1rem;
                }
            }
            .week-wrap{
                display:flex;
                padding:0 .15rem;
                li{
                    background:#f5f5f5;
                    flex:1;
                    color:#c0c0c0;
                    text-align:center;
                }
            }
            .date-wrap{
                margin-top:.2rem;
                display:flex;
                flex-wrap:wrap;
                padding:0 .15rem;
                li{
                    width:14.2857%;
                    height:.58rem;
                    text-align:center;
                    color:#ddd;
                }
                .sell-out{
                    p{
                        font-size:.12rem;
                        color:#b0b0b0;
                        height:.12rem;
                        line-height:.12rem;
                    }
                }
                .more-ticket{
                    color:#323232;
                    p{
                        font-size:.12rem;
                        height:.12rem;
                        line-height:.12rem;
                    }
                    p:first-child{
                        color:#ff7466;
                    }
                    p:last-child{
                        color:#b0b0b0;
                    }
                }
            }
        }
    }
`