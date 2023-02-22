import React from "react";
import { toast } from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const JobCareers = () => {
  const data: any = useLoaderData();
  console.log(data);
  const handleClick = (data: any) => {
    if (data === 1) {
      toast.success("Apply Done Waiting Plz!!!");
    }
  };
  return (
    <div className="p-20">
      <div className="w-3/4 mx-auto">
        <h1>Job Post By: {data.postname}</h1>
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <h1 className="text-2xl font-bold py-2 ">{data.jovname}</h1>
        <div>
          <span className="text-xl font-bold ">Company Description</span> <br />
          <p>{data.company}</p>
        </div>
        <h1 className="py-2 text-lg">{data.Additional}</h1>
        <h1 className="py-2 text-lg">Our Employe: {data.Employee}</h1>
        <h1>{data.Learning}</h1>
        <ul>
          <li className="text-xl font-bold py-2">Qualifications</li>
          {data.Qualifications.map((da: any, i: any) => (
            <li>
              {i + 1} {da}
            </li>
          ))}
        </ul>
        <ul>
          <li className="text-xl font-bold py-2">Responsibilities</li>
          {data.Responsibilities.map((res: any, i: any) => (
            <li>
              {i + 1} {res}
            </li>
          ))}
        </ul>
        <div>
          <h1 className="text-3xl py-3 font-bold">Additional Information</h1>

          <h1>{data.address}</h1>
          <h1>{data.department}</h1>
          <h1>{data.health}</h1>
        </div>
        <ul>
          <li className="text-xl font-bold py-2">Job Details:</li>
          {data.jovdescription.map((jovdes: any, i: any) => (
            <li>
              {i + 1} {jovdes}
            </li>
          ))}
        </ul>
        <h1>Job Time: {data.time}</h1>
        <Link to={"/careers"}>
          <button
            onClick={() => handleClick(1)}
            className="btn black text-white btn-wide mt-2"
          >
            I'm Interested
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCareers;
