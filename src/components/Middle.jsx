import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function DotsMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="dots"
      steps={4}
      position="static"
      activeStep={activeStep}
      sx={{
        maxWidth: 1880,
        flexGrow: 1,
        position: "relative",
        bottom: "410px",
      }}
      nextButton={<Button variant="contained">Next Page</Button>}
      backButton={<Button variant="contained">Previous</Button>}
    />
  );
}
