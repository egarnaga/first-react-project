import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"/>
      </div>
      <div>
        ava + description
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div className={classes.posts}>
          <div className={classes.item}>
            post 1
          </div>
          <div className={classes.item}>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;