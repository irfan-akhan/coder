import React from "react";
import {
  Card,
  Grid,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailOutline from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";

export default class Contact extends React.Component {
  render() {
    return (
      <section style={{ padding: "5rem 0", marginTop: "1rem" }}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <Typography align="center" variant="h5">
              How to Reach us
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="textSecondary"
              paragraph
            >
              Want to get in touch? You can use any of the below channels.
            </Typography>
          </Grid>
          <Grid item sm={3}>
            <Card style={{ height: "181px" }}>
              <CardContent align="center">
                <WhatsAppIcon
                  style={{ fontSize: "40px", color: "green" }}
                  align="center"
                />
                <Typography gutterBottom variant="h6" align="center">
                  Whatsapp
                </Typography>
                <Typography gutterBottom align="center" variant="body1">
                  <a
                    style={{ color: "green" }}
                    href="https://api.whatsapp.com/send?phone=2349030009108&text=Rent A Car"
                  >
                    +234 903 000 9108
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card>
              <CardContent align="center">
                <PhoneIcon
                  style={{ fontSize: "40px", color: "#000080" }}
                  color="primary"
                  align="center"
                />
                <Typography gutterBottom variant="h6" align="center">
                  Call us on
                </Typography>
                <Typography
                  gutterBottom
                  align="center"
                  variant="body1"
                  style={{ color: "#000080" }}
                >
                  <a href="tel:+2349030009452">+234 903 000 9452</a>
                </Typography>
                <Typography
                  align="center"
                  variant="body1"
                  style={{ color: "#000080" }}
                >
                  <a href="tel:+2349030009486">+234 903 000 9486</a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={3}>
            <Card style={{ height: "181px" }}>
              <CardContent align="center">
                <MailOutline
                  style={{ fontSize: "40px", color: "#ec1633" }}
                  color="primary"
                  align="center"
                />
                <Typography gutterBottom variant="h6" align="center">
                  Send us an Email
                </Typography>
                <Typography gutterBottom align="center" variant="body1">
                  <a
                    style={{ color: "#ec1633" }}
                    href="mailto:info@shuttlelane.com"
                  >
                    info@shuttlelane.com
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </section>
    );
  }
}
