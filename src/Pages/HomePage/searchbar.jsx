import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState('');
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const searchText = event.target.value;
    setSearch(searchText);
  };

  useEffect(() => {
    if (search === '') {
      setOptions([]);
      return;
    }

    setLoading(true);
    async function callSearchApi(search) {
      const response = await axios.get(
        `http://localhost:4000/events/?keyword=${search}`,
        { withCredentials: true }
      );
      setOptions(response.data || []);
      setLoading(false);
    }
    callSearchApi(search);
    console.log(options);
  }, [search]);

  return (
    <Autocomplete
      id="search"
      // options={![options] ? [{ label: 'Loading...', id: 0 }] : [options]}
      options={options}
      getOptionLabel={(option) => option.title || ''}
      style={{ width: '100%' }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          variant="outlined"
          onChange={handleChange}
          InputProps={{
            endAdornment: <SearchIcon />,
            startAdornment: (
              <CircularProgress
                color="inherit"
                size={20}
                style={{ visibility: loading ? 'visible' : 'hidden' }}
              />
            ),
          }}
        />
      )}
      onInputChange={(event, newInputValue) => {
        setSearch(newInputValue);
        onSearch(newInputValue);
      }}
    />
  );
}
