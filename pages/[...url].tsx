import {useContext} from "react";
import ImageGallery from "../components/ImageGallery";
import Search from "../components/Search";
import {GalleryDataContext} from '../providers/GalleryDataProvider';
import {Button, Grid} from '@mui/material';
import PaginationItem from '../components/PaginationItem';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Image from 'next/image';
import Link from 'next/link'
import UserProfile from '../components/UserProfile';

export default function User() {
  const {data, loading, error} = useContext(GalleryDataContext);
  return (
    <div>
      <Link href="/">
        <Button variant="contained">Back to home</Button>
      </Link>

      {data && data.total > 0 &&
        <UserProfile />
      }

      {loading && <Loading />}
      {error && <Error />}
      {data && data.total > 0 && <ImageGallery data={data?.results}/>}
    </div>
  )
}