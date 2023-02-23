import { useState } from "react";
import {
  AiFillPlayCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineDown,
} from "react-icons/ai";
import { BiBookContent } from "react-icons/bi";
import {
  BsCheckLg,
  BsFillFileSpreadsheetFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import { CgMediaLive } from "react-icons/cg";
import { MdOutlineAssignment, MdQuiz } from "react-icons/md";
import { RiListUnordered } from "react-icons/ri";
import { title, reveiwData, responsive } from "./courseData";
// import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import ReveiwCard from "./ReveiwCard";
import { toast } from "react-hot-toast";

const SpecialCourses = () => {
  const [showAll, setShowAll] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleLoadAll = () => {
    setShowAll(!showAll);
  };

  const handleCourse = () => {
    setDisabled(true);
    toast.success("added to cart");
  };

  const review = reveiwData.map((data) => (
    <ReveiwCard key={data.id} data={data} />
  ));
  return (
    <div className="pt-20 w-5/6 mx-auto relative">
      <div className="flex justify-between items-start gap-4 font-poppins-em">
        <div className="w-7/12">
          <div className="flex flex-col justify-center items-start  bg-gradient-to-br from-blue-100 to-purple-200 p-5 h-[30vh]">
            <h1 className="text-3xl  font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 mb-2">
              Psychology training for all
            </h1>
            <p className="mt-2 text-gray-500">
              This training course is designed to introduce participants to the
              fundamentals of cognitive-behavioral therapy, a widely used
              evidence-based psychotherapy approach.
            </p>
          </div>
          <h2 className="text-2xl mt-10 font-semibold  mb-2">
            What's this course?
          </h2>
          <div className="mt-1 border-2 rounded-md flex gap-5 flex-wrap p-8 text-gray-500 text-sm">
            <div className="flex justify-between items-start gap-2">
              <BsCheckLg className="text-green-500" />
              <p className="">Interactive lectures and discussions</p>
            </div>
            <div className="flex justify-between items-start gap-2">
              <BsCheckLg className="text-green-500" />
              <p className="">Case studies and real-world examples</p>
            </div>
            <div className="flex justify-between items-start gap-2">
              <BsCheckLg className="text-green-500" />
              <p className="">Group exercises and activities</p>
            </div>
            <div className="flex justify-center items-start gap-2">
              <BsCheckLg className="text-green-500" />
              <p className="">
                Access to relevant research articles and resources
              </p>
            </div>
            <div className="flex justify-between items-start gap-2">
              <BsCheckLg className="text-green-500" />
              <p className="">
                Experienced instructors with a background in the field
              </p>
            </div>
            <div className="flex justify-between items-start gap-2">
              <BsCheckLg className="text-green-500" />
              <p className="">Practical skill-building opportunities</p>
            </div>
            <div className="flex justify-between items-start gap-2">
              <BsCheckLg className="text-green-500" />
              <p className="">
                Opportunities for individualized feedback and support
              </p>
            </div>
          </div>
          <h2 className="text-2xl mt-10 font-semibold  mb-2">Course Outline</h2>
          <div className=" border-2 rounded-md p-8 relative">
            {!showAll ? (
              <>
                {title.slice(0, 3).map((t) => (
                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow  bg-base-100 rounded-box"
                  >
                    <div className="collapse-title text-xl font-medium">
                      <div className="flex justify-start items-center gap-3">
                        <RiListUnordered size={25} className="text-green-500" />
                        <p> {t.title}</p>
                      </div>
                    </div>
                    <div className="collapse-content">
                      <div className="flex justify-start items-center gap-3">
                        <BiBookContent />
                        <p>{t.d1}</p>
                      </div>
                      <div className="flex justify-start items-center gap-3">
                        <BiBookContent />
                        <p>{t.d2}</p>
                      </div>
                      <div className="flex justify-start items-center gap-3">
                        {t.d3 && (
                          <>
                            <BiBookContent />
                            <p>{t.d3}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {title.map((t) => (
                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow  bg-base-100 rounded-box"
                  >
                    <div className="collapse-title text-xl font-medium">
                      {t.title}
                    </div>
                    <div className="collapse-content">
                      <div className="flex justify-start items-center gap-3">
                        <BiBookContent className="text-green-500" />
                        <p>{t.d1}</p>
                      </div>
                      <div className="flex justify-start items-center gap-3">
                        <BiBookContent className="text-green-500" />
                        <p>{t.d2}</p>
                      </div>
                      <div className="flex justify-start items-center gap-3">
                        {t.d3 && (
                          <>
                            <BiBookContent className="text-green-500" />
                            <p>{t.d3}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}

            <div className="absolute -bottom-13 left-0 right-0 flex flex-col justify-center items-center">
              <p
                onClick={handleLoadAll}
                className="cursor-pointer text-center btn btn-sm "
              >
                {!showAll ? "See more" : "See less"}
              </p>
              {!showAll ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
            </div>
          </div>
          <h2 className="text-2xl mt-10 font-semibold  mb-2">
            See what others say
          </h2>
          {/* <Carousel responsive={responsive}>{review}</Carousel> */}
        </div>

        <div className="w-5/12 bg-gradient-to-br from-blue-100 to-purple-200 rounded-md mx-auto overflow-hidden sticky top-20">
          <iframe
            className="w-full h-56"
            src="https://www.youtube.com/embed/v1eSPtqauCw"
            title="YouTube video player"
            allow="accelerometer; autoplay"
            allowFullScreen
          ></iframe>
          <div className="mt-6 p-2">
            <p className="text-3xl font-semibold">
              FREE/ <span className="text-sm">full course access</span>
            </p>
          </div>
          <div className="mt-6 text-gray-500 p-4 space-y-1">
            <div className="flex justify-start items-center gap-5">
              <BsFillPeopleFill />
              <p>Enrolled 1240 students</p>
            </div>
            <div className="flex justify-start items-center gap-5">
              <AiFillPlayCircle />
              <p>300 vedio class</p>
            </div>
            <div className="flex justify-start items-center gap-5">
              <CgMediaLive />
              <p>50 live class</p>
            </div>
            <div className="flex justify-start items-center gap-5">
              <MdOutlineAssignment />
              <p>16 assignment and exams</p>
            </div>
            <div className="flex justify-start items-center gap-5">
              <BsFillFileSpreadsheetFill />
              <p>12 very impoprtant lecture sheets</p>
            </div>
            <div className="flex justify-start items-center gap-5">
              <MdQuiz />
              <p>1280 high learnling quiz section</p>
            </div>
          </div>
          <button
            onClick={handleCourse}
            disabled={disabled}
            className="my-6 bg-gradient-to-r  from-teal-300 to-blue-300 px-8 py-4 shadow-teal-300/30 hover:shadow-teal-300/30 shadow-lg rounded  hover:shadow-xl ease-in-out duration-300 w-full "
          >
            {disabled ? "Added to cart" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialCourses;
