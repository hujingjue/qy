const defaultState={
    city:'请选择往返城市'
}

export default (state=defaultState,option)=>{
    switch(option.type){
        case 'city':
            return {
                city:option.city
            }
        default:
            return state
    }

}