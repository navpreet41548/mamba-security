import React, { useState } from "react";
import { Link } from "react-router-dom";

const ManageSite = () => {
  const [sites, setSites] = useState([
    {
      siteName: "Site 1",
      clientName: "Navpreet Singh",
      address: "#410 KNN Bathinda",
      zipCode: "151001",
      guards: "10",
    },
    {
      siteName: "Site 2",
      clientName: "Navpreet Singh",
      address: "#410 KNN Bathinda",
      zipCode: "151001",
      guards: "10",
    },
    {
      siteName: "Site 3",
      clientName: "Navpreet Singh",
      address: "#410 KNN Bathinda",
      zipCode: "151001",
      guards: "10",
    },
  ]);

  return (
    <>
      <div className="tableHeader">
        <h1 className="tableHeaderHeading">Search Filter</h1>
        <div className="tableHeaderInfo">
          <input className={"headerInput"} placeholder="Search" />
          <Link to="/addSite" className="headerButton">
            <i class="bx bx-plus"></i> Post New Site
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-sm  table-light ">
          <thead>
            <tr className="py-2">
              <th>SITE NAME</th>
              <th>CLIENT NAME</th>
              <th>SITE ADDRESS</th>
              <th>SITE ZIP CODE</th>
              <th>GUARDS</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {sites.map((site, i) => (
              <tr key={i}>
                <td>{site.siteName}</td>
                <td>{site.clientName} </td>
                <td>{site.address}</td>
                <td>{site.zipCode}</td>
                <td>{site.guards}</td>
                <td>
                  <Link to={"/viewSite"} className="action">
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

export default ManageSite;
