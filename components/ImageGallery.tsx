import ImageItem from './ImageItem';
import {ImageList} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';

export default function ImageGallery({ data }) {
  const theme = useTheme();
  // useMediaQuery handles the breakpoint size, if it's
  // small, we use 1 column, if it's a larger width, we use 3
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <ImageList variant='masonry' cols={!matches ? 1 : 3} gap={8}>
      {data?.map((item, index) => {
        const itemData = {...item, indexNum: index};
        return (
          <ImageItem key={item.id} item={itemData} />
        );
      })}
    </ImageList>
  );
}