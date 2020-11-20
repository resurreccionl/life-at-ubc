import React from "react";
import { SectionWrapper } from "./Home";
import Title from "./Title";
import ScheduleGrid from "./ScheduleGrid";
import CustomScheduleGrid from "./CustomScheduleGrid";

function Lectures() {
  return (
    <SectionWrapper>
      <Title title="4. Select Lectures to Lock Them"></Title>
      {/* <ScheduleGrid></ScheduleGrid> */}
      <CustomScheduleGrid></CustomScheduleGrid>
    </SectionWrapper>
  );
}

export default Lectures;
