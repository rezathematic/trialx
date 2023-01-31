import { useState, Fragment } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";

// MUI imports
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function UserSettings({ user }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // handlers
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <div className="flex items-center text-center">
        <Tooltip title="User settings" placement="right">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "user-settings" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: "#1d4ed8" }}>
              <Image src={user.image} alt={user.name} width={32} height={32} />
            </Avatar>
          </IconButton>
        </Tooltip>
      </div>

      <Menu
        anchorEl={anchorEl}
        id="user-settings"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <a
            href={`/api/auth/signout`}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Logout
          </a>
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
