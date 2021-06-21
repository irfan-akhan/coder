import { Grid } from "@material-ui/core";
const GoogleReviews = () => {
  return (
    <Grid container spacing={3} justify="center" alignItem="center">
      <Grid item xs="3">
        <img
          style={{ maxWidth: "120px" }}
          src="/coder/assets/images/google.png"
          alt="Google logo"
        />

        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ maxWidth: "30px", marginLeft: "1.3rem" }}
            src="/coder/assets/images/star.png"
            alt="star"
          />
          <span>
            4.6 <span style={{ fontSize: ".7rem" }}>/5</span>
          </span>
        </div>
      </Grid>
      <Grid item xs="3">
        <img
          style={{ maxWidth: "130px" }}
          src="/coder/assets/images/trustpilot.png"
          alt="Trustpilot logo"
        />

        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ maxWidth: "30px", marginLeft: "1.3rem" }}
            src="/coder/assets/images/star.png"
            alt="star"
          />
          <span>
            4.6 <span style={{ fontSize: ".7rem" }}>/5</span>
          </span>
        </div>
      </Grid>
      <Grid item xs="3">
        <img
          style={{ maxWidth: "130px" }}
          src="/coder/assets/images/tripadvisor.png"
          alt="Trip advisor logo"
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ maxWidth: "30px", marginLeft: "1.3rem" }}
            src="/coder/assets/images/star.png"
            alt="star"
          />
          <span>
            4.6 <span style={{ fontSize: ".7rem" }}>/5</span>
          </span>
        </div>
      </Grid>
      {/* <Grid item xs="3"></Grid> */}
    </Grid>
  );
};

export default GoogleReviews;
