import React from "react";
function Phone(){
    return (
        <form className="row g-6 container">
          <div className="col-md-3">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div className="col-md-3">
            <label htmlFor="Phone Number" className="form-label">Phone Number</label>
            <input type="text" className="form-control" id="phoneNumber" placeholder="+91-01101010" />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputState" className="form-label">State</label>
            <select id="inputState" className="form-select">
              <option selected>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option >Assam</option>
              <option >Bihar</option>
              <option >Chandigarh</option>
              <option >Chattisgarh</option>
              <option >Dadara and Nagar Haveli</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>JharKand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Sikkim</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option>Uttarakhand</option>
              <option>Uttar Pradesh</option>
              <option>West Bengal</option>
              <option>Andaman and Nicobar Islands</option>
              <option>Chandigarh Union Territory</option>
              <option>Dadra and Nagar Haveli</option>
              <option>Delhi</option>
              <option>Daman and Diu</option>
              <option>Lakshadweep</option>
              <option>Pondicherry</option>
              <option>Non Resident of India</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="inputZip" className="form-label">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-md-3">
          </div>
        <div className="form-check">
          <input className="form-check-input is-invalid" type="checkbox" defaultValue id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
          <label className="form-check-label" htmlFor="invalidCheck3">
            Agree to terms and conditions
          </label>
          <div id="invalidCheck3Feedback" className="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Send OTP</button>
        </div>
        </form>

      );
    }
export default Phone;