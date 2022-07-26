import {Paper} from "@mui/material";
import {styled} from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const ErrorContainer = styled(Box)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  .inner {
    width: 100%;
    background: none;
  }
`

export default function Error() {
  return (
    <ErrorContainer>
      <Paper className="inner" component={Stack} direction="column" justifyContent="center">
        <Typography variant="h4" component="h3">
          Sorry, there was an error 😭
        </Typography>
        <Typography component="p">
          Please try again later
        </Typography>
      </Paper>
    </ErrorContainer>
  );
}