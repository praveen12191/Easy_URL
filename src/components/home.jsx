import { Grid } from '@mui/material';
import './css/index.css'
import img from './img/img.png'
const Home = () => {
    return ( 
      <div>
        <Grid container spacing={2}>
            <Grid item xs={12}>
              <h1>Easy URL</h1>
            </Grid>
            <Grid item xs={6} md={6} sm={6}>
              <div className="top">
                <div>
                  <div className='shape'>
                    <p>Create</p>
                  </div>
                  <div className='shape'>
                    <p>Search</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={6}>
                <img src={img}></img>
            </Grid>
        </Grid>
      </div>
    );
}
 
export default Home;