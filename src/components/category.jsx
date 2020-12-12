import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function Category() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            className="category"
            variant="contained"
            color="inherit"
            {...bindTrigger(popupState)}
          >
            Shop By Category
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Cake</MenuItem>
            <MenuItem onClick={popupState.close}>Death</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
