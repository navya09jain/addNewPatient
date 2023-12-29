import React, { useState } from "react";

export default function Documents() {
  const [idProofSections, setIdProofSections] = useState(1);
  const [fileList, setFileList] = useState([]);

  const addAnotherID = () => {
    setIdProofSections(idProofSections + 1);
  };

  const handleFileUpload = e => {
    const files = e.target.files;
    const fileNames = Array.from(files).map(file => file.name);
    setFileList(prevFileList => [...prevFileList, ...fileNames]);
  };

  return (
    <div className="w-[714px] h-[844px] rounded-lg ml-5">
      <div className="w-[654px] h-[733px] flex flex-col justify-start items-start space-y-6 p-38 pl-30">
        <div className="flex flex-row gap-[550px]">
          <p className="font-montserrat text-base font-semibold">Documents</p>
          <button className="border-b-2 border-[#5351C7] text-[#5351C7]">
            Skip
          </button>
        </div>
        <div>
          {Array.from({ length: idProofSections }, (_, index) => (
            <div className="flex flex-row" key={index}>
              <div className="flex flex-col">
                <p className="font-Poppins h-[21px]">ID Proof</p>
                <select
                  className="w-[319px] h-[53px] p-[16px] mt-2 bg-[#F8F7FC]"
                  placeholder="Select an option"
                >
                  <option value="" disabled selected hidden>
                    Select an option
                  </option>
                  <option>Aadhar Card</option>
                  <option>Passport</option>
                  <option>PAN Card</option>
                  {/* ADD MORE OPTIONS ACCORDINGLY */}
                </select>
              </div>
              <div className="flex flex-col ml-4">
                <p className="font-Poppins h-[21px]">ID no.</p>
                <input
                  className="w-[319px] h-[53px] p-[16px] mt-2 bg-[#F8F7FC]"
                  placeholder="ID no"
                />
              </div>
            </div>
          ))}
          <button
            className="w-[207px] h-[32px] border-b-2 mt-2 border-[#5351C7] text-[#5351C7]"
            onClick={addAnotherID}
          >
            + Add another ID
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-Poppins h-[18px] mt-2 text-[#205C4C]">
            You can also upload documents in png, jpg, docx & pdf formats.
          </p>
          <input
            type="file"
            className="bg-[#A1A1A1] w-[221px] h-[46px]"
            accept=".pdf, .png, .docx, .jpg"
            placeholder="Browse to upload documents"
            onChange={handleFileUpload}
            multiple
          />
          <p className="font-Poppins h-[18px]  text-[#3C3C9D]">
            Please upload image/document of size less than 50Mb.
          </p>
          <button className="w-[222.5px] h-[60px] bg-[#EEEEEE] hover:bg-[#32856E] text-[black] hover:text-[white]">
            Save
          </button>
          <div
            className="w-[654px] h-[356px] rounded-lg
           bg-[#F5F4FB] p-[16px] gap-[12px]"
          >
            <p className="font-Montserrat text-[16px] font-semibold">List</p>
            {fileList.length === 0 ? (
              <p className="font-Poppins text-[16px] text-[#8E8E8E]">
                No records available.
              </p>
            ) : (
              <ul>
                {fileList.map((fileName, index) => (
                  <li key={index}>{fileName}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
