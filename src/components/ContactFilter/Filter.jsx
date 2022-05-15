import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/filter/filterSlice';
import './Filter.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filterName = useSelector(state => state.filter);

  function filter(e) {
    dispatch(filterChange(e.currentTarget.value));
  }
  return (
    <label className="filter__label">
      Find contacts by name
      <input
        className="filter__input"
        type="text"
        name="filter"
        value={filterName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={filter}
      />
    </label>
  );
}
