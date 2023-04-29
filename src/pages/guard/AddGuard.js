import React from "react";
import "../styles/guard/AddGuard.css";

const AddGuard = () => {
  return (
    <>
      <div className="formWrapper">
        <div className="formContainer">
          <h1 className="formHeading">Guard Details</h1>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Guard Name</h1>
            <input className="input" placeholder="Site Name" />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Guard Email Address</h1>
            <input className="input" placeholder="Address" />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Guard Contact</h1>
            <input className="input" placeholder="+1 (609) 2394 90" />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Guard Password</h1>
            <input className="input" placeholder="238940" />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Current Site</h1>
            <select className="input select" placeholder="Select Site">
              <option>Site 1</option>
              <option>Site 2</option>
            </select>
          </div>
          <div className={"inputWrapper "}>
            <h1 className="inputLabel">Add Guard</h1>
            <div className="subInputWrapper">
              <input className="input subInput" placeholder="License Name" />
              <input className="input subInput" placeholder="Issue Date" />
              <input className="input subInput" placeholder="Exp. Date" />
              <div className="subInputIcon">
                <i class="bx bx-check"></i>
              </div>
            </div>
          </div>
          <div className="listContainer">
            <div className="list">
              <h4 className="listName">License 1</h4>
              <h4 className="listAction">Remove</h4>
            </div>
            <div className="list">
              <h4 className="listName">License 2</h4>
              <h4 className="listAction">Remove</h4>
            </div>
          </div>
          <div class="checkbox form-check form-switch">
            <h1 className="inputLabel">Active</h1>
            <input
              class="checkboxInput form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
        <div className="buttonContainer">
          <button className="button buttonPrimary">Add Guard</button>
          <button className="button buttonSecondary">Cancel</button>
        </div>
      </div>
    </>
  );
};

export default AddGuard;
