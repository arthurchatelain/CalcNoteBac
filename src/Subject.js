import './Subject.css'
import { useState } from 'react'

function Subject (props) {

    let [ mark, updateMark ] = useState(localStorage.getItem(props.name) || 0)

    return ( 
        <div className='Subject'>
            <p className='title'>{props.name}</p><input type='text' className={props.name} value={mark} onChange={e => {
                props.handleChange(e, props.name)
                updateMark(parseInt(e.target.value) || 0)
            }}></input>
        </div>
    )
}

export default Subject