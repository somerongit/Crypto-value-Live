// import React from 'react'
// import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
    const onClick = (e) =>{
        console.log(e)
    }
    return (
        <button onClick={onClick} style={{ backgroundColor: color }} className='btn'>
            {text}</button>

    )
}

Button.defalutProps = {
    color:'steelblue'
} 

export default Button
