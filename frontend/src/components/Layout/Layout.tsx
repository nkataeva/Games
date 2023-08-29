import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box sx={{maxWidth: 1250, mx: 'auto', pt: 5}}>
        <Outlet />
    </Box>
  );
};

export default Layout;