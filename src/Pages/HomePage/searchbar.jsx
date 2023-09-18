import React, { useState } from 'react';
import { TextField, Container, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    const searchText = event.target.value;
    setSearch(searchText);
    onSearch(searchText); 
  };

  return (
    <Container maxWidth="md" sx={{ mt: 20 }}>
      <TextField
        id="search"
        type="search"
        label="Search"
        value={search}
        onChange={handleChange}
        fullWidth
        sx={{ marginTop: -15, marginBottom: -25 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
}