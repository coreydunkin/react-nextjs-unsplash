import {Paper} from '@mui/material';
import {styled} from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const ErrorContainer = styled(Box)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  .inner {
    width: 100%;
    background: none;
    box-shadow: none;
  }
`

export default function Error() {
  return (
    <ErrorContainer>
      <Paper className='inner' component={Stack} direction='column' justifyContent='center'>
        <h1>Sorry, there was an error 😭</h1>
        <p>Please try again later</p>
      </Paper>
    </ErrorContainer>
  );
}