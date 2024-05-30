"use client";
import {
  AppBar,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
  CssBaseline,
  Box,
} from "@mui/material";
import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import ContactForm from "../Form/ContactForm";
import ContactTable from "../Table/ContactTable";
import ContactCardGrid from "../Grid/ContactCardGrid";
import ContactDataGrid from "../DataGrid/ContactDataGrid";

const drawerWidth = 240;

const simpleStyles = {
  drawer: {
    width: drawerWidth,
    "& .MuiBackdrop-root": {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(120,120,120, 0.2)",
  },
  content: {
    flexGrow: 1,
    padding: "24px", // Adjust padding as needed
    marginLeft: drawerWidth,
    marginTop: "64px", // Adjust margin to push content below the AppBar
  },
  appBar: {
    zIndex: 1300, // Ensure AppBar is above other content
  },
};

export default function NavDrawer() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" sx={simpleStyles.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Advanced Material UI
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="persistent"
          open={true}
          sx={simpleStyles.drawer}
          PaperProps={{ sx: simpleStyles.drawerPaper, elevation: 9 }}
        >
          <List>
            {[
              { text: "Input Form", route: "/form" },
              { text: "Contact Card Grid", route: "/grid" },
              { text: "Contact Table", route: "/table" },
              { text: "Contact Data Grid", route: "/contact-data" },
            ].map((nav, index) => (
              <ListItem key={nav.text}>
                <Link to={nav.route}>{nav.text}</Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={simpleStyles.content}>
          <Routes>
            <Route path="/" element={<ContactForm />} />
            <Route path="/form" element={<ContactForm />} />
            <Route path="/grid" element={<ContactCardGrid />} />
            <Route path="/table" element={<ContactTable />} />
            <Route path="/contact-data" element={<ContactDataGrid />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
