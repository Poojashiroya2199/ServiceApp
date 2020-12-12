import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
export default function productbar() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            className="productbtn"
            color="inherit"
            {...bindTrigger(popupState)}
          >
            Products
            <KeyboardArrowDownIcon />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Fruits</MenuItem>
            <MenuItem onClick={popupState.close}>Vegetables</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
