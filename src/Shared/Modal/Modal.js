const Modal = ({ id }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const guideEmail = form.guideEmail.value;
    const meetLink = form.meetLink.value;
    const time = form.select.value;
    const supportData = {
      guideEmail,
      meetLink,
      time,
    };

    console.log(supportData);

    fetch(`http://localhost:5000/support/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(supportData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        e.reset();
      });
  };
  return (
    <div className="modal" id="my-modal-2">
      <div className="modal-box">
        <a
          href="#"
          className="modal-action btn btn-xs btn-primary text-center absolute right-4 top-2 "
        >
          Close
        </a>

        <form onSubmit={handleSubmit}>
          <h2
            className="text-xl text-center
        pb-6 font-semibold"
          >
            Please Update The Form
          </h2>
          <input
            required
            type="email"
            name="guideEmail"
            placeholder="Supported Guide Email"
            className="input input-bordered w-full max-w-xs mb-5"
          />

          <input
            required
            name="meetLink"
            placeholder="Meet Link"
            className="input input-bordered w-full max-w-xs mb-5"
            type="text"
          />

          <select
            name="select"
            className="select select-bordered w-full max-w-xs mb-0"
            required
          >
            <option value="10:30am - 11:00am">10:30am - 11:00am</option>
            <option value="11:00am - 11:30am">11:00am - 11:30am</option>
            <option value="11:30am - 12:00pm">11:30am - 12:00pm</option>
            <option value="12:00pm - 12:30pm">12:00pm - 12:30pm</option>
            <option value="12:30pm - 01:00pm">12:30pm - 01:00pm</option>
            <option value="03:00pm - 03:30pm">03:00pm - 03:30pm</option>
            <option value="03:30pm - 04:00pm">03:30pm - 04:00pm</option>
          </select>

          <input type="submit" className="modal-action btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
