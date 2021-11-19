import React from 'react';
import FaUserCircle from '@meronex/icons/fa/FaUserCircle';
import { 
  UserDropDownContainer, 
  UserDropDownTitle, 
  UserAvatar, 
  UserDetail 
} from './styles';

const UserDropDown = (props) => {
  return (
    <UserDropDownContainer>
      <UserDropDownTitle>
        <UserAvatar>
          <FaUserCircle />
        </UserAvatar>
        <UserDetail>
          <div className="ern-sec">
            <div>ERN</div>
            <div>0</div>
          </div>
          <div className="ern-sec">|</div>
          <div className="ern-sec">
            <div>ERN</div>
            <div>wETH</div>
          </div>
        </UserDetail>
      </UserDropDownTitle>
      <div className="dropdown-list-div">
        <div className="dropdown-list">
          {props.children}
        </div>
      </div>
    </UserDropDownContainer>
  )
}

export default UserDropDown;