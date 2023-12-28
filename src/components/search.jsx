import { Grid } from "@mui/material";

const Search = () => {
    return ( 
        <div>
            <div className="container">
            <Grid container spacing={2}>
            <Grid xs={6} md={6}>
              <div className="text text1">
                <p>Enter the number</p>
              </div>
            </Grid>
          
            <Grid xs={6} md={6}>
              <div className='top top1'>
                <div className='box'>
                  <form>
                    <input></input><br></br>
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
 
export default Search;