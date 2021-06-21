import {
    Button,
    Grid, Typography,
  } from "@material-ui/core";
  import singlePost from '../styles/SinglePost.module.css';

const Singlepost =()=>{
    return(       
        <Grid item xs={7} className={singlePost.post}>
            <img src="/assets/images/car-1.png" alt="" style={{width:"300px"}}/>
            <Typography gutterBottom variant="h5">
                Lorem, ipsum dolor sit amet.
            </Typography>
            <Typography gutterBottom variant="body1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam minus facilis aut atque reiciendis deleniti perspiciatis necessitatibus, eum, optio aperiam dicta ipsam totam magnam exercitationem dolorum nobis quis qui.
            </Typography>  
        </Grid>
    );
}
export default Singlepost;