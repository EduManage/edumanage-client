import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";

const CommentForm = ({ handleCommentForm }: any) => {
  const { user } = useContext(AuthContext)
  console.log(user);

  return (
    <>
      <div>
      {
        user?.uid ?   <p className="text-2xl mt-8 font-semibold">Leave a comment on this article as <span className="text-teal-500">{user?.displayName}</span> </p> :   <p className="text-2xl mt-8 font-semibold"><Link to='/login'><span className="text-teal-500">Log in to leave a comment</span></Link> </p>
      }
      </div>
      <form
        onSubmit={handleCommentForm}
        className='mt-4'>

        <div className="mb-5">
          {/* <label htmlFor="comment" className="block mb-2 font-bold text-gray-600">Comment</label> */}
          <input required type="text" name="comment" placeholder="Put in your comment." className="border shadow p-3 w-full rounded h-24" />
        </div>

       { user?.uid ? 
       <button className="bg-gradient-to-r  from-teal-300 to-blue-300 mt-2 px-8 py-2 shadow-teal-300/30 hover:shadow-teal-300/30 shadow-lg rounded-2xl text-xs text-white  font-medium hover:shadow-xl ease-in-out duration-300">
          Submit
        </button> : 
        <Link to='/login'><span className="text-teal-500">Log in to submit</span></Link>
        }
      </form>
    </>
  );
};

export default CommentForm;