import ImageItem from './ImageItem';
import {ImageList} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';

export default function ImageGallery({ data }) {
  const theme = useTheme();
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