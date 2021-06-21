import { Grid, Typography } from "@material-ui/core";
import Contact from "../../components/Contact";
import Sidebar from "../../components/Sidebar";

import about from "../../styles/About.module.css";

const index = () => {
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
          <Sidebar routes={routes}/>
        </Grid>
        <Grid item xs={8} style={{ marginLeft: "1.5rem" }}>
          <Typography variant="h5" color="textPrimary">
            About Shuttlelane
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            paragraph
            color="textSecondary"
          >
            At Shuttlelane, we give you the best of executive airport services.
            Because we are committed to enriching your travel experiences, we
            always make sure that you get from us unique standard services. Take
            your time to enjoy our finest customer-centered services because you
            deserve only the best. Registered under the Corporate Affairs
            Commission (CAC) laws of Nigeria, Shuttlelane operates from a
            vantage position of tailoring tastes and desires to suit
            individual’s demands which are delivered by the best-trained
            professionals in hospitality and logistics. Our focus at Shuttlelane
            is simple – to give you comfortable, safe airport taxi. And, we do
            this by putting quality services and customer satisfaction first.
          </Typography>
          <Typography variant="h5" color="textPrimary">
            Our Experience
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            paragraph
            color="textSecondary"
          >
            Our experience in what we do is impeccable. We remain a tested and
            trusted service provider in ground transportation in Nigeria’s
            commercial heartbeat – Lagos. We are set out to make travelling
            experience comfortable and memorable for our clients. We are always
            delighted to have them reach their intended destinations with
            satisfaction. This is what we do, this is our forte and we have made
            a good name of it.
          </Typography>
          <Typography variant="h5" gutterBottom color="textPrimary">
            Unique Selling Points (USP)
          </Typography>

          <Typography variant="h6" color="textPrimary">
            Dealing with us gives you:
          </Typography>

          <ul>
            <li>
              <Typography variant="body1">
                Unparalleled safety and comfort.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Punctual and responsive service delivery.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Timely communication via email and text.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Empathetic and professional Chauffer.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                And indeed, a service provider committed to excellent service.
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
      </Grid>
    </section>
  );
};

export default index;
