import React, {useState, useContext} from "react";
import {GalleryDataContext} from "../pages/_app";
import {Paper} from "@mui/material";
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import styled from "styled-components";



export default function Search() {
  const { setQuery, setPage } = useContext(GalleryDataContext);
  const [searchValue, setSearchValue] = useState("");

  // Clear out the search and reset the pagination
  function handleClear() {
    setSearchValue("");
    setQuery(null);
    setPage(1);
  }

  return (
    <>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", maxWidth: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          value={searchValue}
          placeholder="Search for images"
          inputProps={{ 'aria-label': 'search google maps' }}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        {searchValue.length > 0 && (
          <IconButton
            sx={{ p: '10px' }}
            aria-label="clear"
            onClick={handleClear}
          >
            <ClearIcon  />
          </IconButton>
        )}
        <IconButton
          type="submit"
          sx={{ p: '10px' }}
          aria-label="search"
          onClick={(e) => {e.preventDefault(), setQuery(searchValue)}}
        >
          <SearchIcon  />
        </IconButton>
      </Paper>
    </>
  );
}
