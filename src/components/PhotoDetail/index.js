import React from 'react';
import { useParams } from 'react-router-dom';
import models from '../../modelData/models';

const PhotoDetail = () => {
  const { userId, photoId } = useParams();
  const photo = models.photoOfUserModel(userId).find((p) => p._id === photoId);

  if (!photo) {
    return <div>Photo not found.</div>;
  }

  return (
    <div>
      <div>
        <img src={`/images/${photo.file_name}`} alt="User photo" />
      </div>
      <div>
        <p>Date and Time: {photo.date_time}</p>
        <p>Comments:</p>
        <ul>
          {photo.comments.map((comment) => (
            <li key={comment._id}>
              <p>Date and Time: {comment.date_time}</p>
              <p>User: {comment.user.first_name} {comment.user.last_name}</p>
              <p>Comment: {comment.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PhotoDetail;
