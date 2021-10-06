import React from 'react'
import styless from './Header.module.scss'
import {ButtonHead} from './Button/index'


export const Header =()=>{
    return(
        <div>
            <nav className={styless.header}>
                <h1>Pomofocus</h1>
                <div>
                    <ButtonHead title='Setting'/>
                    <ButtonHead title='Report'/>
                </div>
            </nav>
        </div>
    )
}