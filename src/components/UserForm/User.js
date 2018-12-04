import React from 'react';

import { Input, Button } from 'antd';
import './User.css';

const Search = Input.Search;

const UserForm = props => {
  return (
    <form onSubmit={props.getWeather}>
      {/* <input style={{ margin: "20px auto", display: 'block' }} type="text" name="weatherValue" /> */}
      <Search
        placeholder="Search for a city"
        onSearch={value => console.log(value)}
        type="text"
        name="weatherValue"
        style={{ width: 200 }}
      />
      <br />
      <Button onClick={props.getCity} className="main">
        Submit
      </Button>
    </form>
  );
};

export default UserForm;
