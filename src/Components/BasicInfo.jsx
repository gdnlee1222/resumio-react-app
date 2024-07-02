import { useBasicInfo } from "../Context/InfoProvider";
import { FaCirclePlus } from "react-icons/fa6"; // Import icon from react-icons
import "./BasicInfo.css";

const BasicInfo = () => {
  const { basicInfo, dispatch } = useBasicInfo();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_BASIC_INFO", payload: {...basicInfo, [name]: value } });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      dispatch({ type: "SET_IMAGE", payload: imageURL });

      // Revoke the object URL to free up memory when the component unmounts
      return () => {
        URL.revokeObjectURL(imageURL);
      };
    }
  };

  return (
    <div className="basic-info">
      <div className="basic-info-header">
        <h2>Basic Info</h2>
        <p>Include at least your email and phone number..</p>
      </div>
      <div className="basic-info-body">
        <div className="basic-info-row">
          <div className="basic-info-col">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                onChange={handleChange}
                type="text"
                id="name"
                value={basicInfo.name}
                name="name"
                placeholder="Full Name"
              />
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
              />
            </label>
            {basicInfo.image && (
              <img src={basicInfo.image} alt="Profile Image" className="profile-image" />
            )}
          </div>
        </div>

        <div className="basic-info-row">
          <div className="basic-info-col">
            <div className="form-group">
              <label htmlFor="profession">Profession</label>
              <input
                onChange={handleChange}
                type="text"
                id="profession"
                value={basicInfo.profession}
                name="profession"
                placeholder="Profession"
              />
            </div>
          </div>
          <div className="basic-info-col">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                onChange={handleChange}
                type="text"
                id="email"
                value={basicInfo.email}
                name="email"
                placeholder="Email"
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            onChange={handleChange}
            type="text"
            id="address"
            value={basicInfo.address}
            name="address"
            placeholder="Address"
          />
        </div>

        <div className="basic-info-row">
          <div className="basic-info-col">
            <div className="form-group">
              <label htmlFor="barangay">Barangay</label>
              <input
                onChange={handleChange}
                type="text"
                id="barangay"
                value={basicInfo.barangay}
                name="barangay"
                placeholder="Barangay"
              />
            </div>
          </div>
          <div className="basic-info-col">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                onChange={handleChange}
                type="text"
                id="city"
                value={basicInfo.city}
                name="city"
                placeholder="City"
              />
            </div>
          </div>
        </div>

        <div className="basic-info-row">
          <div className="basic-info-col">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                onChange={handleChange}
                type="text"
                id="phone"
                value={basicInfo.phone}
                name="phone"
                placeholder="Phone"
              />
            </div>
          </div>
          <div className="basic-info-col">
            <div className="form-group">
              <label htmlFor="zip">Zip Code</label>
              <input
                onChange={handleChange}
                type="text"
                id="zip"
                value={basicInfo.zip}
                name="zip"
                placeholder="Zip Code"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
