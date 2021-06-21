import Singlepost from "../../components/Singlepost";
import BlogAside from "../../components/BlogAside";

import { Grid } from "@material-ui/core";

const SingleBlog = () => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={5}
      style={{ backgroundColor: "#f2f2f2" }}
    >
      <Singlepost />
      <BlogAside />
    </Grid>
  );
};

export default SingleBlog;
