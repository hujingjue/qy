const stateDefault={
    isShow:true,
    countryShow:true,
    mustCity:true,
    countryList:[],
    firstCity:[],
    cityList:[]
}

export default (state=stateDefault,option)=>{
    switch(option.type){
        case 'show':
            return {
                isShow:option.isShow,
                countryShow:true,
                mustCity:true,
                countryList:state.countryList,
                cityList:state.cityList
            }
        case 'countryShow':
            return {
                isShow:true,
                countryShow:option.countryShow,
                mustCity:true,
                countryList:state.countryList,
                cityList:state.cityList
            }
        case 'countryList':
        if(option.index===undefined){
            return {
                isShow:true,
                countryShow:true,
                mustCity:true,
                countryList:[
                    ...state.countryList,
                    option.countryList
                ],
                cityList:state.cityList
            }
        }else{
            state.countryList.splice(option.index,1)
            return {
                isShow:true,
                countryShow:true,
                mustCity:true,
                countryList:state.countryList,
                cityList:state.cityList
            }
        }
        case 'mustCity':
            return {
                isShow:true,
                countryShow:true,
                mustCity:option.mustCity,
                countryList:state.countryList,
                cityList:state.cityList
            }
        case 'firstCity':
        return {
            isShow:true,
            countryShow:true,
            mustCity:option.mustCity,
            firstCity:option.firstCity,
            countryList:state.countryList,
            cityList:state.cityList
        }
        case 'cityList':
            
            if(option.index===undefined){
                return {
                    isShow:true,
                    countryShow:true,
                    mustCity:option.mustCity,
                    firstCity:option.firstCity,
                    countryList:state.countryList,
                    cityList:option.cityList
                }
            }else{
                state.cityList.splice(option.index,1)
                return {
                    isShow:true,
                    countryShow:true,
                    mustCity:true,
                    firstCity:option.firstCity,
                    countryList:state.countryList,
                    cityList:state.cityList
                }
            }
            
        default:
            return state;
    }
}