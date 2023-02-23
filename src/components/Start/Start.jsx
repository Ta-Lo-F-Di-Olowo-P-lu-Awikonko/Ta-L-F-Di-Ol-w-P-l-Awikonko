import React, { useRef } from 'react';
import './Start.css';

const Start = ({setUsername}) => {

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (

    <div className='start'> 

      <div> 
        <h1>Ta Ló Fẹ́ Di Olówó Pẹ̀lú</h1>
        <p className='header'>Awikonko</p>
      </div>

        <input 
            type="text" 
            placeholder='Tẹ orukọ rẹ sii' 
            className='startInput' 
            ref={inputRef}
        />

        <button 
            className='startButton'
            onClick={handleClick}
        > 
            bẹrẹ 
        </button>

    </div>

  )

};

export default Start;