"use client";
import {
  AppBar,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
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
    padding: '64px 16px 16px 16px',
    marginLeft: drawerWidth,
    height: '100vh',
  },
};

export default function NavDrawer() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <AppBar position="fixed" sx={{ zIndex: 99999 }}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Advanced Material UI
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
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
        <main style={simpleStyles.content}>
          <Routes>
            <Route path={"/"} element={<ContactForm />} />
            <Route path={"/form"} element={<ContactForm />} />
            <Route path={"/grid"} element={<ContactCardGrid />} />
            <Route path={"/table"} element={<ContactTable />} />
            <Route path={"/contact-data"} element={<ContactDataGrid />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
