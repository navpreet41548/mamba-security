import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/commonStyles/table.css";
import "../styles/client/ManageClients.css";

const ManageClients = () => {
  const [clients, setClients] = useState();

  useEffect(() => {
    setClients([
      {
        name: "Client 1",
        businessName: "Business Name Example 1",
        contactPerson: "Navpreet Singh",
        email: "contact@navwebdev.in",
        phoneNumber: "9855224592",
        site: [{ name: "Site 1" }, { name: "Site 2" }, { name: "Site 3" }],
        portalAccess: true,
      },
      {
        name: "Client 2",
        businessName: "Business Name Example 2",
        contactPerson: "Navpreet Singh",
        email: "contact@navwebdev.in",
        phoneNumber: "9855224592",
        site: [{ name: "Site 1" }, { name: "Site 2" }, { name: "Site 3" }],
        portalAccess: true,
      },
      {
        name: "Client 3",
        businessName: "Business Name Example 3",
        contactPerson: "Navpreet Singh",
        email: "contact@navwebdev.in",
        phoneNumber: "9855224592",
        site: [{ name: "Site 1" }, { name: "Site 2" }, { name: "Site 3" }],
        portalAccess: false,
      },
    ]);
  }, []);

  return (
    <>
      <div className="tableHeader">
        <h1 className="tableHeaderHeading">Search Filter</h1>
        <div className="tableHeaderInfo">
          <input className={"headerInput"} placeholder="Search" />
          <Link to="/addClient" className="headerButton">
            <i class="bx bx-plus"></i> Add New Client
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-sm  table-light ">
          <thead>
            <tr className="py-2">
              <th>NAME</th>
              <th>BUSINESS NAME</th>
              <th>CONTACT PERSON</th>
              <th>EMAIL</th>
              <th>PHONE NUMBER</th>
              <th>SITES</th>
              <th>PORTAL ACCESS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {clients &&
              clients.map((client, i) => (
                <tr key={i}>
                  <td>{client.name}</td>
                  <td>{client.businessName}</td>
                  <td>{client.contactPerson}</td>
                  <td>{client.email}</td>
                  <td>{client.phoneNumber}</td>
                  <td>
                    {client.site[0].name}, {client.site[1].name}
                  </td>
                  {client.portalAccess ? <td>Granted</td> : <td>Not</td>}
                  <td>
                    {/* <div className="action">
                    <i class="bx bx-show"></i>
                  </div> */}
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

export default ManageClients;
