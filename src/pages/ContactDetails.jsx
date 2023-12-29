import React, { useState } from "react";

export default function ContactDetails() {
  const [phoneNumbers, setPhoneNumbers] = useState([{ id: 1, value: "" }]);
  const [emails, setEmails] = useState([{ id: 1, value: "" }]);

  const addPhoneNumber = () => {
    setPhoneNumbers(prevNumbers => [
      ...prevNumbers,
      { id: prevNumbers.length + 1, value: "" },
    ]);
  };

  const addEmail = () => {
    setEmails(prevEmails => [
      ...prevEmails,
      { id: prevEmails.length + 1, value: "" },
    ]);
  };

  const handlePhoneNumberChange = (id, value) => {
    setPhoneNumbers(prevNumbers =>
      prevNumbers.map(number =>
        number.id === id ? { ...number, value } : number
      )
    );
  };

  const handleEmailChange = (id, value) => {
    setEmails(prevEmails =>
      prevEmails.map(email => (email.id === id ? { ...email, value } : email))
    );
  };

  return (
    <div className="w-[714px] h-[844px] rounded-lg ml-5">
      <div className="w-[654px] h-[733px] flex flex-col justify-start items-start space-y-6 p-38 pl-30">
        <p className="font-montserrat text-base font-semibold leading-3">
          Contact Details
        </p>

        <div>
          <div className="flex flex-row gap-8">
            <div className="flex flex-col">
              <p className="font-Poppins h-[21px]">
                Phone no <span className="text-[red]">*</span>
              </p>
              {phoneNumbers.map(number => (
                <input
                  key={number.id}
                  className="w-[319px] h-[53px] p-[16px] mt-2 bg-[#F8F7FC]"
                  placeholder={`Phone no. ${number.id}`}
                  value={number.value}
                  onChange={e =>
                    handlePhoneNumberChange(number.id, e.target.value)
                  }
                />
              ))}
              <button
                className="w-[207px] h-[32px] border-b-2 border-[#5351C7] text-[#5351C7]"
                onClick={addPhoneNumber}
              >
                + Add another number
              </button>
            </div>
            <div className="flex flex-col">
              <p className="font-Poppins h-[21px]">Email</p>
              {emails.map(email => (
                <input
                  key={email.id}
                  className="w-[319px] h-[53px] p-[16px] mt-2 bg-[#F8F7FC]"
                  placeholder={`Email ${email.id}`}
                  value={email.value}
                  onChange={e => handleEmailChange(email.id, e.target.value)}
                />
              ))}
              <button
                className="w-[207px] h-[32px] border-b-2 border-[#5351C7] text-[#5351C7]"
                onClick={addEmail}
              >
                + Add another email
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-Poppins h-[21px] mt-2">Address</p>
            <input
              className="w-[654px] h-[53px] p-[16px] mt-2 bg-[#F8F7FC]"
              placeholder="House/Building/Room no"
            />
            <input
              className="w-[654px] h-[53px] p-[16px] mt-2 bg-[#F8F7FC]"
              placeholder="Street/Area"
            />
            <input
              className="w-[654px] h-[53px] p-[16px] mt-2 bg-[#F8F7FC]"
              placeholder="Landmarks"
            />
            <input
              className="w-[654px] h-[53px] p-[16px] mt-2 bg-[#F8F7FC]"
              placeholder="City"
            />
            <input
              className="w-[654px] h-[53px] p-[16px] mt-2 bg-[#F8F7FC]"
              placeholder="Pin code"
            />
          </div>
          <div className="flex flex-col">
            <button className="w-[222.5px] h-[60px] bg-[#EEEEEE] hover:bg-[#32856E] text-[black] hover:text-[white] mt-5">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
