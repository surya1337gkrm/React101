import React from 'react';
import { useParams } from 'react-router-dom';
const Profile = () => {
  const { id } = useParams();
  return id ? <div>Profile Id is {id}</div> : <div>Profile with No ID</div>;
};

export default Profile;
