import React from 'react';

const User = (props) => {
  console.log('my props', props)
  
  return (          
       <div className='user'>
         <img src={props.userData.avatar_url} alt={props.userData.login} />
           <div>
             <h3>{props.userData.login}</h3>
             <h4>{props.userData.url}</h4>
           <h4>{props.userData.repos_url}</h4>
         </div>
       </div>    
  )
 }

export default User