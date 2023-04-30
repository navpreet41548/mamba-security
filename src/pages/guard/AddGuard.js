import React, { useState } from "react";
import "../styles/guard/AddGuard.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AddGuard = () => {
  const [formData, setFormData] = useState({
    guardName: "",
    guardEmail: "",
    guardContact: "",
    guardPassword: "",
    currentSite: "",
  });

  const [licenseDetail, setLicenseDetail] = useState({
    licenseName: "",
    issueDate: "",
    expDate: "",
  });
  const [license, setLicense] = useState([]);

  const addLicense = () => {
    if (
      licenseDetail.licenseName === "" ||
      licenseDetail.issueDate === "" ||
      licenseDetail.expDate === ""
    ) {
      return toast.warn("Every License Filed is Required", {
        position: "top-right",
        autoClose: 5000,
      });
    }

    const index = license.indexOf(licenseDetail);
    console.log(index);
    console.log(license);
    setLicense([...license, licenseDetail]);
    setLicenseDetail({
      licenseName: "",
      issueDate: "",
      expDate: "",
    });
  };

  const removeLicense = (obj) => {
    setLicense((oldValues) => {
      return oldValues.filter((license) => license !== obj);
    });
  };

  const handleLicenseChange = (e) => {
    setLicenseDetail({ ...licenseDetail, [e.target.name]: e.target.value });
  };

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
            <h1 className="inputLabel">Guard Email </h1>
            <input className="input" placeholder="example@gmail.com" />
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
            <h1 className="inputLabel">Add License</h1>
            <div className="subInputWrapper">
              <div className="inputLabelContainer">
                <label for="name">License Name</label>
                <input
                  value={licenseDetail.licenseName}
                  onChange={(e) => handleLicenseChange(e)}
                  name="licenseName"
                  for="name"
                  className="input subInput"
                  placeholder="License Name"
                />
              </div>
              <div className="inputLabelContainer">
                <label for="issueDate">Issue Date</label>
                <input
                  value={licenseDetail.issueDate}
                  onChange={(e) => handleLicenseChange(e)}
                  name="issueDate"
                  id="issueDate"
                  type="date"
                  className="input subInput"
                  placeholder="Issue Date"
                />
              </div>
              <div className="inputLabelContainer">
                <label for="expDate">Exp Date</label>
                <input
                  value={licenseDetail.expDate}
                  onChange={(e) => handleLicenseChange(e)}
                  name="expDate"
                  id="expDate"
                  type="date"
                  className="input subInput"
                  placeholder="Exp. Date"
                />
              </div>
              <div onClick={addLicense} className="subInputIcon">
                <i class="bx bx-check"></i>
              </div>
            </div>
          </div>
          <div className="listContainer">
            {license.map((item, i) => (
              <div className="list">
                <h4 className="listName licenseListName">{item.licenseName}</h4>
                <h4 className="listName licenseListName">{item.issueDate}</h4>
                <h4 className="listName licenseListName">{item.expDate}</h4>
                <div
                  onClick={() => removeLicense(item)}
                  className="subInputIcon"
                >
                  <i class="bx bx-x"></i>
                </div>
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
          <button className="button buttonPrimary">Add Guard</button>
          <button className="button buttonSecondary">Cancel</button>
        </div>
      </div>
    </>
  );
};

export default AddGuard;
