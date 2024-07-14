
// Icons


// Redux
import { useSelector } from "react-redux";

// Hooks
import { useState, useEffect } from "react";


import tate from "../image/atate.jpg"
import { Link } from "react-router-dom";

function ProfileHeader() {
  return (
    <div className="bg-[#F6F6F6]  h-20 flex items-center justify-between px-5 w-[100%]">
     <Link to='/Profile'>
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img
            src={tate}
            alt="profile"
            className="h-full w-full"
          />
        </div>
          <h4 className="text-sm font-bold text-black">hassan</h4>

      </div>
     </Link>

    </div>
  );
}

export default ProfileHeader;