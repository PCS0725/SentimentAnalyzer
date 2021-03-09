import React from 'react';
import { Table } from 'reactstrap';
import styled from 'styled-components';
const TableWrapper = styled('div')`
  overflow-y: scroll;
  height: 500px;
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    color: white;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 10px;
  }

  :hover {
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #f3f3f3;
      border-radius: 10px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #c3c3c3;
    }
  }
`;
export const TableComponent = (props) => (
  <div style={{ marginTop: '50px' }}>
    <h3>{props.heading}</h3>
    <TableWrapper>
      <Table hover stripped>
        <thead>
          <tr>
            <th>#</th>
            <th>Word</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((d, index) => {
            const [word, count] = d;
            return (
              <tr>
                <td>{index + 1}</td>
                <th scope="row">{word}</th>
                <td>{count}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </TableWrapper>
  </div>
);
