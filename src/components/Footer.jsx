import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function CustomizedAccordions() {
  return (
    <div>
      <Grid
        display="flex"
        flexDirection="row"
        backgroundColor="#6367EC"
        paddingTop="70px"
        // color="white"
        marginTop="-800px"
        sx={{ justifyContent: "center" }}
      >
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            width: "350px",
            height: "300px",
          }}
        >
          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "30px",
            }}
          >
            <Typography fontSize="25px" marginTop="-4px">
              About Catalog-Z
            </Typography>
          </Grid>

          <Grid>
            <Typography marginBottom="25px">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur amet exercitationem nemo neque? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Accusamus iusto voluptatibus
              exercitationem?
            </Typography>
          </Grid>

          {/* <Grid
            style={{ display: "flex", flexDirection: "row", fontSize: "28px" }}
          ></Grid> */}
        </Grid>
        <Grid sx={{}}>
          <Grid style={{ padding: "0px 40px 20px 20px", float: "left" }}>
            <Typography style={{ fontSize: "25px", marginTop: "-4px" }}>
              Our Company
            </Typography>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "10px 10px 10px 0px",
              }}
            >
              Advertise
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "0px 10px 10px 0px",
              }}
            >
              Support
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "0px 10px 10px 0px",
              }}
            >
              Our company
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "0px 10px 10px 0px",
              }}
            >
              Contact
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "0px 10px 10px 0px",
              }}
            >
              Contact
            </Grid>
          </Grid>

          <Grid
            style={{
              padding: "0px 0px 20px 20px",
              float: "right",
              textAlign: "right",
            }}
          >
            <Typography style={{ fontSize: "25px", marginTop: "-4px" }}>
              Our Company
            </Typography>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "10px 10px 10px 0px",
              }}
            >
              Advertise
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "0px 10px 10px 0px",
              }}
            >
              Support
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "0px 10px 10px 0px",
              }}
            >
              Our company
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "0px 10px 10px 0px",
              }}
            >
              Contact
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "0px 10px 10px 0px",
              }}
            >
              Contact
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
