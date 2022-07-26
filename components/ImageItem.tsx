import {createTheme, styled, ThemeProvider} from "@mui/material";
import { useState } from 'react';
import { rgba, tint, shade, invert, meetsContrastGuidelines } from "polished";
import {ImageListItem, ImageListItemBar} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Image from 'next/image';
import {motion} from "framer-motion";

const CardImg = styled(Image)`
  background-color: ${props => props.theme.palette.primary.main};
  width: 100%;
`
const CardContainer = styled(motion.div)`
  background-color: ${props => props.theme.palette.primary.main};
`

const StyledImageListItemBar = styled(ImageListItemBar)` 
  background-color: ${props => props.theme.palette.primary.main};
  cursor: pointer;
  bottom: 6px;
  .MuiImageListItemBar-title {
    color: ${props => props.theme.palette.primary.contrastText};
    span {
      font-weight: 600;
    } 
  }
`;

export default function ImageItem({ item }) {
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };

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

  return (
    <ThemeProvider theme={theme}>
      <ImageListItem>
        <CardContainer as={motion.div}
          initial={{ opacity: 0.2 }}
          // style={{ height: imageLoading ? "6rem" : "auto" }}
          animate={{
            opacity: imageLoading ? 0.2 : 1
          }}
          transition={
            ({ opacity: { delay: 0.2 + (parseInt(`0.${item.indexNum}5`) * 3), duration: 0.4 } })
          }
          onLoad={imageLoaded}
          width="100%"
        >



          <CardImg width={item.width} height={item.height} src={item.urls.small} alt={item.id} blurDataURL={item.urls.thumb} placeholder={"blur"} />

        </CardContainer>
        <StyledImageListItemBar
          title={<p><span>Author: </span>@{item.user.username}</p>}

          subtitle={item.author}
          actionIcon={
            <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${item.title}`}
            >
              <InfoIcon />
            </IconButton>
          }
        >
        </StyledImageListItemBar>


      </ImageListItem>
    </ThemeProvider>
  );
}
