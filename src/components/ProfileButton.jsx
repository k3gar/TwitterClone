import React from 'react';
import '../styles/profileButton.css'

const ProfileButton = () => {
  return (
    <div className='headerMenu--profile-button'>
      <div className='headerMenu--profile-button__left-container'>
        <img className='headerMenu--profile-button__pic' src="https://pbs.twimg.com/profile_images/1235351751802400774/LNPwr6Hv_normal.jpg" alt="profile pic" />
        <div className='headerMenu--profile-button__text'>
            <p>Kevin Garcia</p>
            <p>@k3gar_</p>
        </div>
      </div>
        <svg viewBox="0 0 24 24" aria-hidden="true" className='headerMenu--profile-button__dots'><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>
    </div>
  )
}

export default ProfileButton