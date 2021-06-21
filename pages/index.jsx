import { useState } from "react";
import Head from "next/head";
import { Grid, Typography, Modal,Card } from "@material-ui/core";
import FleetItem from "../components/FleetItem";
import Reviews from "../components/Reviews";
import Choose from "../components/Choose";
import Works from "../components/Works";
import Partners from "../components/Partners";
import AirportForm from "../components/AirportForm";
import Carhire from "../components/Carhire";
import styles from "../styles/Home.module.css";
import form from "../styles/Form.module.css";
import Covid from '../components/CovidModal';

export default function Home() {
  let [baseForm, setBaseForm] = useState("Airport Transfer");

  function onClickHandler(e) {
    console.log("clicked");
    let targetValue = e.target.innerText.trim();
    setBaseForm(targetValue);
    console.log(e.target.innerText.trim());
  }

  return (
    <>
      <Grid
        container
        justify="center"
        className={form.formBg}
        style={{
          height: "85vh",
          background: `url('/assets/images/car.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        < Covid />
        <Grid item xs={8} className={form.formContainer}>
          <div className={form.tabs}>
            <h4
              onClick={onClickHandler}
              style={{
                backgroundColor:
                  baseForm === "Airport Transfer" ? "#E3B646cc" : "",
              }}
            >
              Airport Transfer
            </h4>
            <h4
              onClick={onClickHandler}
              style={{
                backgroundColor: baseForm === "Car Hire" ? "#E3B646cc" : "",
              }}
            >
              Car Hire
            </h4>
            <h4
              onClick={onClickHandler}
              style={{
                backgroundColor:
                  baseForm === "Priority Pass" ? "#E3B646cc" : "",
              }}
            >
              Priority Pass
            </h4>
          </div>
          {baseForm === "Airport" ? (
            <AirportForm />
          ) : baseForm === "Car Hire" ? (
            <Carhire />
          ) : (
            <AirportForm />
          )}
        </Grid>
      </Grid>
      <section
        className={styles.fleet}
        style={{
          padding: "4rem",
          width: "60%",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          justify="center"
          direction="column"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4" align="center" color="textPrimary">
              Our Fleet
            </Typography>
          </Grid>
          <Grid item variant="body2" paragraph>
            Shuttle Lane offers a variety of service class you can choose from
            depending on your needs.
          </Grid>
          <Grid item>
            <FleetItem
              title="luxury"
              description="A step closer to luxury. Comfort and convenience is guaranteed. Can accommodate up to 4 passengers and 2 luggages. Ford Focus, Ford Figo, MG550, Ford Fusion, Toyota Camry, Volkswagon Passat, Toyota Corolla, Hyundai Elentra, etc."
            />
          </Grid>
        </Grid>
      </section>

      <section className={styles.works} id="how-it-works">
        <Works />
      </section>
      <section className={styles.choose}>
        <Choose />
      </section>
      <section className={styles.reviews} style={{backgroundSize:"contain", backgroundRepeat:"no-repeat",  background:`url("/assets/images/background.jpg")`}}>
        <Reviews />
        <Grid container spacing={3}  justify="center" alignItems="center" style={{width:"70vw", margin:" 5rem auto"}}>
          <Grid item xs={3} >
            <a target="_blank" href="https://www.trustpilot.com/review/shuttlelane.com">
            <img src="/assets/images/trustpilot.png" alt="trustpilot logo" style={{width:"150px"}}/>
            <div style={{display:"flex", alignItems:"center", marginLeft:"2rem" }}>
              <img src="/assets/images/star.png" style={{width:"20px"}} alt="rating star"/>
                <span style={{color:"Green"}}> 
                  4.3
                  <span  style={{color:"black", fontSize:".7rem"}}> /5</span>
                </span>
            </div>
            </a>
          </Grid>
          <Grid item xs={3} >
            <Card>
              <a target="_blank" href={`https://www.google.com/search?q=google+shuttlelane+review&sxsrf=ALeKk03nngNGPkFxjmokthABTb56bA1aWA%3A1624185657820&ei=ORvPYNnAMZWO4-EPk6iEyA4&oq=google+shuttlelane+review&gs_lcp=Cgdnd3Mtd2l6EANQhxFY7iNg1yVoAHAAeACAAZoRiAGiG5IBCzAuNC4xLjEuOS0xmAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=gws-wiz&ved=0ahUKEwiZwbuJg6bxAhUVxzgGHRMUAekQ4dUDCBI&uact=5#lrd=0x103b8c448e2f97c3:0xc95f24c00955aecc,1`}>
              <img src="/assets/images/google.png" alt="google logo" style={{width:"120px"}}/>
              <div style={{display:"flex", alignItems:"center", marginLeft:"2rem" }}>
                <img src="/assets/images/star.png" style={{width:"20px"}} alt="rating star"/>
                  <span style={{color:"Green"}}>
                    5
                    <span  style={{color:"black", fontSize:".7rem"}}> /5</span>
                  </span>
              </div>
              </a>
            </Card>
          </Grid>
          <Grid item xs={3} >
          <a target="_blank" href="https://www.tripadvisor.in/Attraction_Review-g304026-d17527097-Reviews-Shuttlelane-Lagos_Lagos_State.html">
            <img src="/assets/images/tripadvisor.png" alt="tripadvisor logo" style={{width:"150px"}}/>
            <div style={{display:"flex", alignItems:"center", marginLeft:"2rem" }}>
              <img src="/assets/images/star.png" style={{width:"20px"}} alt="rating star"/>
                <span style={{color:"Green"}}> 
                  4.9
                  <span  style={{color:"black", fontSize:".7rem"}}> /5</span>
                </span>
            </div>
            </a>
          </Grid>
          
        </Grid>
      </section>
      <section className={styles.partner}>
        <Partners />
      </section>
    </>
  );
}
