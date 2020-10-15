import React, { useState } from "react";
import { addEdu, updateAbout } from "../../components/actions/taskActions";
import { connect } from "react-redux";

const Form = ({ addEdu, data, uid, updateAbout }) => {
  const [instiname, setInstiname] = useState("");
  const [major, setMajor] = useState("");
  const [location, setLocation] = useState("");
  const [summary, setSummary] = useState("");  
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const handleChange = (e) => {
    switch (e.target.id) {
      case "instiname":
        setInstiname(e.target.value);
        return;
      case "major":
        setMajor(e.target.value);
        return;
      case "location":
        setLocation(e.target.value);
        return;
      case "summary":
        setSummary(e.target.value);
        return;
      case "endDate":
        setEndDate(e.target.value)
        return
      case "startDate":
        setStartDate(e.target.value)
        return
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ instiname, major, location, summary });
    addEdu({ instiname, major, location, summary, startDate, endDate });
    setInstiname("");
    setLocation("");
    setMajor("");
    setSummary("");
    setStartDate("")
    setEndDate("")
  };
  return (
    <form
      className="container text border border-light bg-light my-3 p-3"
      autoComplete="off"
    >
      <div className="form-group">
        <label htmlFor="instiname">
          <h4>Enter Institution name </h4>
        </label>
        <input
          type="text"
          className="form-control"
          id="instiname"
          value={instiname}
          onChange={handleChange}
        />
      </div>

      <div className="form-inline my-1">
        <div className="form-group mb-2">
          <label htmlFor="location">
            <h4>Start Year </h4>
          </label>
          <input
            type="text"
            className="form-control mx-2"
            id="startDate"
            style={{width: "30%"}}
            value={startDate}
            onChange={handleChange}
          />
        </div>
    
      <div className="form-group mb-2">
        <label htmlFor="location">
          <h4>End Year </h4>
        </label>
        <input
          type="text"
          className="form-control mx-2"
          id="endDate"
          style={{width: "30%"}}
          value={endDate}
          onChange={handleChange}
        />
      </div>
      </div>
      <div className="form-group">
        <label htmlFor="location">
          <h4>Location </h4>
        </label>
        <input
          type="text"
          className="form-control"
          id="location"
          style={{width: "75%"}}
          value={location}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="major">
          <h4>Degree Major </h4>
        </label>
        <input
          type="text"
          className="form-control"
          id="major"
          style={{width: "75%"}}
          value={major}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="summary">
          <h4>Achievements</h4>
        </label>
        <textarea
          className="form-control"
          id="summary"
          rows="4"
          value={summary}
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  //   console.log(state);
  const data = state.firestore.ordered.edu;
  const uid = state.firebase.auth.uid;
  return {
    data,
    uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEdu: (task) => dispatch(addEdu(task)),
    // updateAbout: (task) => dispatch(updateAbout(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
// export default Form;
