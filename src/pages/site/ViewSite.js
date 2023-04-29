import React from "react";
import { Link } from "react-router-dom";
import "../styles/site/ViewSite.css";

const ViewSite = () => {
  return (
    <>
      <div className={"form1"}>
        <div className="formHeader">
          <h1 className="formHeading">Site Info</h1>
          <h2 className="siteName">Site Name</h2>
        </div>
        <div className={"subHeader"}>
          <h1 className="formSubHeading">Site Instructions</h1>
          <Link className="formButton">ADD SITE INSTRUCTION</Link>
        </div>
        <div className="instructionListContainer">
          <div className="instructionList">
            <div className="instructionListPart1">
              <i class="bx bx-circle"></i>
              <p className="instructionListText">Bring Identity Card</p>
            </div>
            <div className="instructionListPart2">
              <i class="bx bx-dots-vertical-rounded"></i>
            </div>
          </div>
          <div className="instructionList">
            <div className="instructionListPart1">
              <i class="bx bx-circle"></i>
              <p className="instructionListText">This is testing</p>
            </div>
            <div className="instructionListPart2">
              <i class="bx bx-dots-vertical-rounded"></i>
            </div>
          </div>
        </div>
        <div className={"subHeader"}>
          <h1 className="formSubHeading">Job Duties</h1>
          <Link className="formButton">ADD JOB DUTY</Link>
        </div>
        <div className="jobDutiesListContainer">
          <div className="jobDutiesList">
            <div className="jobDutiesListPart1">
              <i class="bx bxs-checkbox-checked"></i>
              <p className="jobDutiesListText">
                {" "}
                <span className="big">Job Duty Name</span> Regular Interval:
                30min
              </p>
            </div>
            <div className="jobDutiesListPart2">
              <i class="bx bx-dots-vertical-rounded"></i>
            </div>
          </div>
          <div className="jobDutiesList">
            <div className="jobDutiesListPart1">
              <i class="bx bxs-checkbox-checked"></i>
              <p className="jobDutiesListText">
                {" "}
                <span className="big">Job Duty 2</span> Start of the Shift :
                30min
              </p>
            </div>
            <div className="jobDutiesListPart2">
              <i class="bx bx-dots-vertical-rounded"></i>
            </div>
          </div>
        </div>
      </div>
      <div className={"form1"}>
        <div className="formHeader">
          <h1 className="formHeading">Shifts</h1>
        </div>
        <div className={"subHeader"}>
          <select className="dateSelect">
            <option>Apr 26, 2023</option>
            <option>Apr 27, 2023</option>
            <option>Apr 28, 2023</option>
          </select>
          <Link className="formButton">ADD NEW SHIFT</Link>
        </div>
        <div className="shiftListContainer">
          <div className="shiftList">
            <div className="shiftListPart1">
              <p className="shiftListText">
                Start Time <span className="timeDiff">00:30</span>{" "}
              </p>
              <p className="shiftListText">
                End Time <span className="timeDiff">13:30</span>{" "}
              </p>
              <p className="shiftListText">
                Required <span className="timeDiff">4</span>{" "}
              </p>
            </div>
            <div className="shiftListPart2">
              <i class="bx bx-dots-vertical-rounded"></i>
            </div>
          </div>
          <div className="shiftList">
            <div className="shiftListPart1">
              <p className="shiftListText">
                Start Time <span className="timeDiff">14:00</span>{" "}
              </p>
              <p className="shiftListText">
                End Time <span className="timeDiff">21:00</span>{" "}
              </p>
              <p className="shiftListText">
                Required <span className="timeDiff">1</span>{" "}
              </p>
            </div>
            <div className="shiftListPart2">
              <i class="bx bx-dots-vertical-rounded"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewSite;
