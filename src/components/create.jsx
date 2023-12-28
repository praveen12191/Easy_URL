import { Grid } from '@mui/material';
import './css/index.css'
const Create = () => {
  return ( 
    <div>
      <div className='container'>

          <Grid container spacing={2}>
            <Grid xs={6} md={6}>
              <div className="text">
                <p>Add the URL</p>
                <p>Enter the Number</p>
              </div>
            </Grid>
          
            <Grid xs={6} md={6}>
              <div className='top top1'>
                <div className='box'>
                  <form>
                    <input></input><br></br>
                    <input></input>
                    <div className="button">
                      <p>Submit</p>
                    </div>
                  </form>
                </div>
              </div>
            </Grid>
          </Grid>
      </div>
    </div>
   );
}
 
export default Create;