
import { toast } from "react-hot-toast";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useContext, useState } from "react";
import { AuthContext } from "../../UserContext/UserContext";
import ScheduleCard from "../../Components/ScheduleCard/ScheduleCard";


const SupportSession = () => {
  const [selected, setSelected] = useState<any>(new Date());

  const date = format(selected, "PP");
  const { user } = useContext(AuthContext);

  const handleBooking = (data: any) => {
    data.preventDefault();
    const hostEmail = user?.email;
    const form = data.target;
    const time = form.select.value;

    const meetingDescription = form.meetingDescription.value;
    const meetingCategory = form.meetingCategory.value;
    const booking = {
      hostEmail,
      date,
      time,
      meetingCategory,
      meetingDescription,
    };
    fetch("http://localhost:5000/support", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          toast.success("Support Making Successfully");
        }
      });
  };
  return (
    <div className="pt-20 lg:w-5/6 mx-auto px-5 lg:px-0 font-poppins-em">
      <h1 className="text-4xl text-center font-bold mb-10">
        One-on-one student support session
      </h1>
      <p className="lg:w-2/5 mx-auto text-center text-lg">
        Create your own, fully-branded booking page for seamless booking. Skip
        the back and forth and reduce no-shows.
      </p>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-14
        bg-base-100 py-10 lg:w-5/6 mx-auto"
      >
        <div className="md:ml-10 lg:ml-20 lg:w-full md:w-full w-3/4 mx-auto">
          <DayPicker
            mode="single"
            selected={selected}
            //   onSelect={setSelected}
            onSelect={(data) => {
              if (data) {
                setSelected(data)
              }
            }}
          />
        </div>
        <form
          onSubmit={handleBooking}
          className="md:ml-10 lg:ml-20 lg:w-full
         md:w-full w-3/4 mx-auto"
        >
          <div className="form-control w-full max-w-xs my-5">
            <h1 className="text-lg font-bold text-center text-emerald-600 mb-5">
              Meeting Schedule Time {date}
            </h1>
            <input
              required
              name="meetingCategory"
              placeholder="Support Category"
              className="input input-bordered w-full max-w-xs mb-5"
              type="text"
            />

            <textarea
              className="textarea textarea-bordered mb-5"
              name="meetingDescription"
              placeholder="Support Description"
              required
            ></textarea>

            <select
              name="select"
              className="select select-bordered mb-0"
              required
            >
              <option value="10am - 11:00am">10am - 11:00am</option>
              <option value="11am - 12:00am">11am - 12:00am</option>
              <option value="12am - 01:00am">12am - 01:00am</option>
              <option value="01am - 02:00am">01am - 02:00am</option>
              <option value="02am - 03:00am">02am - 03:00am</option>
              <option value="03am - 04:00am">03am - 04:00am</option>
              <option value="04am - 05:00am">04am - 05:00am</option>
            </select>
          </div>

          <div className="btn text-xl border-none w-full max-w-xs bg-gradient-to-r  from-teal-300 to-blue-300 text-black">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
      <ScheduleCard />
    </div>
  );
};

export default SupportSession;