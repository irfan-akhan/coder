import { Grid, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

import Contact from "../../components/Contact";
import Sidebar from "../../components/Sidebar";
import about from "../../styles/About.module.css";

const policy = () => {
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
            Privacy Policy
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            paragraph
            color="textSecondary"
          >
            Shuttlelane is committed to protecting your privacy and takes the
            responsibility regarding the security of our customers' information
            very seriously.
          </Typography>

          <ul>
            <li>
              <Typography variant="body1">
                Shuttlelane collates your information solely for the purpose of
                making your booking. Information “Phone Number Only” is
                necessarily passed on to the chauffeur or service partner
                responsible for fulfilling your journey.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Shuttlelane does not share, sell, trade or rent your personal
                information with any other parties.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Shuttlelane is committed to protecting your privacy and takes
                the responsibility regarding the security of our customers'
                information very seriously.{" "}
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Shuttlelane collects information required to manage your airport
                transfer booking and for improving the service provided to
                customers. The information includes the name, email, mobile
                phone number, pick up and drop off information, times and dates
                of the journeys carried out and flight information.{" "}
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Payment card details are not retained by Shuttlelane as payments
                are processed directly by our payment partners (Stripe, PayPal
                and Flutterwave) via the payment portal.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                The user must provide a valid and correct passenger name,
                telephone number and email address when placing a booking.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Shuttlelane does not accept any responsibility for any errors
                and subsequent miscommunication as a result.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                You will not be sent marketing messages or e-mails from third
                parties.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Shuttlelane needs the email address and phone number in other to
                send confirmation of the booking. Shuttlelane may send updates
                regarding any changes to Shuttlelane services in the future.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Shuttlelane needs the email address and phone number in other to
                send confirmation of the booking. Shuttlelane may send updates
                regarding any changes to Shuttlelane services in the future.
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

export default policy;
