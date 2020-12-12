import React from "react";
import Image from "material-ui-image";
import Badge from "@material-ui/core/Badge";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
export default function Search() {
  return (
    <>
      <div className="search">
        <div className="image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwJurqiuaXXNTrwJkeJtq0imtCTcd2d4a7A&usqp=CAU"
            alt="logo"
            height="105px"
            width="100px"
          />
        </div>
        <div className="searchbar">
          <InputBase placeholder="   Search for products" />
          <div className="iconsearch">
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
          </div>
        </div>
        <div display="flex" className="likecart">
          <IconButton aria-label="show likes" color="inherit">
            <Badge badgeContent={17} color="error">
              <FavoriteBorderIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="show cart items" color="inherit">
            <Badge badgeContent={4} color="error">
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </div>
    </>
  );
}
