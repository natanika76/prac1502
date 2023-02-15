import React from 'react'
import sad from '../img/sad.jpg'

class Picture extends React.Component {
    render() {
        return (
            <div> <img src={sad} alt="sad" /></div>
        )
    }
}

export default Picture