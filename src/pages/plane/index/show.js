import styled from 'styled-components'

export const ShowWrap = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    
    header{
        height:.44rem;
        display:flex;
        align-items:center;
        padding-left:.15rem;
        i{
            color:#41C074;
        }
        p{
            width:100%;
            line-height:.44rem;
            text-align:center;
            color:#646464;
            font-size:.18rem;
        }
    }
    >div{
        flex:1;
    }
    div:nth-child(2){
        background:#41C074;
        text-align:center;
        position: relative;
        div{    
            position:absolute;
            display:block;
            height:130%;
            background:url('https://fes.qyerstatic.com/_plan_/mobile/home/img/index/my_1.png')no-repeat center;
            background-size:2.7rem 2.7rem;
            top:0;
            left:0;
            right:0;
            p:first-child{
                margin-top:20vh;
            }
            p{
                color:#fff;
                font-size:.12rem;
            }
        }
        
    }
    div:last-child{
        background:#4ECC81;
        display:flex;
        align-items:center;
        justify-content:center;
        .button{
            background:#fff;
            color:#41C074;
            width:2.9rem;
            height:.6rem;
            border-radius:.06rem;
            line-height:.6rem;
            font-size:.16rem;
            text-align:center;
            margin-top:1rem;
            i{
                display:inline-block;
                width:.16rem;
                height:.16rem;
                background:url('https://fes.qyerstatic.com/_plan_/mobile/home/img/index/my_ico_1.png')no-repeat 0 .02rem;
                background-size:.16rem .16rem;
                margin-right:.15rem;
                
            }
        }
    }
    
`