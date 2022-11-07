import React from "react";
import {Button,ButtonGroup,Select} from '@chakra-ui/react'
const Pagination = () => {
  // TODO: Remove below const and instead import them from chakra
  

  return (
    <ButtonGroup width={'50%'} margin='auto' mt='50px' mb={'200px'}>
      <Button data-cy="pagination-first-button">1</Button>
      <Button data-cy="pagination-previous-button">PREV</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button">NEXT</Button>
      <Button data-cy="pagination-last-button">LAST</Button>
    </ButtonGroup>
  );
};

export default Pagination;
