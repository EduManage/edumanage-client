import React from "react";
import { useLoaderData } from "react-router-dom";
import fb from "../../../Assets/facebook.png";
import ig from "../../../Assets/instagram.png";
import tw from "../../../Assets/twitter.png";
import yt from "../../../Assets/youtube.png";

const TeacherDeatils = () => {
  const instructorDetailsOne: any = useLoaderData();
  console.log(instructorDetailsOne);
  return (
    <div className="container mx-auto py-44 ">
      <div className="bg-slate-100 grid grid-cols-2 p-10 rounded">
        <div>
          <div className="flex justify-center items-center">
            <div>
              <img
                src={
                  instructorDetailsOne.img ? instructorDetailsOne.img : "sada"
                }
                alt="img"
                className="rounded-lg w-3/5"
              />
              <h1 className="my-2 text-xl">
                <span className="font-extrabold mt-2">
                  {instructorDetailsOne.title
                    ? instructorDetailsOne.title
                    : "sada"}
                </span>
                {instructorDetailsOne.titleBack
                  ? instructorDetailsOne.titleBack
                  : "sada"}
              </h1>
              <h3>Johndoe@gmail.com</h3>
            </div>
          </div>
          {/* social icon start  */}
          <div className="flex justify-center items-center">
            <div className="w-1/6 hidden md:flex justify-center items-center gap-2 font-medium">
              <img className="w-4" src={fb} alt="" />
              <img className="w-4" src={ig} alt="" />
              <img className="w-4" src={tw} alt="" />
              <img className="w-4" src={yt} alt="" />
            </div>
          </div>
          {/* social icon end  */}
        </div>

        <div>
          <div>
            <h1 className="text-2xl font-bold py-2">Short Bio</h1>
            <p className="text-slate-500">
              {instructorDetailsOne.shortBio
                ? instructorDetailsOne.shortBio
                : "sada"}
            </p>
          </div>
          <div className="py-3">
            <h1 className="text-2xl font-bold py-2">Education</h1>
            <p className="text-slate-500">
              {instructorDetailsOne.description
                ? instructorDetailsOne.description
                : "sada"}
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold py-2">Experience</h1>
            <p className="text-slate-500">
              {instructorDetailsOne.experience
                ? instructorDetailsOne.experience
                : "sada"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDeatils;
