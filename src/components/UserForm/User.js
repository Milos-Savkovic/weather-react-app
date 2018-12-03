import React from 'react';

import { Input } from 'antd';

const Search = Input.Search;

const UserForm = props => {
  return (
    <form onSubmit={props.getWeather}>
      {/* <input style={{ margin: "20px auto", display: 'block' }} type="text" name="weatherValue" /> */}
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        type="text"
        name="weatherValue"
        style={{ width: 200 }}
      />
      <br />
      <button onClick={props.getCity}>Submit</button>
    </form>
  );
};

export default UserForm;
