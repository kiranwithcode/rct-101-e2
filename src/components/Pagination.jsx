import React from "react";
import { Button, ButtonGroup, Select } from '@chakra-ui/react'

const Pagination = ({ firstPage,
  lastPage,
  nextPage,
  prevPage,
  total,
  page,
  limit}) => {

  
  return (
    <ButtonGroup width="500px" margin='auto'>
      <Button data-cy="pagination-first-button" 
              onClick={firstPage} disabled={page<=1}>First</Button>
      <Button data-cy="pagination-previous-button" 
              onClick={prevPage} disabled={page<=1}>Previous</Button>
      <Select data-cy="pagination-limit-select" 
              onChange={()=>{}}
              >
        <option data-cy="pagination-limit-3" value='3' name='3'>3 </option>
        <option data-cy="pagination-limit-6" value='6' name='6'>6 </option>
        <option data-cy="pagination-limit-9" value='9' name='9'>9 </option>
      </Select>
      <Button data-cy="pagination-next-button" 
              onClick={nextPage} disabled={total<=(page*limit)}>Next</Button>
      <Button data-cy="pagination-last-button" 
              onClick={lastPage}
              disabled={total<=page*limit}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;