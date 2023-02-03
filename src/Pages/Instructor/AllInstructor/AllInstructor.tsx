import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
import "./AllInstructor.css";

const AllInstructor = () => {
  // const { data: allInstructor = [] } = useQuery({
  //   queryKey: ["allinstructor"],
  //   queryFn: async () => {
  //     const res = await fetch(`instructor`);
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  // console.log(allInstructor);
  const [instructor, setinstructor] = useState<any[]>([]);
  useEffect(() => {
    fetch(`https://doctors-portal-server-gray-alpha.vercel.app/instructor`)
      .then((res) => res.json())
      .then((data) => setinstructor(data));
  }, []);
  const handleInstructor = (tata: any) => {
    const instructorID = tata.id;
    fetch(`https://doctors-portal-server-gray-alpha.vercel.app/instructorDetails`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(instructorID),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Instructor Details!!!");
        }
      });
  };
  return (
    <div className="flex justify-center py-24 ">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-3/4">
        {instructor.map((ins, i) => (
          <div className="mx-auto text-center">
            <div>
              <Link
                onClick={() => handleInstructor(ins._id)}
                to={`/instrctorDetails/${ins._id}`}
              >
                <div>
                  <img
                    src={ins.img}
                    alt=""
                    className="rounded-full h-32 w-32 mx-auto box-shadow my-5"
                  />
                </div>
                <div>
                  <h3>
                    <samp className="font-extrabold">
                      {ins.title ? ins.title : "hemm"}
                    </samp>{" "}
                    {ins.titleBack ? ins.titleBack : "hemm"}
                  </h3>
                  
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllInstructor;
