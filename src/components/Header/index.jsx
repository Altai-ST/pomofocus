import React from 'react'
import styless from './Header.module.scss'
import {ButtonHead} from './Button/index'
import { ContentSetting } from '../ContentSetting'

export const Header =()=>{

    // const isClosses=()=>{

    // }

    return(
        <div>
            <nav className={styless.header}>
                <h1>Pomofocus</h1>
                <div>
                    <ButtonHead title='Setting'/>
                    <ButtonHead title='Report'/>
                </div>
            </nav>
            {/* <ContentSetting isCloses={isCloses}/> */}
        </div>
    )
}