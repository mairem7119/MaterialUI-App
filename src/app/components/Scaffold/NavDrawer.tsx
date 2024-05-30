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

export default function NavDrawer() {
  return (
    <BrowserRouter>
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" noWrap>
              Advanced Material UI
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="temporary" open={true}>
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
        <main>
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
