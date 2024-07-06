import React from "react";
import "./FeatureCard.css";
const FeatureCard = ({ description }) => {
  return (
    <div className="card">

      <div className="img-div">
        <div>
         <img src="" alt="" />
        </div>
        <div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <div></div>
      </div>
      <div className="breakerFC"></div>
      <div className="des-out-div">
        <div className="des-inner-div">
          <p className="paraS">{description}</p>
        </div>
      </div>
    </div>
  );
};

// //   {/* Background Image Wrapper */}
//       <div className="absolute inset-0">
//         <img
//           src="https://framerusercontent.com/images/m9K2orpiKTpyArFtPrdshgxB1Q.png"
//           srcSet="https://framerusercontent.com/images/m9K2orpiKTpyArFtPrdshgxB1Q.png?scale-down-to=512 512w, https://framerusercontent.com/images/m9K2orpiKTpyArFtPrdshgxB1Q.png 777w"
//           sizes="355px"
//           alt=""
//           className="object-cover w-full h-full rounded"
//         />
//       </div>

//       {/* Foreground Image Wrapper */}
//       <div className="absolute inset-0">
//         <img
//           src="https://framerusercontent.com/images/IB4pBCXqXDrRPrzyAYVAOxIYwmk.png"
//           srcSet="https://framerusercontent.com/images/IB4pBCXqXDrRPrzyAYVAOxIYwmk.png?scale-down-to=512 512w, https://framerusercontent.com/images/IB4pBCXqXDrRPrzyAYVAOxIYwmk.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/IB4pBCXqXDrRPrzyAYVAOxIYwmk.png 2000w"
//           sizes="356px"
//           alt=""
//           className="object-cover w-full h-full rounded"
//         />
//       </div>

//       {/* Overlay Content */}
//       <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center px-6 text-white">
//         <div className="mb-4">
//           <iconify-icon
//             icon="mdi-light:eye-off"
//             inline="true"
//             style={{ fontSize: '49px', color: 'rgb(254, 232, 76)' }}
//           ></iconify-icon>
//         </div>
//         <h3 className="font-medium text-lg mb-2">Privacy First</h3>
//         <p className="text-sm text-gray-400">
//           Ensure data security with our privacy-centric approach to API management.
//         </p>
//       </div>
export default FeatureCard;
