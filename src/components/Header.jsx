import * as React from "react";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
// import useMediaQuery from "@mui/material/useMediaQuery";
import video from "../components/hero.mp4";

export default function SimpleMediaQuery() {
  //   const matches = useMediaQuery("(min-width:600px)");

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          zIndex: "7",
          position: "relative",
          top: "300px",
          //   textAlign: "center",
          left: "40%",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Google Maps"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>
      );
      {/* <input
        style={{
          position: "relative",
          top: "300px",
          zIndex: "3",
          width: "400px",
          height: "25px",
          color: "#009899",
        }}
        type="text"
        placeholder="search"
      /> */}
      {/* {`(min-width:600px) matches: ${matches}`} */}
      <video
        style={{ width: "100%", position: "relative" }}
        src={video}
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
}
