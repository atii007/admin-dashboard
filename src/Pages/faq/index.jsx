import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Header from "../../components/Header";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Question # 01
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            nesciunt corporis distinctio minima in necessitatibus nemo officia,
            labore tempore laboriosam commodi vero animi ipsa facere iste
            facilis error nam magni qui, sint obcaecati, blanditiis optio.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Question # 02
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            nesciunt corporis distinctio minima in necessitatibus nemo officia,
            labore tempore laboriosam commodi vero animi ipsa facere iste
            facilis error nam magni qui, sint obcaecati, blanditiis optio.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Question # 03
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            nesciunt corporis distinctio minima in necessitatibus nemo officia,
            labore tempore laboriosam commodi vero animi ipsa facere iste
            facilis error nam magni qui, sint obcaecati, blanditiis optio.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Question # 04
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            nesciunt corporis distinctio minima in necessitatibus nemo officia,
            labore tempore laboriosam commodi vero animi ipsa facere iste
            facilis error nam magni qui, sint obcaecati, blanditiis optio.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Question # 05
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            nesciunt corporis distinctio minima in necessitatibus nemo officia,
            labore tempore laboriosam commodi vero animi ipsa facere iste
            facilis error nam magni qui, sint obcaecati, blanditiis optio.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
