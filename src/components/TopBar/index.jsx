import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar() {
  const location = useLocation();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const getUserDetail = () => {
      if (location.pathname.startsWith("/users/")) {
        const userId = location.pathname.split("/")[2];
        const user = models.userModel(userId);
        if (user) {
          setUserName(`${user.first_name} ${user.last_name}`);
        }
      } else if (location.pathname.startsWith("/photos/")) {
        const userId = location.pathname.split("/")[2];
        const user = models.userModel(userId);
        if (user) {
          setUserName(`Photos of ${user.first_name} ${user.last_name}`);
        }
      } else {
        setUserName("");
      }
    };

    getUserDetail();
  }, [location.pathname]);

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography variant="h5" color="inherit">
          Your Name
        </Typography>
        <Typography variant="h6" color="inherit" style={{ marginLeft: "auto" }}>
          {userName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
