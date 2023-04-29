import React, { useEffect, useState } from "react";
import "../styles/site/AddSite.css";

const AddSite = () => {
  // const [siteDetail, setSiteDetail] = useState({
  //   siteName: "",
  //   siteAddress: "",
  //   siteZipCode: "",
  //   siteInstruction: "",
  //   client: "",
  //   guards: "",
  // })

  const [formData, setFormData] = useState({
    siteName: "",
    siteAddress: "",
    siteZipCode: "",
  });

  const [siteInstruction, setSiteInstruction] = useState([]);

  const [clients, setClients] = useState();

  const [guards, setGuards] = useState();

  const [selectedGuards, setSelectedGuards] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSiteInstruction = (e) => {
    setSiteInstruction(e.target.value.split(","));
    console.log(siteInstruction);
  };

  const handleSelect = (e) => {
    let value = e.target.value;
    value = value.split(",");

    const obj = { name: value[0], id: value[1] };

    var index = selectedGuards.indexOf(obj);
    if (index === -1) {
      // selected.push(text);
      setSelectedGuards([...selectedGuards, obj]);
    } else {
      setSelectedGuards((oldValues) => {
        return oldValues.filter((selectedGuards) => selectedGuards !== obj);
      });
    }

    console.log(selectedGuards);
  };

  const removeGuard = (obj) => {
    setSelectedGuards((oldValues) => {
      return oldValues.filter((selectedGuards) => selectedGuards !== obj);
    });
  };

  useEffect(() => {
    setClients([
      { _id: "1213", clientName: "Client 1" },
      { _id: "1214", clientName: "Client 2" },
      { _id: "1215", clientName: "Client 3" },
      { _id: "1216", clientName: "Client 4" },
    ]);

    setGuards([
      { guardName: "Guard 1", _id: "1234" },
      { guardName: "Guard 2", _id: "5678" },
      { guardName: "Guard 3", _id: "9101" },
      { guardName: "Guard 5", _id: "1121" },
      { guardName: "Guard 6", _id: "3141" },
      { guardName: "Guard 7", _id: "5161" },
      { guardName: "Guard 8", _id: "7181" },
    ]);
  }, []);

  return (
    <>
      <div className="formWrapper">
        <div className="formContainer">
          <h1 className="formHeading">Site Details</h1>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Site Name</h1>
            <input
              onChange={(e) => handleChange(e)}
              name="siteName"
              className="input"
              placeholder="Site Name"
            />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Site Address</h1>
            <input
              onChange={(e) => handleChange(e)}
              name="siteAddress"
              className="input"
              placeholder="Address"
            />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Site Zip Code</h1>
            <input
              onChange={(e) => handleChange(e)}
              name="siteZipCode"
              className="input"
              placeholder="Zip Code"
            />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Site Instruction</h1>
            <textarea
              onChange={(e) => handleSiteInstruction(e)}
              className="input textarea"
              placeholder="Site Instruction"
            ></textarea>
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Client</h1>
            <select className="input select" placeholder="Select Client">
              {clients.map((client, i) => (
                <option value={client._id}>{client.clientName}</option>
              ))}
            </select>
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Add Guard</h1>
            <select
              onChange={(e) => handleSelect(e)}
              className="input select"
              placeholder="Select Guard"
            >
              {guards.map((guard, i) => (
                <option
                  key={i}
                  value={`${guard.guardName}, ${guard._id}`}
                  data-guardName={guard.guardName}
                >
                  {guard.guardName}
                </option>
              ))}
            </select>
          </div>
          <div className="listContainer">
            {selectedGuards.map((selectedGuard, i) => (
              <div className="list">
                <h4 className="listName">{selectedGuard.name}</h4>
                <h4
                  onClick={() => removeGuard(selectedGuard)}
                  className="listAction"
                >
                  Remove
                </h4>
              </div>
            ))}
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
          <button className="button buttonPrimary">Post Site</button>
          <button className="button buttonSecondary">Cancel</button>
        </div>
      </div>
    </>
  );
};

export default AddSite;
