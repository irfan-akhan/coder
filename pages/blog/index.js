import BlogCard from "../../components/BlogCard";
import BlogHeader from "../../components/BlogHeader";
import BlogAside from "../../components/BlogAside";

import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";

const BlogList = ({ entries }) => {
  return (
    <>
      <BlogHeader />
      <section style={{ padding: "0 13rem", background: "#f8f8f8" }}>
        <Grid container spacing={5}>
          {entries.map((entry) => {
            return (
              <Grid item xs="12" sm="4">
                <BlogCard />
              </Grid>
            );
          })}
          <BlogAside/>
        </Grid>
      </section>
    </>
  );
};

export async function getInitialSideProps() {
  return {
    props: { entries: [1, 2, 3, 4, 5, 6, 7] },
  };
}

export default BlogList;
