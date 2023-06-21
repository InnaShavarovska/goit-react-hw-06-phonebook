import { FilterTitle, FilterInput, FilterDiv } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = filter => dispatch(setFilter(filter));
  const changeFilter = event => {
    handleFilterChange(event.currentTarget.value);
  };

  return (
    <FilterDiv>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput type="text" onChange={changeFilter} />
    </FilterDiv>
  );
};

export default Filter;
