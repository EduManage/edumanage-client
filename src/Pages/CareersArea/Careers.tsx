import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Careers = () => {
  const { data: careers = [] } = useQuery({
    queryKey: ["careers"],
    queryFn: () =>
      fetch("https://edumanage-server-bice.vercel.app/careers").then((res) =>
        res.json()
      ),
  });
  const handleClick = (data: any) => {
    const jobId = data;
    // console.log(jobId);
    fetch(`https://edumanage-server-bice.vercel.app/jobdetails/${jobId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Job Details!!!");
        }
      });
  };
  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold text-center">Current Job Openings</h1>
      <div>
        <div>
          <table className="table w-full table-compact my-5">
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Job Name</th>
                <th>Job Details</th>
              </tr>
            </thead>
            <tbody>
              {careers.map((jov: any, i: any) => (
                <tr key={jov._id} className={`${i % 2 ? "" : "active"}`}>
                  <td className="p-3 text-lg">{jov.name}</td>
                  <td>{jov.jovname}</td>
                  <td className="mx-0">
                    <Link to={`/jobdetails/${jov._id}`}>
                      <label className="bg-sky-400 hover:bg-sky-700 text-white font-bold py-1 px-4 rounded">
                        Details
                      </label>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Careers;
