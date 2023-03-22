import React from 'react'
import downIcn from '../img/down.svg'
import upIcn from '../img/up.svg'
import noneIcn from '../img/none.svg'

// добавить в проект иконки и импортировать
const downIcon = downIcn
const upIcon = upIcn
const noneIcon = noneIcn

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    return sort === down
        ? up
        : sort == up
            ? ''
            : down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >

            <img
                style={{width: '12px'}}
                id={id + '-icon-' + sort}
                src={icon}
            />

        </span>
    )
}

export default SuperSort
