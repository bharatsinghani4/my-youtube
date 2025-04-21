import React from "react";
import { useSelector } from "react-redux";
import Chip from "./Chip";

const ChipsList = () => {
  const isSidebarOpen = useSelector((store) => store?.app.isSidebarOpen);
  const left = isSidebarOpen ? "left-60 top-14" : "left-14 top-14";

  return (
    <div
      className={`fixed top-14 ${left} pl-6 py-3 flex gap-3 items-center w-full bg-white`}
    >
      <Chip
        label={"All"}
        selected={true}
      />
      <Chip label={"Electric Vehicles"} />
      <Chip label={"Supercar"} />
      <Chip label={"Inventions"} />
      <Chip label={"Power Tools"} />
      <Chip label={"Gaming"} />
      <Chip label={"Compact SUV"} />
      <Chip label={"Lego Technic"} />
      <Chip label={"Live"} />
      <Chip label={"Music"} />
    </div>
  );
};

export default ChipsList;
