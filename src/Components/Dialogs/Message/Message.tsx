import React from 'react';


type PropsMessege = {
  textMesage: string
  myMassege: boolean
  
}

const Messages = ({ textMesage, myMassege, ...props }: PropsMessege) => {

  return (
    
      <div>
        {textMesage}
      </div>
      
  )
}


export default Messages;