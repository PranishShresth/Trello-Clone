import React from "react";
import { useHistory } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Typography,
  IconButton,
  Popover,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

import {
  Add,
  Search,
  AccountCircle,
  Notifications,
  More,
  Info,
} from "@material-ui/icons";

import { connect } from "react-redux";
import { LogOutUser } from "../../actions/index";
import "./Header.css";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "flex",
  },
}));

function Header({ logOut, login }) {
  const classes = useStyles();
  const history = useHistory();

  // Popover
  const [anchorPopOverEl, setAnchorPopOverEl] = React.useState(null);

  const open = Boolean(anchorPopOverEl);
  const id = open ? "trello-popover" : undefined;
  // popover end

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (ev) => {
    console.log(ev.target.to);
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} name="profile">
        Profile
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem
        onClick={() => {
          logOut();
        }}
      >
        Log out
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: "#026aa7" }}>
        <Toolbar style={{ minHeight: 0 }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              history.push("/home/" + login.user.name);
            }}
          >
            <HomeIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            TRELLO
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Add />
            </IconButton>
            <IconButton
              aria-label="info "
              color="inherit"
              onClick={(event) => {
                setAnchorPopOverEl(event.currentTarget);
              }}
            >
              {/* <Badge badgeContent={17} color="secondary"> */}
              <Info />
              {/* </Badge> */}
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorPopOverEl}
        onClose={() => {
          setAnchorPopOverEl(null);
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography style={{ textAlign: "center" }}>Information!</Typography>
        <img
          className="information-img"
          src="https://a.trellocdn.com/prgb/dist/images/tips/info-image-02@1x.d554cbf6d240549b8ef0.png"
          srcset="https://a.trellocdn.com/prgb/dist/images/tips/info-image-02@1x.d554cbf6d240549b8ef0.png 1x, https://a.trellocdn.com/prgb/dist/images/tips/info-image-02@2x.dc2ae20f9f00051bb6d4.png 2x"
          alt=""
          role="presentation"
        ></img>
      </Popover>
      {renderMenu}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(LogOutUser()),
});
const mapStateToProps = ({ login }) => ({
  login,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
