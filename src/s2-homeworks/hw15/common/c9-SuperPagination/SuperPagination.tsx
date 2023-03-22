import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage) // пишет студент // вычислить количество страниц

    const onChangeCallback = (event: any, page: number) => {
        onChange(page, itemsCountForPage)
    }

    const onChangeSelect = (event: any) => {
        onChange(page, Number(event.currentTarget.value))
    }

    const options = [
        {id: 4, value: 4},
        {id: 7, value: 7},
        {id: 10, value: 10},
    ]

    const mappedOptions = options
        ? options.map((o) => (
            <option
                key={o.id}
                value={o.id}
            >
                {o.value}
            </option>
        ))
        : []

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{

                    // стили для Pagination // пишет студент
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <select
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                onChange={onChangeSelect}
            >
                {mappedOptions}
            </select>

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
