// import React from "react";

// const Spinner = () => {
//   return (
//     <div className="loader-container">
//       <div className="loader"></div>
//     </div>
//   );
// };

// export default Spinner;
import React from "react";

const Spinner = () => {
  const loaderContainerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  };

  const loaderStyle = {
    border: "8px solid #f3f3f3",
    borderTop: "8px solid #e74c3c",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    animation: "spin 0.8s linear infinite",
  };

  const spinnerKeyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <>
      <style>{spinnerKeyframes}</style>
      <div style={loaderContainerStyle}>
        <div style={loaderStyle}></div>
      </div>
    </>
  );
};

export default Spinner;
