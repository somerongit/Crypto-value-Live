// import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title, desc }) => {
    //(props)                               or ({ title, desc})
    //<h2>{props.title} : {props.desc}</h2> or <h2>{title} : {desc}</h2> 
    const onClick=()=>{
        
    }
    return (
        <header className='header'>
            <h2>{title}</h2>
            <Button onClick={onClick} color='green' text='Add'/>
        </header>
    )
}

//defalut syntex is same for props and direct delectaion
Header.defaultProps = {
    title: 'Defalut Task Title',
    desc: 'Default Taks Descrption'
}

//its not madnatory its make our code more robust
Header.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string
}

// <h1 style={headingStyle}>Task tracker</h1>
// const headingStyle = {
//     color: 'white',
//     backgroundColor: 'red'
// }
export default Header
