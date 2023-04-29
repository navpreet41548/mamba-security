import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageGuard = () => {
  const [guards, setGuards] = useState();

  useEffect(() => {
    setGuards([
      {
        guardName: "Guard 1",
        email: "example@gmail.com",
        phoneNumber: "+1 (609) 3948 392",
        currentSite: "Site Name",
        license: [{ licenseName: "license 1" }, { licenseName: "license 2" }],
        status: "Active",
      },
      {
        guardName: "Guard 2",
        email: "example@gmail.com",
        phoneNumber: "+1 (609) 3948 392",
        currentSite: "Site Name",
        license: [{ licenseName: "license 1" }, { licenseName: "license 2" }],
        status: "Active",
      },
    ]);
  }, []);
  return (
    <>
      <div className="tableHeader">
        <h1 className="tableHeaderHeading">Search Filter</h1>
        <div className="tableHeaderInfo">
          <input className={"headerInput"} placeholder="Search" />
          <Link to="/addGuard" className="headerButton">
            <i class="bx bx-plus"></i> New Guard
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-sm  table-light ">
          <thead>
            <tr className="py-2">
              <th>GUARD NAME</th>
              <th>EMAIL</th>
              <th>CONTACT</th>
              <th>CURRENT SITE</th>
              <th>LICENSE</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {guards &&
              guards.map((guard, i) => (
                <tr>
                  <td>{guard.guardName}</td>
                  <td>{guard.email}</td>
                  <td> {guard.phoneNumber}</td>
                  <td> {guard.currentSite} </td>
                  <td>
                    {" "}
                    {guard.license[0].licenseName},{" "}
                    {guard.license[1].licenseName}{" "}
                  </td>
                  <td>{guard.status}</td>
                  <td>
                    <Link to="/viewGuard" className="action">
                      <i class="bx bx-show"></i>
                    </Link>
                    <div className="action">
                      <i class="bx bx-pencil"></i>
                    </div>
                    <div className="action">
                      <i class="bx bx-trash"></i>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageGuard;
