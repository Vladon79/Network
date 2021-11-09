import React from 'react';
import s from './Message.module.css'


type PropsMessege = {
  textMesage: string
  myMassege: boolean
  
}

const Messages = ({ textMesage, myMassege, ...props }: PropsMessege) => {

  return (
    
      <div className={myMassege ? s.YoutextMesage :  s.MytextMesage}>
        {textMesage}
      </div>
      
  )
}


export default Messages;