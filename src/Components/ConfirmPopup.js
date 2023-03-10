import React, { useState } from "react";
import "./Form.css";

export const ConfirmPopup = (props) => {
  return (
    <section id="confirm">
      <div className="container">
        <div className="title">Are you sure to delete a contact?</div>
        <div className="content">
          <form>
            <div className="user-details"></div>

            <div className="button">
              <button type="submit" className="bg-red" onClick={props.deleteOK}>
                Delete
              </button>

              <button
                type="button"
                className="bg-gray "
                onClick={props.closeModal}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConfirmPopup;
