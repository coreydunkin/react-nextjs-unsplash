import { Pagination } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import {GalleryDataContext} from '../providers/GalleryDataProvider';

export default function PaginationItem() {
  const {page, setPage, data, query} = useContext(GalleryDataContext);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    data?.totalPages && data?.totalPages !== totalPages && setTotalPages(data?.totalPages);
  },[data]);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      {query !== null && totalPages > 0 &&
        <Pagination count={totalPages} variant='outlined' shape='rounded' page={page} onChange={handleChange} />
      }
    </>
  );
}