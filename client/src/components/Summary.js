import React, { useEffect, useState } from "react";
import axios from "axios";
const Summary = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    //Axios call
     axios.get("http://localhost:5000/summary").then((res) => {
       console.log("successfully received ",res  );
       setResponse(res.data);
     });
  }, []);
  return (
    
    <div className="Summary">
      <h4>Summary of Feedback</h4>
      {console.log("Summary Response ",response )}
      
      <table style={{width:"100%" ,border:"1"}} >
        <tr>
          <th>Username</th>
          <th>Coursename</th> 
          <th>Rating</th>
          <th>Comments</th>
        </tr>
  
      {response.map((item, index) => (
          
          <tr key={item._id}>
            <td>{item.username}</td>
            <td>{item.coursename}</td>
            <td>{item.rating}</td>
            <td>{item.comments}</td>
          </tr> 
      ))}

      </table>
    </div>
 
  );
};

export default Summary;
