import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import Sidebar from "../../components/Sidebar";
import Contact from "../../components/Contact";

import about from "../../styles/About.module.css";
const routes = {
  "Airport Transfer": "/services/airport_transfer",
  "Car Hire": "/services/car_hire",
  "Priority Pass": "/services/priority_pass",
  "Corporate Travel": "/services/corporate_travel",
  "Wedding Services": "/services/wedding_services",
};
const priority_pass = () => {
  return (
    <section
      className={about.container}
      style={{ width: "80vw", margin: "7rem auto" }}
    >
      <Grid container justify="center" spacing={3}>
        <Grid item xs={2}>
          <Sidebar routes={routes} />
        </Grid>

        <Grid item xs={8} style={{ marginLeft: "1.5rem" }}>
          <Typography variant="h5" color="textPrimary">
            Priority Pass Service
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            Skip security and immigration queues. Getting through the airport
            can be rough, especially when you’re landing with bags and an
            imminent business meeting weighs heavily on your mind. For those
            business travellers seeking simplicity, comfort and an assurance
            that things will run smoothly, the Shuttlelane priority pass service
            provides customers with a truly VIP travel experience.
          </Typography>
          <Typography variant="body1" paragraph color="textSecondary">
            For Priority Pass Click Here
            <Button color="primary" gutterBottom>
              Book Now
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
      </Grid>
    </section>
  );
};

export default priority_pass;
