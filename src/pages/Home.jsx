import React, { useState } from "react";
import arrow from "../images/Vec.png";
import rec from "../images/rec.png";
import tic from "../images/tic.png";
import timer from "../images/timer.png";
import windows from "../images/windows.png";
import send from "../images/send.png";
import single from "../images/singletick.png";
import refresh from "../images/refresh.png";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import Documents from "./Documents";

function Home() {
  const [showPersonalDetails, setShowPersonalDetails] = useState(false);
  const [showContactDetails, setShowContactDetails] = useState(false);

  const handlePersonalDetailsClick = () => {
    setShowPersonalDetails(true);
    setShowContactDetails(false);
  };

  const handleContactDetailsClick = () => {
    setShowContactDetails(true);
    setShowPersonalDetails(false);
  };

  const handleDocumentsClick = () => {
    setShowContactDetails(false);
    setShowPersonalDetails(false);
  };
  return (
    <div className="pt-1">
      <hr className="my-5 ml-16 w-[970px] max-sm:w-[360px] max-sm:ml-0" />

      <div className=" flex flex-row  max-sm:flex-col max-sm:px-2 ">
        <div className="flex flex-row ml-16 max-sm:mx-8">
          <span
            className="max-sm:text-sm"
            style={{
              fontFamily: "Open Sans",
              fontSize: "15px",
              fontWeight: 400,
              color: "grey",
            }}
          >
            Patient Records
          </span>
          <div className="p-[5px] max-sm:p-1">
            <img src={arrow} alt="Arrow" width={7} />
          </div>
          <span
            className="max-sm:text-sm"
            style={{
              fontFamily: "Open Sans",
              fontSize: "15px",
              fontWeight: 400,
              color: "grey",
            }}
          >
            Add Patient
          </span>
        </div>

        <div className="flex items-center">
          <div className="ml-[650px] max-sm:ml-[55px] max-sm:pt-6">
            <img src={refresh} alt="refresh" />
          </div>
          <button className="ml-2">Refresh</button>
        </div>
      </div>

      <hr className="my-5 ml-16 w-[970px] max-sm:w-[360px] max-sm:ml-0" />

      <div className="flex flex-row w-[255px] h-[844px] bg-[#FBFAFC] mt-[40px] ml-[60px] max-sm:ml-[7px] max-sm:flex-col-reverse max-sm:gap-[850px]">
        <div className="  flex flex-col gap-[20px] w-[251px] h-[850px]  max-sm:border max-sm:h-auto max-sm:w-[330px] border-gray-300">
          <div className="flex pt-1 ">
            <div className="flex flex-col mt-5">
              <button
                className="bg-[#EEEEEE] p-3 mx-3 mb-3 w-[230px] max-sm:w-[330px]"
                onClick={handlePersonalDetailsClick}
              >
                Personal Details
              </button>

              <button
                className="bg-[#EEEEEE] p-3 mx-3 mb-3 w-[230px] max-sm:w-[330px]"
                onClick={handleContactDetailsClick}
              >
                Contact Details
              </button>
              <button
                className="bg-[#EEEEEE] p-3 mx-3 mb-3 w-[230px] max-sm:w-[330px]"
                onClick={handleDocumentsClick}
              >
                Documents
              </button>
            </div>
            {showPersonalDetails && <PersonalDetails />}
            {showContactDetails && <ContactDetails />}
            {!showPersonalDetails && !showContactDetails && <Documents />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
