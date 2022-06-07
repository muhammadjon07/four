import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import rasm from "../components/img-13.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "relative",
        bottom: "500px",
        backgroundColor: "white",
      }}
    >
      <Grid
        sx={{ textAlign: "left" }}
        container
        spacing={{ xs: 4, md: 8 }}
        columns={{ xs: 1, sm: 6, md: 64 }}
      >
        {Array.from(Array(16)).map((_, index) => (
          <Grid item xs={4} sm={12} md={16} key={index}>
            <Item>
              <img
                style={{
                  width: "100%",
                  textAlign: "left",
                  justifyContent: "space-between",
                }}
                src={rasm}
                alt=""
              />
              <span style={{ display: "inline" }}>asj</span>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
