import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"/>
      </div>
      <div className={classes.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
}

export default ProfileInfo;