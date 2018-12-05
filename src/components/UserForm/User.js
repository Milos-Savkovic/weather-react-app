import React from 'react';

import { Input, Button } from 'antd';
import './User.css';

const Search = Input.Search;

const UserForm = ({ getWeather, searchValue, handleSearchInput }) => {
  return (
    <div>
      <Search
        placeholder="Search for a city"
        value={searchValue}
        onChange={handleSearchInput}
        type="text"
        name="weatherValue"
        style={{ width: 200 }}
      />
      <br />
      <Button onClick={getWeather} className="main">
        Submit
      </Button>
    </div>
  );
};

export default UserForm;
