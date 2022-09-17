import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { filterContact } from "../../redux/filter/filter-slice";

function Filter() {
  const dispatch = useDispatch();
  const filterId = nanoid();

  function handleFilter({ target }) {
    dispatch(filterContact(target.value));
  }

  return (
    <input
      id={ filterId }
      type="text"
      name="filter"
      onChange={ handleFilter }
      placeholder="Filter"
    />
  );

}

export default Filter
