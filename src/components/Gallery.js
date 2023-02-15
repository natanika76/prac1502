import React from 'react'
import sad from '../img/sad.jpg'
import bochka from '../img/bochka.jpg'

class Gallery extends React.Component {
    render() {
        return (
            <div><img src={sad} alt="sad" /> <img src={bochka} alt="bochka" /></div>
            
        )
    }
}

export default Gallery