import React from 'react'

function Display({ displayInput , sumInput }) {
    return (
        <div className='display' >
            <h3>{displayInput}</h3>
            <h1>{sumInput}</h1>
        </div>
    )
}

export default Display
