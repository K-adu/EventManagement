import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from '../../../redux/userInfoSlice';
export default function CountrySelect() {
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        const countryData = response.data;

        setCountries(countryData);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleCountryChange = (_, newValue) => {
    setSelectedCountry(newValue);
    // Dispatch the action to update the Redux store
    dispatch(updateUserInfo({ country: newValue ? newValue.name.common : '' }));
  };
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      value={selectedCountry}
      onChange={handleCountryChange}
      getOptionLabel={(option) => `${option.capital}, ${option.name.common}`}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ '& > img': { mr: 2, flexShrink: 0, mt: 2 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://restcountries.com/v3.1/all${option.cca2}.png`}
            srcSet={`https://restcountries.com/v3.1/all${option.ccn3}.png 2x`}
            alt=""
          />
          <div>
            <span style={{ fontSize: '1.2em' }}>{option.name.common}</span>
            <br />
            <span style={{ fontSize: '0.8em' }}>{option.capital}</span>
          </div>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
