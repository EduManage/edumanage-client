import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import girl1 from "../../Assets/girl1.jpg";
import girl2 from "../../Assets/girl2.jpg";

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
      <div className="w-full flex flex-col items-center justify-center font-poppins-em">
        <div className="md:w-4/6 grid grid-cols-1 md:grid-cols-2 gap-3  mt-36 font-poppins-em ">
          <div
            data-aos="fade-left"
            className="flex  md:flex-row justify-center items-center relative mb-[22rem]"
          >
            <img
              src={girl1}
              className="w-64  absolute left-4 top-0 
                 border-[#999999] border-4 rounded"
              alt=""
            />
            <img
              src={girl2}
              className="w-64  absolute top-24 right-40  border-[#999999] border-4 rounded"
              alt=""
            />
          </div>
          <div data-aos="fade-right" className="mt-12">
            <h3 className="text-lg text-rose-500/80 font-semibold font-poppins-em">
              Grow up your skill
            </h3>
            <div className="font-semibold text-4xl text-black/80 py-3 font-poppins-em">
              <h1>Keep Going</h1>
              <h1>Your Dream Jobs</h1>
              <h1>in EduManage Today</h1>
            </div>
            <div className="text-sm text-black/70 font-medium ">
              <p>Being a student is easy. Learning requires actual work.</p>
              <p>The great aim of education is not knowledge but action.</p>
            </div>
            <div className="flex justify-start mt-8">
              <button className="bg-gradient-to-r  from-teal-300 to-blue-300 mt-5 px-8 py-2 shadow-teal-300/30 hover:shadow-teal-300/30 shadow-lg rounded-2xl text-xs text-white  font-medium hover:shadow-xl ease-in-out duration-300">
                Join Today
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center mt-20 mb-10">
        Current Job Openings
      </h1>
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
                    <Link
                      to={`/jobdetails/${jov._id}`}
                      key={jov._id}
                      onClick={() => handleClick(jov._id)}
                    >
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
