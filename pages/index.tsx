import {useContext} from 'react';
import ImageGallery from '../components/ImageGallery';
import Search from '../components/Search';
import {GalleryDataContext} from '../providers/GalleryDataProvider';
import {Grid} from '@mui/material';
import PaginationItem from '../components/PaginationItem';
import Error from '../components/Error';
import Loading from '../components/Loading';

export default function Home() {
  const {data, loading, error} = useContext(GalleryDataContext);
  return (
      <div>
        <h1>NEXTSPLASH 😎</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Search />
          </Grid>
          <Grid item xs={12} md={4}>
            <PaginationItem />
          </Grid>
        </Grid>
        {loading && <Loading />}
        {error && <Error />}
        {data && <ImageGallery/>}
      </div>
    )
}