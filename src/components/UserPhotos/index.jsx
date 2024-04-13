import React from "react";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";

import "./styles.css";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {
  const { userId } = useParams();
  const user = models.userModel(userId);
  const photos = models.photoOfUserModel(userId);
  if (!user) {
    return <Typography variant="body1">User not found.</Typography>;
  }
  return (
    <>
      <Typography variant="h4">User Photos</Typography>
      {photos.map((photo) => (
        <Card key={photo._id}>
          <CardMedia
            component="img"
            height="140"
            image={`/images/${photo.file_name}`}
            alt="User photo"
          />
          <CardContent>
            <Typography variant="body1">{photo.date_time}</Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default UserPhotos;
