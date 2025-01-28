import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
function RightFlotedBtn() {
  return (
    <div className="fixed flex justify-center gap-[2px] items-center px-[20px] py-[10px] right-[-42px] top-[44vh] bg-[#F37021] z-[99] transform rotate-[-90deg] translate-y-full rounded-t-lg h-10">
      <HelpOutlineIcon className="text-white p-[2px]" />
      <span className="text-white font-Poppins">Enquiry</span>
    </div>
  );
}

export default RightFlotedBtn;
