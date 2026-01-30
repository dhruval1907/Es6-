import React from 'react'

const Card = ({ data, onDelete }) => {

    return (
        <div className='h-30 w-40 bg-blue-400/70 rounded wrap-break-word text-zinc-900/70 font-bold whitespace-wrap ' style={{ padding: "0.5rem" }}>
            <h1>{data.task}</h1>
            <p className='' style={{ marginTop: "10px" }}>{data.description}</p>
            <div style={{ marginTop: "1rem" }} className='flex w-full justify-end'>
                <button
                    onClick={() => onDelete(data.id)}
                    className='h-7 w-20 bg-red-500 rounded text-white'>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Card