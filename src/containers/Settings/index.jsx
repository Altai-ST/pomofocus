import React from 'react'
import styles from './setting.module.scss'
import {reduxForm, submit} from 'redux-form'
import { useDispatch } from 'react-redux'
import { SettingFunc } from '../../store/actions'

const BaseSettings =(props)=>{
    return(
        <>
            {props.show &&(
                <div className={styles.modalContainer} onClick={()=>props.onClose(false)}>
                <div className={styles.modalWindow} onClick={e=>e.stopPropagation()}>
                    <form onSubmit={props.handleSubmit}>
                        <button onClick={()=>props.onClose(false)} className={styles.modalCloses}>X</button>
                            {props.children}
                        <button type='submit'>OK</button>
                    </form>
                </div>
            </div>
            )}
        </>
    )
}

const SettingForm = reduxForm({form: 'login'})(BaseSettings)


export const SetSetting = ({show, onClose, children})=>{
    const dispatch = useDispatch()
    let save=[]
    const onSubmit=(formData)=>{
        save.push(formData)
        console.log(formData)
        dispatch(SettingFunc(save))
        onClose(false)
    }

    return(
        <div>
            <SettingForm onSubmit={onSubmit} show={show} onClose={onClose} children={children}/>
        </div>
    )
}