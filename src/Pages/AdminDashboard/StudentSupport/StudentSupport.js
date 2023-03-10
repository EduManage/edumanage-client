import { useState, useEffect } from "react";
import Modal from "../../../Shared/Modal/Modal";

const StudentSupport = () => {
  const [studentData, setStudentSupport] = useState([]);
  const [id, setId] = useState(null);
  console.log(id);

  useEffect(() => {
    fetch("http://localhost:5000/support")
      .then((res) => res.json())
      .then((data) => setStudentSupport(data));
  }, []);

  console.log(studentData);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-20 py-28">
      {studentData.map((data) => (
        <div key={data._id} className="card   shadow-xl bg-gray-200">
          <div className="card-body">
            <h2 className="card-title"> {data.meetingCategory}</h2>
            <p>Date: {data.date}</p>
            <p>Time: {data.time}</p>
            <h3 className="text-base font-semibold">
              Student Email: {data.hostEmail}
            </h3>
            {data.guideEmail && (
              <h3 className="text-base font-semibold">
                Teacher Email: {data.guideEmail}
              </h3>
            )}
            {data?.meetLink && (
              <p>
                Google Meet:{" "}
                <a
                  href={`${data?.meetLink}`}
                  className="text-sky-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  {data?.meetLink}
                </a>
              </p>
            )}
            <p>{data.meetingDescription}</p>

            <div className="card-actions justify-end">
              <a
                href="#my-modal-2"
                onClick={() => setId(data._id)}
                className="btn btn-primary"
              >
                {data?.meetLink ? "Already Sent Link" : "Sent Meet Link"}
              </a>
            </div>
          </div>
          <Modal id={id} />
        </div>
      ))}
    </div>
  );
};

export default StudentSupport;
