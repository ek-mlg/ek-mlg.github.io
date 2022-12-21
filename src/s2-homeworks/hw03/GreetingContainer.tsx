import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // сделал
    addUserCallback: (name: string) => void // сделал
}

export const pureAddUser = (name: string, setError: (error:string) => void, setName: (name:string) => void, addUserCallback: (v:string) => void) => {
    !name ? setError('Ошибка! Введите Имя!') : addUserCallback(name)
}

export const pureOnBlur = (name: string, setError: (error:string) => void) => { // если имя пустое - показать ошибку (сделал)
    !name && setError('Ошибка! Введите Имя!')
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить (сделал)
    e.key === "Enter" && addUser()
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // сделал
    const [error, setError] = useState<string>('') // сделал

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // сделал
        setName(e.currentTarget.value) // сделал

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // сделал
    const lastUserName = users.length ? users[users.length-1].name : '' // сделал

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
