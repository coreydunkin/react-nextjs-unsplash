import {createTheme, styled, ThemeProvider} from '@mui/material';
import { rgba, tint, shade, invert, meetsContrastGuidelines } from 'polished';
import {ImageListItem, ImageListItemBar} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Image from 'next/image';
import {motion} from 'framer-motion';

const CardImg = styled(Image)`
  transform: scale(var(--scale));
  background-color: ${props => props.theme.palette.primary.main};
  width: 100%;
  height: auto;
`
const CardContainer = styled(motion.div)`
  background-color: ${props => props.theme.palette.primary.main};
  line-height:0;
  cursor: pointer;
`

const CardText = styled(ImageListItemBar)`
  background-color: ${props => props.theme.palette.primary.main};
  .MuiImageListItemBar-title {
    color: ${props => props.theme.palette.primary.contrastText};
    p {
      margin: var(--textMargin); 
    }
    span {
      font-weight: 600;
    } 
  }
`;

export default function ImageItem({ item }) {
  let bgColor = shade(0.025, `${rgba(`${item.color}`, 0.80)}`);
  let textColor = invert(`${rgba(`${item.color}`, 1)}`);
  // Check if the title colour is properly contrasted with the background
  // If not, mix the colour with white
  if(!meetsContrastGuidelines(bgColor, textColor).AA) {
    textColor = `${tint(0.80, `${rgba(`${item.color}`, 1)}`)}`
  }

  const theme = createTheme( {
    palette: {
      primary: {
        main: bgColor,
        contrastText: textColor,
      }
    }
  });

  // Set up animations with framer motion
  // to pass animations to children we use a css variable name '--example'
  const cardAnimations = {
    initialAnim: {'--textMargin': '2px 0', '--scale': 1, opacity: 0.2},
    anim: {opacity: 1},
    transitionAnim: {
      opacityAnim: ({ opacity: { delay: 0.2 + (parseInt(`0.${item.indexNum}5`) * 3), duration: 0.4 }})
    },
    hoverAnim: {
      '--scale': 1.05,
      '--textMargin': '10px 0',
      transition: {duration: 0.2, ease: 'easeOut'}
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <ImageListItem>
        <CardContainer as={motion.div}
          whileHover={cardAnimations.hoverAnim}
          initial={cardAnimations.initialAnim}
          animate={cardAnimations.anim}
          transition={cardAnimations.transitionAnim.opacityAnim}
        >
          <CardImg width={item.width} height={item.height} src={item.urls.small} alt={item.id} blurDataURL={item.urls.thumb} placeholder={'blur'} />
          <CardText
            title={<p><span>Author: </span>@{item.user.username}</p>}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: `${theme.palette.primary.contrastText}` }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          >
          </CardText>
        </CardContainer>
      </ImageListItem>
    </ThemeProvider>
  );
}
