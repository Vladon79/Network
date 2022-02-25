import React, {useState} from "react";
import s from './Paginator.module.scss';

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (p: number) => void
}

const Paginator = React.memo(({totalUsersCount, pageSize, currentPage, onPageChange}: PaginatorPropsType) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.pageNumber}>
            {pages.map(p => <span key={p}
                                  className={currentPage === p ? s.selectedPage : s.notselectpage}
                                  onClick={() => onPageChange(p)}>{p}</span>
            )}
        </div>
    )
})

export default Paginator