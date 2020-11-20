import React from "react";
import styled from "styled-components";

const Table = styled.table`
    display: block;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
`;

function CustomScheduleGrid() {
  // Rows should probably be programmatically added (ie: we shouldnt list every single time manually)
  // Eg. For all times between 8AM - 9PM, check if any course in a given schedule is scheduled during that time slot
  // If so, create a row which spans whatever length of time that course takes up (1 hour time slot == rowspan 2)
  // There's also the issue of pagination - havent thought about this yet!
  const times = ["08:00", "08:30", "09:00", "09:30"]; // Don't hardcode this
  const createRow = (time: any): any => {
      return (<tr>
      <td>{time}</td>
      <td rowSpan={2}>CPSC 310</td>
      <td>CPSC 420</td>
      <td></td>
      <td></td>
      <td></td>
      </tr>);
  };
  return (
    <Table>
        <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
        </tr>
        {times.map((time) => {
           return createRow(time);
        })}
    </Table>
  );
}

export default CustomScheduleGrid;
