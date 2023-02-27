import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const JobDelete = () => {
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
          <ul className="text-center mt-5 ">
            {careers.map((jov: any) => (
              <div className="border border-black my-1">
                <Link to={`/jobdetails/${jov._id}`}>
                  <li
                    className="text-xl py-1"
                    key={jov._id}
                    onClick={() => handleClick(jov._id)}
                  >
                    {jov.name}: {jov.jovname}
                  </li>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobDelete;
