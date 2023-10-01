import React from "react";
import Button from "./Button";

function Phone(){
    return (
    <div className="phone">
    <label for="phone" className="raw-text">Enter your phone number:</label>
    <input type="tel" name="phn" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
    <Button />
    </div>
    )
};
export default Phone;