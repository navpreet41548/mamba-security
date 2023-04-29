import React, { useState } from "react";
import "../styles/client/AddClient.css";

const AddClient = () => {
  const [primaryDetail, setPrimaryDetail] = useState({
    clientName: "",
    clientEmail: "",
    businessName: "",
    phoneNumber: "",
    zipCode: "",
    address: "",
  });

  const [billingDetail, setBillingDetail] = useState({
    fullName: "",
    address1: "",
    address2: "",
    billingDetailZipCode: "",
    city: "",
    country: "",
  });
  const [salesPersonDetail, setSalesPersonDetail] = useState({
    salesPersonName: "",
    salesPersonEmail: "",
    salesPersonPhoneNumber: "",
    contactPerson: "",
    commission: "",
  });
  const [loginDetail, setLoginDetail] = useState({
    loginEmail: "",
    loginPassword: "",
    portalAccess: "",
  });

  const [switchValue, setSwitchValue] = useState({
    portalAccess: false,
    clientAsPostSite: false,
  });

  const handlePrimaryDetail = (e) => {
    setPrimaryDetail({ ...primaryDetail, [e.target.name]: e.target.value });
  };
  const handleBillingDetail = (e) => {
    setBillingDetail({ ...billingDetail, [e.target.name]: e.target.value });
    console.log(billingDetail);
  };
  const handleSalesPersonDetail = (e) => {
    setSalesPersonDetail({
      ...salesPersonDetail,
      [e.target.name]: e.target.value,
    });
  };
  const handleLoginDetail = (e) => {
    setLoginDetail({ ...loginDetail, [e.target.name]: e.target.value });
  };

  const handelSwitch = (e) => {
    setSwitchValue({ ...switchValue, [e.target.name]: e.target.checked });
    console.log("added");
  };

  return (
    <>
      <div className={"formWrapper1"}>
        <div className="formContainer">
          <h1 className="formHeading">Primary Details</h1>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Client Name</h1>
            <input
              onChange={(e) => handlePrimaryDetail(e)}
              name="clientName"
              className="input"
              placeholder="Client Name"
            />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Client Email</h1>
            <input
              onChange={(e) => handlePrimaryDetail(e)}
              name="clientEmail"
              className="input"
              placeholder="example@gmail.com"
            />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Business Name</h1>
            <input
              onChange={(e) => handlePrimaryDetail(e)}
              name="businessName"
              className="input"
              placeholder="Business Name"
            />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Phone Number</h1>
            <input
              onChange={(e) => handlePrimaryDetail(e)}
              name="phoneNumber"
              className="input"
              placeholder="+1 (609) 988-44-11"
            />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Zip Code</h1>
            <input
              onChange={(e) => handlePrimaryDetail(e)}
              name="zipCode"
              className="input"
              placeholder="Zip Code"
            />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Address</h1>
            <input
              onChange={(e) => handlePrimaryDetail(e)}
              name="address"
              className="input"
              placeholder="Address"
            />
          </div>
        </div>
        <div className="formContainer">
          <h1 className="formHeading">Billing Details</h1>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Full Name</h1>
            <input
              onChange={(e) => handleBillingDetail(e)}
              name="fullName"
              className="input"
              placeholder="Full Name"
            />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Address 1</h1>
            <input
              onChange={(e) => handleBillingDetail(e)}
              name="address1"
              className="input"
              placeholder="Address 1"
            />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Address 2</h1>
            <input
              onChange={(e) => handleBillingDetail(e)}
              name="address2"
              className="input"
              placeholder="Address 2"
            />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Zip Code</h1>
            <input
              onChange={(e) => handleBillingDetail(e)}
              name="billingDetailZipCode"
              className="input"
              placeholder="Zip Code"
            />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">City</h1>
            <input
              onChange={(e) => handleBillingDetail(e)}
              name="city"
              className="input"
              placeholder="City"
            />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Country</h1>
            <input
              onChange={(e) => handleBillingDetail(e)}
              name="country"
              className="input"
              placeholder="Country"
            />
          </div>
        </div>
        <div className="formContainer">
          <h1 className="formHeading">Sales Person Details</h1>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Name</h1>
            <input
              onChange={(e) => handleSalesPersonDetail(e)}
              name="salesPersonName"
              className="input"
              placeholder="Name"
            />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Email</h1>
            <input
              onChange={(e) => handleSalesPersonDetail(e)}
              name="salesPersonEmail"
              className="input"
              placeholder="example@gmail.com"
            />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Phone Number</h1>
            <input
              onChange={(e) => handleSalesPersonDetail(e)}
              name="salesPersonPhoneNumber"
              className="input"
              placeholder="+1 (609) 988-44-11"
            />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Contact Peron</h1>
            <input
              onChange={(e) => handleSalesPersonDetail(e)}
              name="contactPerson"
              className="input"
              placeholder="Contact Person"
            />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Commission</h1>
            <input
              onChange={(e) => handleSalesPersonDetail(e)}
              name="commission"
              className="input"
              placeholder="Commission %"
            />
          </div>
        </div>
      </div>
      <div className={"formWrapper2"}>
        <div className="formContainer">
          <h1 className="formHeading">Client Login Details</h1>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Login Email</h1>
            <input
              onChange={(e) => handleLoginDetail(e)}
              name="loginEmail"
              className="input"
              placeholder="example@gmail.com"
            />
          </div>
          <div className={"inputWrapper"}>
            <h1 className="inputLabel">Login Password</h1>
            <input
              onChange={(e) => handleLoginDetail(e)}
              name="loginPassword"
              className="input"
              placeholder="password"
            />
          </div>
          <div className="toggleWrapper">
            <div class="checkbox form-check form-switch">
              <h1 className="inputLabel">Portal Access</h1>
              <input
                onChange={(e) => handelSwitch(e)}
                name="portalAccess"
                class="checkboxInput form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
            </div>
            <div class="checkbox form-check form-switch">
              <h1 className="inputLabel">Add Client as Post Site</h1>
              <input
                onChange={(e) => handelSwitch(e)}
                name="clientAsPostSite"
                class="checkboxInput form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
        </div>
        <div className="buttonContainer">
          <button className="button buttonPrimary">Add Client</button>
          <button className="button buttonSecondary">Cancel</button>
        </div>
      </div>
    </>
  );
};

export default AddClient;
