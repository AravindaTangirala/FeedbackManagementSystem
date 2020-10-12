import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "axios";

const Comments = (props) => {
  const [comments, setComments] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    console.log("comments " ,comments)
    axios
      .post("http://localhost:5000/summary", {
        username: props.name,
        coursename: props.course,
        rating: props.rating.rating,
        comments,
      })
      .then((res) => {
        console.log("successfully posted");
        console.log(history);
        history.push("/summary")


      })
      .catch((err) => {
        console.log("coming from comments.js handle submit",err);
        ///res.status(500).json({ msg: "Error Occurred" });
      });
  };
  return (
    <div className="comments">
    
      <div className="confirm__container">
        <h4>Please provide additional comments</h4>
        <label>Name:</label>
        <input style={{
                  fontSize: "15px",
                  fontFamily: "Cursive,sans-serif,Gugi",
                  borderRadius: "10px",
                  marginLeft: "30px",
                  marginTop: "25px",
                }} type="text" value={props.name} />
        <br />
        <label>Course Name:</label>
        <input style={{
                  fontSize: "15px",
                  fontFamily: "Cursive,sans-serif,Gugi",
                  borderRadius: "10px",
                  marginLeft: "30px",
                  marginTop: "25px",
                }}type="text" value={props.course} />
        <br />
        <label>Rating:</label>
        <input style={{
                  fontSize: "15px",
                  fontFamily: "Cursive,sans-serif,Gugi",
                  borderRadius: "10px",
                  marginLeft: "30px",
                  marginTop: "25px",
                }}type="text" value={props.rating.rating} />
        <br />
        <label>Additional Comments:</label>
        <input style={{
                  fontSize: "15px",
                  fontFamily: "Cursive,sans-serif,Gugi",
                  borderRadius: "10px",
                  marginLeft: "30px",
                  marginTop: "25px",
                }}
          type="text"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <br />
        {/* <Link to="/summary"> */}
        <input type="submit" onClick={handleSubmit} value="Submit" />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Comments;
