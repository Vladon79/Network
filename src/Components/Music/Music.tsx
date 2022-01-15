import React from 'react';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import s from './Music.module.css';


const Music = () => {
    return (

       <div>
         <button>+</button>
       </div>
  
    )
}
export default withAuthRedirect(Music);