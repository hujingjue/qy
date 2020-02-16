import React ,{useState,useEffect,useRef} from 'react'
import Header from './Header.jsx'

import WaterFullList from 'components/selectStrategy/WaterFullList.jsx'
import {BiuWrap} from './biu.js'
import {httpGet} from 'utils/http.js'

export default (props)=>{
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    const [lock,setLock]=useState(true)
    const listWrap=useRef()

    useEffect(()=>{
        (async function(){
            if(lock){
                setLock(false)
                let result = await getData('/feeds/index/mobile',page)
                setData([...data,...result.data.data])
            }
        })()
    })

    const getData=async (url,page)=>{
        let result = await httpGet({
            url,
            params:{
                page,
                ajaxID:'5cd8d69ef1d508c32233475c'
            }   
        })
        return result
    }

    const getMore=()=>{
        setLock(true)
        setPage(page+1)
            
    }

    return (
        <BiuWrap>
            <Header></Header>
            <ul ref={listWrap}>
                <WaterFullList list={data} listWrap={listWrap}></WaterFullList>
            </ul>
            {
                data.length>0?(<div className='more' onClick={getMore}>查看更多<i className="iconfont icon-down2"></i></div>):''
            }
        </BiuWrap>
    )
}