import React, { useState } from 'react'
import './Bulb.css';
import img from './assests/alessandro-bianchi-_kdTyfnUFAc-unsplash.jpg'

function Bulb() {
    const [trunOn, setTurnOn] = useState(false);
    const [trunOff, setTurnOff] = useState(false);
    const [flicker, setFlicker] = useState(false);

  return (
    <div className='container'>
        <img
        src={img} 
        className={
            trunOn  ? 'bulbOn' :
            trunOff ? 'bulbOff' :
            flicker ? 'flicker' :

             'img'

        }
        alt='bulb'
        
        />
        <div className='button'>
            <button 
            className={'buttonOn'}
            onClick={()=>setTurnOn(true)}
            >On</button>
            <button  
            className='buttonOff'
            onClick={()=>{
                setTurnOff(true)
                setTurnOn(false)
            }}
            >Off</button>
            <button 
            className='buttonFlicker'
            onClick={()=>{
                setFlicker(true);
                setTurnOn(false);
                setTurnOff(false);
            }}
            >Flicker</button>
        </div>

    </div>
  )
}

export default Bulb