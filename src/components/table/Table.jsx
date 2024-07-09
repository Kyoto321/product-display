import React, { useMemo } from "react";
import { useTable } from "react-table";
import "./table.css";

const Table = ({ data }) => {
  const columns = useMemo(
    () => [
      { Header: "S/N", accessor: "sn" },
      { Header: "SKU", accessor: "sku" },
      { Header: "Name", accessor: "name" },
      { Header: "Title", accessor: "title" },
      { Header: "Description", accessor: "description" },
      { Header: "Brand", accessor: "brand" },
      { Hbader: "Cost Price", accessor: "cost_price" },
      { Header: "Quantity", accessor: "quantity" },
      { Header: "Size", accessor: "size" },
    ],
    []
  );


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });


  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table