import React from 'react'
import { UserType } from './App'
import style from './User.module.css'
import { useState, useEffect, ChangeEvent } from 'react'
import cn from 'classnames'

type PropsType = {
    user: UserType
    usersId: number[]
    addDeleteUser: (id: number) => void
}

export const User = React.memo((props: PropsType) => {

    let check = props.usersId.includes(props.user.id)

    const onChangeHandler = () => props.addDeleteUser(props.user.id)




    return (
        <div>
            <label><div className={cn(style.user, { [style.user_bg_color]: check })}>{props.user.name + ' ' + props.user.surname}<input type="checkbox" onChange={(e) => onChangeHandler()} checked={check} /></div></label>
        </div>
    )
})