import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

export { Pagination };

function Pagination(props: {
  count?: number;
  disabled?: boolean;
  page?: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}) {
  return (
    <MuiPagination count={props.count} disabled={props.disabled} onChange={props.onChange} page={props.page}></MuiPagination>
  );
}
