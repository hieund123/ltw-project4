import React from "react";
import { Typography, Card, CardContent, CardMedia, Link } from "@mui/material";
import { useParams, Link as RouterLink } from "react-router-dom";
import models from "../../modelData/models";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);
  const photos = models.photoOfUserModel(userId);

  if (!user) {
    return <Typography variant="body1">User not found.</Typography>;
  }

  return (
    <>
      <Typography variant="h4">User Detail</Typography>
      <Typography variant="body1">
        Name: {user.first_name} {user.last_name}
      </Typography>
      <Typography variant="body1">Location: {user.location}</Typography>
      <Typography variant="body1">Description: {user.description}</Typography>
      <Typography variant="body1">Occupation: {user.occupation}</Typography>
      <Link component={RouterLink} to={`/photos/${userId}`} variant="body1">
        <Typography variant="h5">Photos</Typography>
      </Link>
    </>
  );
}

export default UserDetail;
