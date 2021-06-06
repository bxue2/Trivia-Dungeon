import React from 'react'
import './ListComponent.css'

const ListComponent = (props) => {
    let loadingRows = (
        <div className='loading-rows'>
            {/* Loading... */}
        </div>
    )

    return (
        <div className='table-list-container'>
            <h1>{props.title}</h1>
            <div className='list-rows-container'>
                {props.dataList.length === 0 && loadingRows}
                {props.children}
            </div>
        </div>
    )
}

export default ListComponent;
