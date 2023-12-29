import React from "react";
import logo from "../images/logo.png";
import home from "../images/home.png";
import appoint from "../images/appoint.png";
import whatsapp from "../images/whatsapp.png";
import record from "../images/record.png";
import boss from "../images/boss.png";
import payment from "../images/payment.png";
import rise from "../images/rise.png";
import logout from "../images/logout.png";

function Sidenav() {
  return (
    <div className="fixed top-0 left-[-10px] h-[100%] w-[250px] bg-white pt-[50px] pl-[40px] z-50 transition  ease-in-out delay-150 md:hidden lg-hidden xl-hidden 2xl-hidden">
      <div>
        <div className="pr-8 pb-14">
          <img src={logo} alt="logo" width={217} />
        </div>

        <div className="mb-5 p-1  w-52 flex flex-row hover:bg-gray-100">
          <div className="pr-4">
            <img src={home} alt="home" width={28} />
          </div>

          <p
            style={{
              fontFamily: "Open Sans",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 400,
            }}
          >
            Home
          </p>
        </div>

        <div className="mb-5 p-1 w-52 flex flex-row hover:bg-gray-100">
          <div className="pr-4">
            <img src={appoint} alt="appoint" width={28} />
          </div>

          <p
            style={{
              fontFamily: "Open Sans",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 400,
            }}
          >
            Appointments
          </p>
        </div>

        <div className="mb-5 p-1 w-52 flex flex-row hover:bg-gray-100">
          <div className="pr-4">
            <img src={whatsapp} alt="whatsapp" width={28} />
          </div>

          <p
            style={{
              fontFamily: "Open Sans",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 400,
            }}
          >
            WhatsApp Chat{" "}
          </p>
        </div>

        <div className="mb-5 p-1 w-52 flex flex-row hover:bg-gray-100">
          <div className="pr-4">
            <img src={record} alt="record" width={28} />
          </div>

          <p
            style={{
              fontFamily: "Open Sans",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 400,
            }}
          >
            Patients Record
          </p>
        </div>

        <div className="mb-5 p-1 w-52 flex flex-row hover:bg-gray-100">
          <div className="pr-4">
            <img src={boss} alt="boss" width={28} />
          </div>

          <p
            style={{
              fontFamily: "Open Sans",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 400,
            }}
          >
            Manage Staff
          </p>
        </div>

        <div className="mb-5 p-1 w-52 flex flex-row hover:bg-gray-100">
          <div className="pr-4">
            <img src={payment} alt="payment" width={28} />
          </div>

          <p
            style={{
              fontFamily: "Open Sans",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 400,
            }}
          >
            Payments
          </p>
        </div>

        <div className="mb-5 p-1 w-52 flex flex-row hover:bg-gray-100">
          <div className="pr-4">
            <img src={rise} alt="home" width={28} />
          </div>

          <p
            style={{
              fontFamily: "Open Sans",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 400,
            }}
          >
            Analytics
          </p>
        </div>

        <div className="mb-5 p-1 w-52 flex flex-row hover:bg-gray-100">
          <div className="pr-4">
            <img src={logout} alt="logout" width={28} />
          </div>

          <p
            style={{
              fontFamily: "Open Sans",
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 400,
            }}
          >
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
