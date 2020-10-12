import React, { useState } from "react";
import axios from "axios";
import team from "../team.png";
import Comments from "./Comments";

const Ratingfeedback = () => {
  const [username, setUserName] = useState("");
  const [coursename, setCoursename] = useState("");
  const [rating, setRating] = useState("");
  const [toggleConfirm, setToggleConfirm] = useState(false);

  // const handleChange = (e) => {
  //   console.log(e.target.name);
  //   console.log(e.target.value);
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  const handleSubmit = () => {
    // if (this.state.username != "" && this.state.coursename != "") {
    //   axios.post("http://localhost:5000/feedback", this.state).then((res) => {
    //     console.log("successfully posted");
    //     this.setState({ username: "", coursename: "" });
    //   });
    //   window.location = "/";
    // }
    console.log("Submit clicked====>");
    // this.setState({ toggleConfirm: true });
    setToggleConfirm(true);
  };
  return (
    <>
      {toggleConfirm ? (
        <Comments name={username} course={coursename} rating={rating} />
      ) : (
        <div className="row text-center">
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <p>Please input Username</p>
              <input
                required
                onChange={(e) => setUserName(e.target.value)}
                name="username"
                value={username}
                style={{
                  fontSize: "15px",
                  fontFamily: "Cursive,sans-serif,Gugi",
                  borderRadius: "10px",
                  marginLeft: "100px",
                  marginTop: "15px",
                }}
                placeholder="username"
                className="form-control"
                name="username"
              />
              <p>Please input Coursename</p>
              <input
                required
                onChange={(e) => setCoursename(e.target.value)}
                name="coursename"
                value={coursename}
                style={{
                  fontSize: "15px",
                  fontFamily: "Cursive,sans-serif,Gugi",
                  borderRadius: "10px",
                  marginLeft: "100px",
                  marginTop: "15px",
                }}
                placeholder="coursename"
                className="form-control"
              />
              <p>Please Rate your Course</p>
              <input
                onClick={(e) => setRating({ rating: "Excellent" })}
                type="radio"
                name="rating"
              />
              <label>Excellent</label>
              <input
                onClick={(e) => setRating({ rating: "Good" })}
                type="radio"
                name="rating"
              />
              <label>Good</label>
              <input
                onClick={(e) => setRating({ rating: "Average" })}
                type="radio"
                name="rating"
              />
              <label>Average</label>
              <input
                onClick={(e) => setRating({ rating: "Fair" })}
                type="radio"
                name="rating"
              />
              <label>Fair</label>
              <input
                onClick={(e) => setRating({ rating: "Poor" })}
                type="radio"
                name="rating"
              />
              <label>Poor</label>
              <p>
                <button
                  style={{
                    borderRadius: "10px",
                    fontSize: "19px",
                    fontFamily: "Cursive,sans-serif,Gugi",
                    outline: "none",
                    color: "white",
                    backgroundColor: "#000066",
                    marginLeft: "100px",
                    marginTop: "20px",
                    width: "435px",
                  }}
                  className="btn"
                >
                  SUBMIT
                </button>
              </p>
            </form>
          </div>
          <div className="col-md-8">
            <img src={team} />
          </div>
        </div>
      )}
    </>
  );
};
//
export default Ratingfeedback;

// class Ratingfeedback extends React.Component {
//   state = {
//     username: "",
//     coursename: "",
//     toggleConfirm: false,
//     rating: "",
//   };
//   handleChange = (e) => {
//     console.log(e.target.name);
//     console.log(e.target.value);
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   handleSubmit = () => {
//     // if (this.state.username != "" && this.state.coursename != "") {
//     //   axios.post("http://localhost:5000/feedback", this.state).then((res) => {
//     //     console.log("successfully posted");
//     //     this.setState({ username: "", coursename: "" });
//     //   });
//     //   window.location = "/";
//     // }
//     console.log("Submit clicked====>");
//     this.setState({ toggleConfirm: true });
//   };
//   render() {
//     console.log("Rating====>");
//     return (
//       <>
//         {this.state.toggleConfirm ? (
//           <Comments
//             name={this.state.username}
//             course={this.state.coursename}
//             rating={this.state.rating}
//           />
//         ) : (
//           <div class="row text-center">
//             <div class="col-md-4">
//               <form onSubmit={() => this.handleSubmit()}>
//                 <p>Please input Username</p>
//                 <input
//                   required
//                   onChange={(e) => this.handleChange(e)}
//                   name="username"
//                   value={this.state.username}
//                   style={{
//                     fontSize: "15px",
//                     fontFamily: "Cursive,sans-serif,Gugi",
//                     borderRadius: "10px",
//                     marginLeft: "100px",
//                     marginTop: "15px",
//                   }}
//                   placeholder="username"
//                   class="form-control"
//                   name="username"
//                 />
//                 <p>Please input Coursename</p>
//                 <input
//                   required
//                   onChange={(e) => this.handleChange(e)}
//                   name="coursename"
//                   value={this.state.coursename}
//                   style={{
//                     fontSize: "15px",
//                     fontFamily: "Cursive,sans-serif,Gugi",
//                     borderRadius: "10px",
//                     marginLeft: "100px",
//                     marginTop: "15px",
//                   }}
//                   placeholder="coursename"
//                   class="form-control"
//                 />
//                 <p>Please Rate your Course</p>
//                 <input
//                   onClick={(e) => this.setState({ rating: "Excellent" })}
//                   type="radio"
//                   name="rating"
//                 />
//                 <label>Excellent</label>
//                 <input
//                   onClick={(e) => this.setState({ rating: "Good" })}
//                   type="radio"
//                   name="rating"
//                 />
//                 <label>Good</label>
//                 <input
//                   onClick={(e) => this.setState({ rating: "Average" })}
//                   type="radio"
//                   name="rating"
//                 />
//                 <label>Average</label>
//                 <input
//                   onClick={(e) => this.setState({ rating: "Fair" })}
//                   type="radio"
//                   name="rating"
//                 />
//                 <label>Fair</label>
//                 <input
//                   onClick={(e) => this.setState({ rating: "Poor" })}
//                   type="radio"
//                   name="rating"
//                 />
//                 <label>Poor</label>
//                 <p>
//                   <button
//                     style={{
//                       borderRadius: "10px",
//                       fontSize: "19px",
//                       fontFamily: "Cursive,sans-serif,Gugi",
//                       outline: "none",
//                       color: "white",
//                       backgroundColor: "#000066",
//                       marginLeft: "100px",
//                       marginTop: "20px",
//                       width: "435px",
//                     }}
//                     class="btn"
//                   >
//                     SUBMIT
//                   </button>
//                 </p>
//               </form>
//             </div>
//             <div class="col-md-8">
//               <img src={team} />
//             </div>
//           </div>
//         )}
//       </>
//     );
//   }
// }
// export default Ratingfeedback;
