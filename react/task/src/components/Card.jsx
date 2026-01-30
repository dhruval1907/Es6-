import React from 'react'

const Card = ({data}) => {
    
    console.log(props)
    return (
    <div className='max-h-30 w-40 bg-blue-400/70 rounded wrap-break-word text-zinc-900/70 font-bold whitespace-wrap' style={{padding:"0.5rem"}}>
        <h1>{data.task}</h1>
        <p className='' style={{marginTop:"10px"}}>{props.description}</p>
    </div>
  )
}

export default Card