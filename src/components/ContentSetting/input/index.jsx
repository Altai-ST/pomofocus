import React from 'react'


export const Input =({input,...props})=>{
    // let val;
    // if(props.input.name ==='Pomo' || props.input.name=== 'LongBreak'){
    //     val='1'
    // }else{
    //     val='0.5'
    // }
    return(
        <input {...input} {...props}/>
    )
}