import Sidebar from "../../components/Sidebar";
import Contact from "../../components/Contact";
import about from "../../styles/About.module.css";
import { Grid, Typography } from "@material-ui/core";
const whoweare = () => {
  return (
    <section className={about.container}>
      <Grid container justify="center">
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={8} style={{ marginLeft: "1.5rem" }}>
          <Typography variant="h5"> Our Unique Value System (UVS) </Typography>
          <Typography variant="body1" paragraph>
            At Shuttlelane, our thought rests on satisfaction for our clients,
            and to meet this, we prioritise:
          </Typography>
          <div>
            <Typography variant="h5">Customer Service</Typography>
            <Typography variant="body1" paragraph>
              Shuttlelane is a customer-oriented company. We have ingrained in
              our chauffeurs the skills necessary to make every ride with us
              worth it. Our service can be personalized towards your individual
              needs and you shall be attended to anyhow you want. The chauffeur
              also assists you with your baggage and takes you to your intended
              destination safely.
            </Typography>
            <Typography variant="h5">Communication</Typography>
            <Typography variant="body1" paragraph>
              Our team is ready to talk to you every time. We can provide
              answers to all your inquiries. Do not hesitate to ask questions as
              we will be there to reply you eagerly.
            </Typography>
            <Typography variant="h5">Reliability</Typography>
            <Typography variant="body1" paragraph>
              You can always bank on us at Shuttlelane. We have a positive
              reputation of dishing out nothing short of quality to our clients.
              Our track record speaks volumes about our reliability and
              trustworthiness.
            </Typography>
            <Typography variant="h5">Passenger Safety</Typography>
            <Typography variant="body1" paragraph>
              You don't need to fret anymore. You are guaranteed the utmost
              safety by dealing with us. We can take transport you from anywhere
              to the airport on time and with no hassles.
            </Typography>
            <Typography variant="h5">Punctuality </Typography>
            <Typography variant="body1" paragraph>
              Shuttlelane doesn't do African time. We understand the value of
              time so we like to keep to it in all our dealings with you. We
              never disappoint.
            </Typography>
            <Typography variant="h5">Luxury</Typography>
            <Typography variant="body1" paragraph>
              What do you want? Style? Elegance? Class? Our cars are embodiments
              of luxury and glamour. They are of good standard and shall give
              you a positive atmosphere unrivalled by none other.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
      </Grid>
    </section>
  );
};

export default whoweare;
