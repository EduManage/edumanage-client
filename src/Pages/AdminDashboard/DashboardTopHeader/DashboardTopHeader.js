import React from "react";
const DashboardTopHeader = ({ name, title }) => {
  return (
    <div className="breadcrumb-area flex justify-between pb-6">
      <h2 className="text-left text-bold text-black text-2xl px-3">{title}</h2>
      <div className="flex gap-1">
        <h3 className="text-left text-bold text-black text-2xl px-3">{name}</h3>
        <h4 className="text-left text-bold text-[#6C757D] text-2xl px-3">
          / {title}
        </h4>
      </div>
    </div>
  );
};

export default DashboardTopHeader;
