import { Grid, Typography } from "@material-ui/core";
import Sidebar from "../../components/Sidebar";
import Contact from "../../components/Contact";
import about from "../../styles/About.module.css";

const partner = () => {
  const routes = {
    'About Us': "/company/about",
    'Become a Partner': "/company/partner",
    'Privacy Policy': "/company/policy",
    'Terms of Use': "/company/terms",
    'Who We Are': "/company/whoweare",
    'Get In Touch': "/customerservice/contact",
  }
  return (
    <section className={about.container} style={{ width: "80vw", margin:"7rem auto" }} >
      <Grid container justify="center" spacing={3}>
        <Grid item sm={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={8} style={{ marginLeft: "1.5rem" }}>
          <Typography variant="h5" paragraph color="textPrimary">
            Become a partner
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            paragraph
            color="textSecondary"
          >
            As a customer-oriented company constantly striving for excellence,
            we are always on the lookout for opportunities to expand our reach
            and more importantly, improving on the quality of service rendered
            to our customers. We are open to mutually beneficial partnerships in
            various capacities. If you wish to partner with us, kindly reach out
            to us by email: partnership@shuttlelane.com and we will get back to
            you as soon as possible.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
      </Grid>
    </section>
  );
};

export default partner;
