import React from "react";
import { Link } from "react-router-dom";
import "../styles/guard/ViewGuard.css";

const ViewGuard = () => {
  return (
    <>
      <div className={"form1"}>
        <div className="guardInfoHeader">
          <div className="formHeaderProfile">NS</div>
          <div className="formHeaderProfileInfo">
            <div className="formHeaderProfileInfoPart1">
              <h3 className="guardHeaderName">Navpreet Singh</h3>
              <div className="guardInfoContainer">
                <h3>
                  <i class="bx bxs-phone"></i> +1 (609) 300-5602
                </h3>
                <h3>
                  <i class="bx bx-envelope"></i> contact@navwebdev.in
                </h3>
                <h3>
                  <i class="bx bxs-location-plus"></i> #410 Kamla Nehru Nagar
                  Bathinda
                </h3>
              </div>
            </div>
            <div className="formHeaderProfileInfoPart2 ">
              <i class="bx bx-dots-vertical-rounded"></i>
            </div>
          </div>
        </div>
        <div className={"subHeader"}>
          <h1 className="formSubHeading">Schedule</h1>
          <Link className="formButton">ADD SCHEDULE</Link>
        </div>
        <div className="jobDutiesListContainer">
          <div className="jobDutiesList">
            <div className="jobDutiesListPart1">
              <i class="bx bxs-checkbox-checked"></i>
              <p className="jobDutiesListText">
                {" "}
                <span className="big">1 Apr 2023</span>
                Mamba MMA (2722 Allwood St, Abbotsford, BC V2T 4H8, Canada)
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
                <span className="big">3 Apr 2023</span> Mamba MMA (2722 Allwood
                St, Abbotsford, BC V2T 4H8, Canada)
              </p>
            </div>
            <div className="jobDutiesListPart2 ">
              <i class="bx bx-dots-vertical-rounded"></i>
            </div>
          </div>
        </div>
      </div>
      <div className={"form1"}>
        <div className="formHeader">
          <h1 className="formSubHeading">License & Certifications</h1>
          <Link className="formButton">ADD LICENSE</Link>
        </div>

        <div className="shiftListContainer">
          <div className="shiftList">
            <div className="shiftListPart1">
              <p className="shiftListText licenseListText">
                Security Worker License{" "}
                <span className="timeDiff">E1268162</span>{" "}
              </p>
            </div>
            <div className="instructionListPart2 licenseListPart2">
              <p className="shiftListText licenseListText">
                Expires on 15 Apr, 2023
              </p>
              <i class="bx bx-dots-vertical-rounded"></i>
            </div>
          </div>
          <div className="shiftList">
            <div className="shiftListPart1">
              <p className="shiftListText licenseListText">
                Security Worker License{" "}
                <span className="timeDiff">E1268162</span>{" "}
              </p>
            </div>
            <div className="instructionListPart2 licenseListPart2">
              <p className="shiftListText licenseListText">
                Expires on 15 Apr, 2023
              </p>
              <i class="bx bx-dots-vertical-rounded"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewGuard;
