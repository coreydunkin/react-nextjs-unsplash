import {Paper} from '@mui/material';
import {styled} from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {motion} from 'framer-motion';

const spinTransition = {
  repeat: Infinity,
  ease: 'easeInOut',
  duration: 1
};

const Spinner = styled(motion.span)`
  display: block;
  width: 100px;
  height: 100px;
  border: 12px solid #cdcdcd;
  border-top: 12px solid #2D3134;
  border-radius: 50%;
  box-sizing: border-box;
`

const LoadingContainer = styled(Box)`
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

export default function Loading() {
  return (
    <LoadingContainer>
      <Paper className='inner' component={Stack} direction='column' justifyContent='center' alignItems='center'>
        <Spinner as={motion.span} animate={{ rotate: 360 }} transition={spinTransition} />
      </Paper>
    </LoadingContainer>
  );
}