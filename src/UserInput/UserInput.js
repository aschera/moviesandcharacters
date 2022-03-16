import React from 'react';
import './UserInput.css';

const UserInput = ( props ) => {

    function filterclick(e) {
        let eventValue = e.target.value;
        props.filterListHandler(eventValue);
    }

    function search(e) {
        let searchValue = e.target.value
        props.searchListHandler(searchValue);
    }

    return (
      <div className="UserInput">
        <div className="FilterButton">
        <label for="filter">Filter movies</label>
          <select id="filter" className="submenu" onChange={filterclick}>
            {props.filterOptions.map(function (item) {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className="search">
          <span className="fa fa-search"></span>
          <label for="inp">Search movies</label>
          <input
            className="search"
            id="inp"
            type="text"
            onChange={search}
          />
        </div>
      </div>
    );
};



export default UserInput;
