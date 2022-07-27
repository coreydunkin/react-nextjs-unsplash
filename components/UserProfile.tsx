import {Grid, Paper} from '@mui/material';
import {styled} from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import {useContext} from 'react';
import {GalleryDataContext} from '../providers/GalleryDataProvider';

const UserContainer = styled(Box)`
  h1, h2 {
    margin: 0px
  }
`
const UserImage = styled(Image)`
  border-radius: 100%;
`
export default function UserProfile() {
  const {data} = useContext(GalleryDataContext);
  return (
    <UserContainer>
      <Grid container spacing={0}  justifyContent={'center'} alignItems={'center'}>
        <Grid item xs={12} md={1}>
          <UserImage width={80} height={80} src={data.results[0].user.profile_image.large}
                 alt={data.results[0].user.username} blurDataURL={data.results[0].user.profile_image.small}
                 placeholder={'blur'}/>
        </Grid>
        <Grid item xs={12} md={3}>
          <h1>{data.results[0].user.name}</h1>
          <h2><a href={data.results[0].user.links.html} target="_blank">@{data.results[0].user.username}</a></h2>
        </Grid>
      </Grid>
    </UserContainer>
  );
}