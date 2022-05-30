import React from "react";
import { Button, ButtonGroup, Select } from '@chakra-ui/react'

const Pagination = (props) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;
//   console.log(props.total,props.page,props.total>(props.page*3))
 
  
  return (
    <ButtonGroup width="500px" margin='auto'>
      <Button data-cy="pagination-first-button" 
              onClick={props.firstPage} disabled={props.page<=1}>First</Button>
      <Button data-cy="pagination-previous-button" 
              onClick={props.prevPage} disabled={props.page<=1}>Previous</Button>
      <Select data-cy="pagination-limit-select" 
              onChange={()=>{}}
              >
        <option data-cy="pagination-limit-3" value='3' name='3'>3 </option>
        <option data-cy="pagination-limit-6" value='6' name='6'>6 </option>
        <option data-cy="pagination-limit-9" value='9' name='9'>9 </option>
      </Select>
      <Button data-cy="pagination-next-button" 
              onClick={props.nextPage} disabled={props.total<=(props.page*3)}>Next</Button>
      <Button data-cy="pagination-last-button" 
              onClick={props.lastPage}
              disabled={props.total<=props.page*3}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;