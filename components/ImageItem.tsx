
//import {createTheme, styled, ThemeProvider} from "@mui/system";
import {createTheme, styled, ThemeProvider} from "@mui/material";
import { rgba, tint, lighten, shade, complement, invert, meetsContrastGuidelines } from "polished";
import {Grid} from "@mui/material";
import {ImageListItem, ImageListItemBar} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { ListItemText } from '@mui/material';
import {useEffect, useState} from "react";

const CardImg = styled("img")`
  background-color: ${props => props.theme.palette.primary.main};
  //padding: 0.2em;
  width: 100%;
`

const StyledImageListItemBar = styled(ImageListItemBar)` 
  background-color: ${props => props.theme.palette.primary.main};
  cursor: pointer;
  bottom: 7px;
  .MuiImageListItemBar-title {
    color: ${props => props.theme.palette.primary.contrastText};
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

  return (
    <ThemeProvider theme={theme}>
      <ImageListItem>
        <CardImg src={item.urls.small} alt={item.id} loading="lazy" />
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
