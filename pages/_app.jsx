import { useEffect } from "react";
import React from "react";
import Link from "next/link";
import { Grid, Typography, Top } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailOutline from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import { makeStyles } from "@material-ui/core/styles";
import "../styles/globals.css";
import topbar from "../styles/Topbar.module.css";
import footer from "../styles/Footer.module.css";
import styles from "../styles/Navbar.module.css";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// theme overrides
const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans Playfair Display sans-serif"
  },
  palette: {
    primary: {
      main: "#D8A23A",
    },
    secondary: {
      main: "#262472",
    },
  },
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 200,
    });
  }, []);
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <ThemeProvider theme={theme}>
      {/* Topbar */}
      <div data-aos="fade-down" className={topbar.topbar}>
        <div className={topbar.left}>
          <div className={topbar.item}>
            <WhatsAppIcon
              color="secondary"
              style={{ fontSize: "17px", marginRight: "4px" }}
            />
            <a href="#">+234 903 000 9108</a>
          </div>
          <div className={topbar.item}>
            <PhoneIcon
              color="secondary"
              style={{ fontSize: "17px", marginRight: "4px" }}
            />
            <a href="#">+234 903 000 9108</a>
          </div>
          <div className={topbar.item}>
            <MailOutline
              color="secondary"
              style={{ fontSize: "17px", marginRight: "4px" }}
            />
            <a href="#">cc@shuttlelane.com</a>
          </div>
        </div>
        <div className={topbar.right}>
          <Link href="/#how-it-works">
            <a> How it works </a>
          </Link>
          <Link href="/customerservice/faq">
            <a>FAQ</a>
          </Link>
          <Link href="/customerservice/contact">
            <a>Contact Us</a>
          </Link>
        </div>
      </div>

      {/* Navbar  */}
      <nav className={styles.navbar}>
        <Grid container spacing={2}>
          <Grid item sm={3}>
            <div data-aos="fade-right" className={styles.logo}>
              <img src="/coder/assets/images/shuttle.png" alt="logo" />
            </div>
          </Grid>
          <Grid
            item
            container
            justify="flex-end"
            alignItems="center"
            sm={9}
            spacing={3}
          >
            <Grid item>
              <Link href="/">
                <a> Home</a>
              </Link>
            </Grid>

            <Grid item>
              <div className={styles.menuList}>
                <p>About</p>
                <div>
                  <Link href="/company/about">
                    <a> About Us</a>
                  </Link>
                  <Link href="/company/whoweare">
                    <a> Who We Are</a>
                  </Link>
                  <Link href="/company/partner">
                    <a> Partnership</a>
                  </Link>
                </div>
              </div>
            </Grid>
            <Grid item>
              <div className={styles.menuList}>
                <p>Services</p>
                <div>
                  <Link href="/services/airport_transfer">
                    <a> Airport Transfer</a>
                  </Link>
                  <Link href="/services/car_hire">
                    <a> Car Hire</a>
                  </Link>
                  <Link href="/services/priority_pass">
                    <a>Priority Pass</a>
                  </Link>
                  <Link href="/services/wedding_services">
                    <a>Wedding Services</a>
                  </Link>
                  <Link href="/services/corporate_travel">
                    <a>Corporate Travel</a>
                  </Link>
                </div>
              </div>
            </Grid>

            <Grid item>
              <Link href="/company/partner">
                <a> Become a Partner</a>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/fleet">
                <a> Fleet</a>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/blog">
                <a> Blog</a>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </nav>
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
      <footer className={footer.footer}>
        <Grid container justify="space-evenly" spacing={3}>
          <Grid item className={footer.sections}>
            <Typography variant="h7" paragraph gutterBottom color="primary">
              COMPANY
            </Typography>
            <Link href="/company/">
              <a>About Shuttle Lane</a>
            </Link>
            <Link href="/company/whoweare">
              <a>who We Are</a>
            </Link>
            <Link href="/company/partner">
              <a>Partnership</a>
            </Link>
            <Link href="/company/contact">
              <a>Get in touch</a>
            </Link>
            <Link href="/company/terms">
              <a>Terms of Use</a>
            </Link>
            <Link href="/company/policy">
              <a>Privacy Policy</a>
            </Link>
          </Grid>
          <Grid item className={footer.sections}>
            <Typography variant="h7" paragraph gutterBottom color="primary">
              SERVICES
            </Typography>
            <Link href="/services/airport_transfer">
              <a>Airport Transfer</a>
            </Link>
            <Link href="/services/corporate_travel">
              <a>Corporate Travel</a>
            </Link>
            <Link href="/services/wedding_services">
              <a>Wedding Services</a>
            </Link>
            <Link href="/services/car_hire">
              <a>Car Hire</a>
            </Link>
          </Grid>
          <Grid item className={footer.sections}>
            <Typography variant="h7" paragraph gutterBottom color="primary">
              CUSTOMER SERVICE
            </Typography>

            <Link href="/customerservice/faq">
              <a>
                <a>How It Works</a>
              </a>
            </Link>
            <Link href="/customerservice/faq">
              <a>Frequently Asked Questions</a>
            </Link>
            <Link href="/customerservice/contact">
              <a>
                <a>Report a Problem</a>
              </a>
            </Link>
          </Grid>
          <Grid item className={footer.sections}>
            <Typography variant="h7" paragraph gutterBottom color="primary">
              BOOK ONLINE
            </Typography>
            <Link href="/services/airport_transfer">
              <a>Airport Transfer</a>
            </Link>
          </Grid>
        </Grid>
      </footer>
    </ThemeProvider>
  );
}
export default MyApp;