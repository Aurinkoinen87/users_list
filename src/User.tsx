import React from 'react'
import { UserType } from './App'
import style from './User.module.css'
import { useState, useEffect, ChangeEvent } from 'react'
import cn from 'classnames'

type PropsType = {
    user: UserType
    isAllChecked: boolean
    addName: (id: number) => void
    deleteUser: (id: number) => void
}

export const User = React.memo((props: PropsType) => {
    console.log('component rendered')

    useEffect(()=> {handleChecked(props.isAllChecked)},[props.isAllChecked])

    let[isChecked, setChecked] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => handleChecked(e.currentTarget.checked)

    const handleChecked = (checked: boolean) => {
        setChecked(checked)
        if(checked){props.addName(props.user.id)
        } else {
        props.deleteUser(props.user.id)}}


    return(
        <div>
        <label><div className={cn(style.user, {[style.user_bg_color]: isChecked})}>{props.user.name + ' ' + props.user.surname}<input type="checkbox" onChange={(e)=> onChangeHandler(e)} checked={isChecked}/></div></label>
        </div>
    )
})