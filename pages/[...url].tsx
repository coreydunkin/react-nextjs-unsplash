import {useContext} from 'react';
import ImageGallery from '../components/ImageGallery';
import {GalleryDataContext} from '../providers/GalleryDataProvider';
import {Button, Grid} from '@mui/material';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Link from 'next/link';
import {styled} from '@mui/material';
import UserProfile from '../components/UserProfile';

const BackButton = styled(Button)`
  margin-bottom: 1em;
`;

export default function User() {
  const {data, loading, error} = useContext(GalleryDataContext);
  return (
    <div>
      <Link href='/'>
        <BackButton variant='contained'>Back to home</BackButton>
      </Link>

      {data && data.total > 0 &&
        <UserProfile />
      }

      {loading && <Loading />}
      {error && <Error />}

      {data && data.total > 0 && <ImageGallery/>}
    </div>
  )
}