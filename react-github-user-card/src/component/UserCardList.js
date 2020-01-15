import React from 'react';
import User from './User'

const UserCardList = (props) => {
  return (
    <div className='card-container'>
      {props.userData.map(userData => (
        <User userData={userData} key={userData.id} />
      ))}
    </div>
  )
}

export default UserCardList

