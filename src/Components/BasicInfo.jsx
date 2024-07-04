import React, { useState } from "react";
import { useBasicInfo } from "../Context/InfoProvider";
import { FaCirclePlus } from "react-icons/fa6";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./BasicInfo.css";

const BasicInfo = () => {
  const { basicInfo, dispatch } = useBasicInfo();
  const [nameValid, setNameValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      // Validate name here
      if (value.length <= 2) {
        setNameValid(false);
      } else {
        setNameValid(true);
      }
    }
    dispatch({ type: "SET_BASIC_INFO", payload: { ...basicInfo, [name]: value } });
  };

  const handlePhoneChange = (value) => {
    dispatch({ type: "SET_BASIC_INFO", payload: { ...basicInfo, phone: value } });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      dispatch({ type: "SET_IMAGE", payload: imageURL });

      return () => {
        URL.revokeObjectURL(imageURL);
      };
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="basic-info">
      <form>
        <div className="basic-info-header">
          <h2>Basic Info</h2>
          <p>Fill out your basic information.</p>
        </div>
        <div className="basic-info-body">
          <div className="basic-info-row">
            <div className="basic-info-col">
              <div className="form-group">
                <label htmlFor="name">
                  Full Name{" "}
                  {!nameValid && <span className="required-asterisk">*</span>}
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="name"
                  value={basicInfo.name}
                  name="name"
                  placeholder="Full Name"
                  className={!nameValid ? "invalid" : ""}
                />
                {!nameValid && (
                  <span className="validation-message">
                    Full Name should not be more than 2 characters.
                  </span>
                )}
              </div>
            </div>
            <div className="basic-info-col">
              <label htmlFor="image" className="upload-label">
                <FaCirclePlus className="upload-icon" /> Upload Image
                <input
                  onChange={handleImageChange}
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </label>
              {basicInfo.image && (
                <img
                  src={basicInfo.image}
                  alt="Profile Image"
                  className="profile-image"
                />
              )}
            </div>
          </div>

          <div className="basic-info-row">
            <div className="basic-info-col">
              <div className="form-group">
                <label htmlFor="profession">
                  Profession <span className="required-asterisk">*</span>
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="profession"
                  value={basicInfo.profession}
                  name="profession"
                  placeholder="Profession"
                  required
                />
              </div>
            </div>
            <div className="basic-info-col">
              <div className="form-group">
                <label htmlFor="email">
                  Email <span className="required-asterisk">*</span>
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  id="email"
                  value={basicInfo.email}
                  name="email"
                  placeholder="Email"
                  required
                />
                {!validateEmail(basicInfo.email) && (
                  <span className="validation-message">
                    Please enter a valid email address.
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="address">
              Address <span className="required-asterisk">*</span>
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="address"
              value={basicInfo.address}
              name="address"
              placeholder="Address"
              required
            />
          </div>

          <div className="basic-info-row">
            <div className="basic-info-col">
              <div className="form-group">
                <label htmlFor="barangay">
                  Barangay <span className="required-asterisk">*</span>
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="barangay"
                  value={basicInfo.barangay}
                  name="barangay"
                  placeholder="Barangay"
                  required
                />
              </div>
            </div>
            <div className="basic-info-col">
              <div className="form-group">
                <label htmlFor="city">
                  City <span className="required-asterisk">*</span>
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="city"
                  value={basicInfo.city}
                  name="city"
                  placeholder="City"
                  required
                />
              </div>
            </div>
          </div>

          <div className="basic-info-row">
            <div className="basic-info-col">
              <div className="form-group">
                <label htmlFor="phone">
                  Phone <span className="required-asterisk">*</span>
                </label>
                <PhoneInput
                  country={"us"}
                  value={basicInfo.phone}
                  onChange={handlePhoneChange}
                  inputProps={{
                    name: "phone",
                    required: true,
                    className: "form-control",
                  }}
                />
              </div>
            </div>
            <div className="basic-info-col">
              <div className="form-group">
                <label htmlFor="zip">
                  Zip Code <span className="required-asterisk">*</span>
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="zip"
                  value={basicInfo.zip}
                  name="zip"
                  placeholder="Zip Code"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BasicInfo;
