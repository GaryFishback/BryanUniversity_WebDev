import React, { useState } from "react";

const initInputs = {
  title: "",
  description: "",
  imgUrl: "",
};

export default function IssueForm(props) {
    const {addIssue, errMsg} = props
    const [inputs, setInputs] = useState(initInputs);
    
    let simpleErrArray = [];
  if (errMsg)  {console.log(errMsg)
        let simpleErr = errMsg.split("Path")
     
        for (let i = 0; i < simpleErr.length; i++) {
            if (errMsg.split("Path")[0].substring(0, 25) === "Issue validation failed: " && i > 0) {
                //console.log(errMsg.split("Path")[i].split('.')[0])
                //console.log(errMsg.split("Path")[0].substring(0,25))
                simpleErrArray.push(errMsg.split("Path")[i].split('.')[0])
            }
        }
    }
    //console.log(simpleErrArray)
  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
      addIssue(inputs)
      setInputs(initInputs)
  }

  const { title, description } = inputs;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="Description"
      />
          {// <input
      //  type="text"
      //  name="imgUrl"
      //  value={imgUrl}
      //  onChange={handleChange}
              //  placeholder="Image Url"/>
          }
          <button>Add Issue</button>
          {simpleErrArray.map(errString => {
              return (< p style={{ color: "red", fontWeight: "bold" }}>{errString}</p>
              )
          }
          )}
             
    </form>
  );
}
