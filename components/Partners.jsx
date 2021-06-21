import { Card, Grid, Typography } from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailOutline from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";

const Partners = () => {
  return (
    <section style={{ marginTop: "5rem", paddingBottom: "5rem" }}>
      <Grid
        container
        spacing={3}
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Grid item>
          <Typography variant="h4" align="center">
            Our Payment Partners
          </Typography>
        </Grid>
        <Grid item align="center">
          <Typography variant="caption" color="grey" align="center" paragraph>
            Globally tested and trusted online payment processors.
          </Typography>
        </Grid>

        <Grid item xs={12} align="center">
          <Card
            raised
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "1rem 5rem",
            }}
          >
            <img
              src="/assets/images/flutter.png"
              alt="Flutter wave"
              style={{ width: "300px" }}
            />
            <img
              src="/assets/images/paypal.png"
              alt="Paypal"
              style={{ width: "200px", margin: "0px 30px" }}
            />
            <img
              src="/assets/images/stripe.png"
              alt="Stripe"
              style={{ width: "150px" }}
            />
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};

export default Partners;
