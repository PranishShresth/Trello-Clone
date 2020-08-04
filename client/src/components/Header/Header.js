import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import HelpIcon from "@material-ui/icons/Help";
import { Menu, IconButton, Icon } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
  return (
    <header>
      <nav>
        <div>
          <HomeIcon />
          <SearchIcon />
        </div>
        <div>
          <span>TRELLO</span>
        </div>
        <div>
          <IconButton>
            <AddIcon />
          </IconButton>
          <HelpIcon />
          <NotificationsIcon />
        </div>
      </nav>
    </header>
  );
}

export default Header;
