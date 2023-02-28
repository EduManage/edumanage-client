import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useTitle } from "../../../../hooks/useTitle";

const Careers = () => {
  useTitle("All Job");

  const { data: careers = [], refetch } = useQuery({
    queryKey: ["careers"],
    queryFn: () =>
      fetch("https://edumanage-server-bice.vercel.app/careers").then((res) =>
        res.json()
      ),
  });
  const handleClick = (data: any) => {
    const jobId = data;
    console.log(jobId);
    fetch(`https://edumanage-server-sadid-git.vercel.app/jobdelete/${jobId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.acknowledged) {
          toast.success("Delete job Successful!");

          refetch();
        }
        if (data.success === false) {
          toast.error("Delete job Fail!");
        }
      })
      .catch((error) => {
        toast.error("Delete Job Fail!");

        console.log(error);
      });
  };

  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold text-center">Current Job List</h1>
      <div>
        <div>
          <table className="table w-full table-compact my-5">
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Job Name</th>
                <th>Job Delete</th>
              </tr>
            </thead>
            <tbody>
              {careers.map((jov: any, i: any) => (
                <tr key={jov._id} className={`${i % 2 ? "" : "active"}`}>
                  <td className="p-3 text-lg">{jov.name}</td>
                  <td>{jov.jovname}</td>
                  <td className="mx-0">
                    <label
                      htmlFor="delete-modal"
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                      onClick={() => handleClick(jov._id)}
                    >
                      Delete
                    </label>
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
