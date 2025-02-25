import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {[...Array(6)].map((_, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 p-4">
            <h4 className="">
              <i className="fa fa-plus-circle" aria-hidden="true"></i> Account
              Opening
            </h4>
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
              Online Account Opening
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
              Offline Account Opening
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
              Company, Partnership and HUF Account Opening
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
              NRI Account Opening
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
              Charges at Zerodha
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
              Zerodha IDFC FIRST Bank 3-in-1 Account
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
              Getting Started
            </a>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
