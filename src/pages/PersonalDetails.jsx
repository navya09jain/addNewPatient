import React from "react";

export default function PersonalDetails() {
  return (
    <div className="w-[714px] h-[844px] rounded-lg ml-5">
      <div className="w-[654px] h-[733px] flex flex-col justify-start items-start space-y-6 p-38 pl-30">
        <p
          className="font-montserrat text-base font-semibold leading-3
     "
        >
          Personal Details
        </p>
        <p
          className="font-montserrat text-base font-semibold  leading-3
     "
        >
          Patient ID: 000001
        </p>
        <div>
          <div className="flex flex-row gap-8">
            <div className="flex flex-col">
              <p className="font-Poppins h-[21px]">
                First Name <span className="text-[red]">*</span>
              </p>
              <input
                className="w-[319px] h-[53px] p-[16px] mt-2 bg-[#F8F7FC]"
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-Poppins h-[21px]">
                Last Name <span className="text-[red]">*</span>
              </p>
              <input
                className="w-[319px] h-[53px] p-[16px] mt-2 bg-[#F8F7FC]"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <div className="flex flex-col ">
              <p className="font-Poppins h-[21px]">Birthdate</p>
              <input
                className="w-[319px] h-[53px] p-[16px] mt-2 bg-[#F8F7FC]"
                type="date"
                placeholder="Birthdate"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-Poppins h-[21px]">
                Age<span className="text-[red]">*</span>
              </p>
              <div class="relative">
                <input
                  class="w-[319px] h-[53px] p-[16px] mt-2 bg-[#F8F7FC]"
                  placeholder="Age"
                />
                <p class="absolute right-4 top-5">yrs</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-Poppins h-[21px]">Gender</p>
            <select
              className="w-[654px] h-[53px] p-[16px] mt-2 bg-[#F8F7FC]"
              placeholder="Gender"
            >
              <option value="" disabled selected hidden>
                Select an option
              </option>
              <option>Female</option>
              <option>Male</option>
              <option>Prefer not to say</option>
            </select>
          </div>
          <div className="flex flex-row gap-8">
            <div className="flex flex-col ">
              <p className="font-Poppins h-[21px]">Height</p>
              <div className="relative">
                <input
                  className="w-[319px] h-[53px] p-[16px] mt-2 bg-[#F8F7FC]"
                  placeholder="Height"
                />
                <p class="absolute right-4 top-5">cm</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-Poppins h-[21px]">Weight</p>
              <div className="relative">
                <input
                  className="w-[319px] h-[53px] p-[16px] mt-2 bg-[#F8F7FC]"
                  placeholder="Weight"
                />
                <p class="absolute right-4 top-5">kg</p>
              </div>
            </div>
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
