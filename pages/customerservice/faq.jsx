import * as React from "react";
import { styled } from "@material-ui/core/styles";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

import { Typography, Grid } from "@material-ui/core";

import Sidebar from "../../components/Sidebar";
import Contact from "../../components/Contact";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  const routes = {    
    'Get In Touch': "/customerservice/contact",
    'Frequently Asked Questions': "/customerservice/faq",
  }
  return (
    <section  style={{ width: "80vw", margin:"7rem auto" }} >
      <Grid container justify="center" spacing={3}>
        <Grid item sm={2}>
          <Sidebar routes={routes}/>
        </Grid>
        <Grid item sm={8} style={{ marginLeft: "1.5rem" }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>How do I find my chauffeur?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Your chauffeur will await you at the arrival hall of the
                airport. You can easily locate him by spotting a personalized
                pickup sign which will be held by him.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>
                How will he know I am the right passenger?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                He will ask for your Booking Ref Number and trip details, which
                you are expected to provide.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>
                If he arrives earlier, do I get charged for additional wait
                time?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Shuttlelane does not charge clients for additional wait time
                when the wait time hasn't been exceeded. The complimentary wait
                time for airport pickups is 1 hour and 20 minutes for other
                cases. Once you have given us your flight details during
                booking, tracking your arrival time and adjusting your pickup
                time becomes an easy thing to do.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>
                How do I get back what I forgot in your car?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Bookings can be made through our official website:
                www.shuttlelane.com
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>
                How do I get back what I forgot in your car?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                If you misplace or forget any item in any of our vehicles, just
                send us an email, describing the item in question. Just make
                sure to give us your contact details as well. Once you get in
                contact with us, you will be replied to accordingly.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>
                What are the vehicle types and how many passengers can they
                carry?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                We have a large variety of cars at Shuttlelane. You can get
                information about them and their carrying capacities on our
                FLEET page. If you have any special requirement, do well to
                communicate it to us.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Can I book on behalf of a third party?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                You are allowed to book with us on behalf of a third party. Just
                be sure to fill in the contact details and the mobile number of
                such third party so that the Chauffeur can get in touch at the
                time of pick-up if necessary.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Can I take animals on my journey?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                As much awesome as pets are, we do not carry them. Sorry about
                that.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>What happens after I make a booking?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Once you have booked with us, we send an email and a text
                message for confirmation. Make sure you go through the
                confirmation mail to ascertain the correctness of your journey
                details.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel10"}
            onChange={handleChange("panel10")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Are prices shown per person or vehicle?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Our prices at Shuttlelane are often listed per vehicle. The
                price will cover all taxes, gratuities as well as fees. You can
                check for the maximum number of passengers and Luggage that a
                car can covey under each car class. Bear in mind however that
                the number of passengers doesn't affect the price.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel11"}
            onChange={handleChange("panel11")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>What is Shuttlelane cancellation policy?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                In case of transfer/one-way bookings, you can cancel the
                arrangement for free provided we have more than 24 hour before
                the agreed pickup time. But, the total price must be paid when
                time left is 4hour or below to the agreed pick-up time.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel12"}
            onChange={handleChange("panel12")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>
                What can I do if I can't locate my chauffeur?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Give our office a call ASAP and try not to leave the arrival
                hall as we try to find him.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel13"}
            onChange={handleChange("panel13")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Does Shuttlelane cater for Weddings?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Yes, we cater for weddings. We have exotic cars suitable for
                wedding ceremonies. You can also get additional vehicles for
                your guests if you so wish.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel14"}
            onChange={handleChange("panel14")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>What if my Question is not covered here?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                You can forward any question not covered here to our email. We
                promise to give you a swift and favourable response.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
      </Grid>
    </section>
  );
}
