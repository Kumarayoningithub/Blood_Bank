// import React, { useState } from "react";
// import InputType from "./InputType";
// import { Link } from "react-router-dom";
// import { handleLogin, handleRegister } from "../../../services/authService";

// const Form = ({ formType, submitBtn, formTitle }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("donar");
//   const [name, setName] = useState("");
//   const [organisationName, setOrganisationName] = useState("");
//   const [hospitalName, setHospitalName] = useState("");
//   const [website, setWebsite] = useState("");
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");
//   const [age, setAge] = useState();
//   const [gender, setGender] = useState("");
//   // const [ages, setAges] = useState("");

//   const handleChange = (e) => {
//     setGender(e.target.value);
//     // Reset age on role change
//     setAge(null);
//   }

//   const handleSubmit = () => {
//     // Check if role is Male and age is less than 18 or Female and age is less than 21
//     if ((gender === "Male" && age < 18) || (gender === "Female" && age < 21)) {
//       alert("Age must be at least 18 for Male and at least 21 for Female.");
//     }
//   }
//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           if (formType === "login")
//             return handleLogin(e, email, password, role);
//           else if (formType === "register")
//             return handleRegister(
//               e,
//               name,
//               role,
//               email,
//               password,
//               phone,
//               organisationName,
//               address,
//               hospitalName,
//               website,
//               age
//             );
//         }}
//       >
//         <h1 className="text-center">{formTitle}</h1>
//         <hr />
//         <div className="d-flex mb-3">
//           <div className="form-check">
//             <input
//               type="radio"
//               className="form-check-input"
//               name="role"
//               id="donarRadio"
//               value={"donar"}
//               onChange={(e) => setRole(e.target.value)}
//               defaultChecked
//             />
//             <label htmlFor="adminRadio" className="form-check-label">
//               Donar
//             </label>
//           </div>
//           <div className="form-check ms-2">
//             <input
//               type="radio"
//               className="form-check-input"
//               name="role"
//               id="adminRadio"
//               value={"admin"}
//               onChange={(e) => setRole(e.target.value)}
//             />
//             <label htmlFor="adminRadio" className="form-check-label">
//               Admin
//             </label>
//           </div>
//           <div className="form-check ms-2">
//             <input
//               type="radio"
//               className="form-check-input"
//               name="role"
//               id="hospitalRadio"
//               value={"hospital"}
//               onChange={(e) => setRole(e.target.value)}
//             />
//             <label htmlFor="hospitalRadio" className="form-check-label">
//               Hospital
//             </label>
//           </div>
//           <div className="form-check ms-2">
//             <input
//               type="radio"
//               className="form-check-input"
//               name="role"
//               id="organisationRadio"
//               value={"organisation"}
//               onChange={(e) => setRole(e.target.value)}
//             />
//             <label htmlFor="organisationRadio" className="form-check-label">
//               Organisation
//             </label>
//           </div>
//         </div>
//         {/* switch statement */}
//         {(() => {
//           //eslint-disable-next-line
//           switch (true) {
//             case formType === "login": {
//               return (
//                 <>
//                   <InputType
//                     labelText={"email"}
//                     labelFor={"forEmail"}
//                     inputType={"email"}
//                     name={"email"}
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   <InputType
//                     labelText={"Password"}
//                     labelFor={"forPassword"}
//                     inputType={"password"}
//                     name={"password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </>
//               );
//             }
//             case formType === "register": {
//               return (
//                 <>
//                   {(role === "admin" || role === "donar") && (
//                     <InputType
//                       labelText={"Name"}
//                       labelFor={"forName"}
//                       inputType={"text"}
//                       name={"name"}
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                     />
//                   )}
//                   {role === "organisation" && (
//                     <InputType
//                       labelText={"Organisation Name"}
//                       labelFor={"fororganisationName"}
//                       inputType={"text"}
//                       name={"organisationName"}
//                       value={organisationName}
//                       onChange={(e) => setOrganisationName(e.target.value)}
//                     />
//                   )}
//                   {role === "hospital" && (
//                     <InputType
//                       labelText={"Hospital Name"}
//                       labelFor={"forHospitalName"}
//                       inputType={"text"}
//                       name={"hospitalName"}
//                       value={hospitalName}
//                       onChange={(e) => setHospitalName(e.target.value)}
//                     />
//                   )}
//                   {/*  */}
//                   {/* <div className="d-flex ">
//                     <div className="form-check m-1">
//                       <input
//                         type="radio"
//                         className="form-check-input"
//                         name="sex"
//                         id="donarRadio"
//                         value={"donar"}
//                         onChange={(e) => setRole(e.target.value)}
//                         defaultChecked
//                       />
//                       <label htmlFor="adminRadio" className="form-check-label">
//                         Female
//                       </label>
//                     </div>
//                     <div className="form-check m-1">
//                       <input
//                         type="radio"
//                         className="form-check-input"
//                         name="sex"
//                         id="donarRadio"
//                         value={"donar"}
//                         onChange={(e) => setRole(e.target.value)}
//                         defaultChecked
//                       />
//                       <label htmlFor="adminRadio" className="form-check-label">
//                         Male
//                       </label>
//                     </div>
//                  </div>
//                   {role === "donar" &&
//                   <InputType
//                     labelText={"Age"}
//                     labelFor={"forPhone"}
//                     inputType={"text"}
//                     name={"Age"}
//                     value={age}
//                     onChange={(e) => setAge(e.target.value)}
//                   />
//                   } */}
//                   {/*  */}
//                   <div>
//                     <div className="d-flex">
//                       <div className="form-check m-1">
//                         <input
//                           type="radio"
//                           className="form-check-input"
//                           name="gender"
//                           id="femaleRadio"
//                           value="gender"
//                           onChange={handleChange}
//                           defaultChecked={role === "donar"}
//                         />
//                         <label htmlFor="femaleRadio" className="form-check-label">
//                           Female
//                         </label>
//                       </div>
//                       <div className="form-check m-1">
//                         <input
//                           type="radio"
//                           className="form-check-input"
//                           name="gender"
//                           id="maleRadio"
//                           value="gender"
//                           onChange={handleChange}
//                           defaultChecked={role === "donar"}
//                         />
//                         <label htmlFor="maleRadio" className="form-check-label">
//                           Male
//                         </label>
//                       </div>
//                     </div>
//                     {role === "donar" &&
//                       <InputType
//                         labelText={"Age"}
//                         labelFor={"forAge"}
//                         inputType={"number"}
//                         name={"Age"}
//                         value={age}
//                         onChange={(e) => setAge(e.target.value)}
//                       />
//                     }
//                   </div>
//                   {/*  */}

//                   <InputType
//                     labelText={"email"}
//                     labelFor={"forEmail"}
//                     inputType={"email"}
//                     name={"email"}
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   <InputType
//                     labelText={"Password"}
//                     labelFor={"forPassword"}
//                     inputType={"password"}
//                     name={"password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <InputType
//                     labelText={"website"}
//                     labelFor={"forWebsite"}
//                     inputType={"text"}
//                     name={"website"}
//                     value={website}
//                     onChange={(e) => setWebsite(e.target.value)}
//                   />
//                   <InputType
//                     labelText={"Address"}
//                     labelFor={"forAddress"}
//                     inputType={"text"}
//                     name={"address"}
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                   />
//                   <InputType
//                     labelText={"Phone"}
//                     labelFor={"forPhone"}
//                     inputType={"text"}
//                     name={"phone"}
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                   />
                
//                 </>
//               );
//             }
//           }
//         })()}

//         <div className="d-flex flex-row justify-content-between">
//           {formType === "login" ? (
//             <p>
//               Not registerd yet ? Register
//               <Link to="/register"> Here !</Link>
//             </p>
//           ) : (
//             <p>
//               ALready Usser Please
//                 <Link to="/login"> Login !</Link>
//             </p>
//           )}
//           <button onClick={handleSubmit} className="btn btn-primary" type="submit">
//             {submitBtn}
//           </button>
//         </div>
//           <br />
//         <Link to="/"> Not now i will try Latter !</Link>

//       </form>
//     </div>
//   );
// };

// export default Form;

// import React, { useState } from "react";
// import InputType from "./InputType";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { userLogin, userRegister } from "../../../redux/features/auth/authActions";

// const Form = ({ formType, submitBtn, formTitle }) => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     role: "donar",
//     name: "",
//     organisationName: "",
//     hospitalName: "",
//     website: "",
//     address: "",
//     phone: "",
//     age: "",
//     gender: "",
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formType === "login") {
//       const res = await dispatch(
//         userLogin({
//           role: formData.role,
//           email: formData.email,
//           password: formData.password,
//         })
//       );
//       if (res?.payload?.success) {
//         navigate("/homepage");
//       }
//     } else if (formType === "register") {
//       if (
//         (formData.gender === "Male" && formData.age < 18) ||
//         (formData.gender === "Female" && formData.age < 21)
//       ) {
//         alert("Age must be at least 18 for Male and 21 for Female.");
//         return;
//       }
//       const res = await dispatch(userRegister(formData));
//       if (res?.payload?.success) {
//         navigate("/login");
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1 className="text-center">{formTitle}</h1>
//       <hr />
//       {/* Role Selection */}
//       <div className="d-flex mb-3">
//         {["donar", "admin", "hospital", "organisation"].map((roleOpt) => (
//           <div className="form-check ms-2" key={roleOpt}>
//             <input
//               type="radio"
//               className="form-check-input"
//               name="role"
//               value={roleOpt}
//               onChange={handleChange}
//               checked={formData.role === roleOpt}
//             />
//             <label className="form-check-label">{roleOpt}</label>
//           </div>
//         ))}
//       </div>

//       {/* Login Fields */}
//       {formType === "login" && (
//         <>
//           <InputType labelText="Email" name="email" inputType="email" value={formData.email} onChange={handleChange} />
//           <InputType labelText="Password" name="password" inputType="password" value={formData.password} onChange={handleChange} />
//         </>
//       )}

//       {/* Register Fields */}
//       {formType === "register" && (
//         <>
//           {(formData.role === "donar" || formData.role === "admin") && (
//             <InputType labelText="Name" name="name" inputType="text" value={formData.name} onChange={handleChange} />
//           )}
//           {formData.role === "organisation" && (
//             <InputType labelText="Organisation Name" name="organisationName" inputType="text" value={formData.organisationName} onChange={handleChange} />
//           )}
//           {formData.role === "hospital" && (
//             <InputType labelText="Hospital Name" name="hospitalName" inputType="text" value={formData.hospitalName} onChange={handleChange} />
//           )}
//           <div className="d-flex">
//             {["Female", "Male"].map((g) => (
//               <div className="form-check m-1" key={g}>
//                 <input
//                   type="radio"
//                   className="form-check-input"
//                   name="gender"
//                   value={g}
//                   onChange={handleChange}
//                   checked={formData.gender === g}
//                 />
//                 <label className="form-check-label">{g}</label>
//               </div>
//             ))}
//           </div>
//           {formData.role === "donar" && (
//             <InputType labelText="Age" name="age" inputType="number" value={formData.age} onChange={handleChange} />
//           )}
//           <InputType labelText="Email" name="email" inputType="email" value={formData.email} onChange={handleChange} />
//           <InputType labelText="Password" name="password" inputType="password" value={formData.password} onChange={handleChange} />
//           <InputType labelText="Website" name="website" inputType="text" value={formData.website} onChange={handleChange} />
//           <InputType labelText="Address" name="address" inputType="text" value={formData.address} onChange={handleChange} />
//           <InputType labelText="Phone" name="phone" inputType="text" value={formData.phone} onChange={handleChange} />
//         </>
//       )}

//       {/* Buttons */}
//       <div className="d-flex justify-content-between mt-3">
//         <p>
//           {formType === "login" ? (
//             <>Not registered? <Link to="/register">Register Here</Link></>
//           ) : (
//             <>Already a user? <Link to="/login">Login!</Link></>
//           )}
//         </p>
//         <button className="btn btn-primary" type="submit">{submitBtn}</button>
//       </div>
//       <br />
//       <Link to="/">I will try later!</Link>
//     </form>
//   );
// };

// export default Form;

import React, { useState } from "react";
import InputType from "./InputType";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin, userRegister } from "../../../redux/features/auth/authActions";

const Form = ({ formType, submitBtn, formTitle }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "donar",
    name: "",
    organisationName: "",
    hospitalName: "",
    website: "",
    address: "",
    phone: "",
    age: "",
    gender: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formType === "login") {
      const res = await dispatch(
        userLogin({
          role: formData.role,
          email: formData.email,
          password: formData.password,
        })
      );
      if (res?.payload?.success) {
        navigate("/homepage");
      }
    } else if (formType === "register") {
      if (
        (formData.gender === "Male" && formData.age < 18) ||
        (formData.gender === "Female" && formData.age < 21)
      ) {
        alert("Age must be at least 18 for Male and 21 for Female.");
        return;
      }
      const res = await dispatch(userRegister(formData));
      if (res?.payload?.success) {
        navigate("/login");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-center">{formTitle}</h1>
      <hr />
      {/* Role Selection */}
      <div className="d-flex mb-3">
        {["donar", "admin", "hospital", "organisation"].map((roleOpt) => (
          <div className="form-check ms-2" key={roleOpt}>
            <input
              type="radio"
              className="form-check-input"
              name="role"
              value={roleOpt}
              onChange={handleChange}
              checked={formData.role === roleOpt}
            />
            <label className="form-check-label">{roleOpt}</label>
          </div>
        ))}
      </div>

      {/* Login Fields */}
      {formType === "login" && (
        <>
          <InputType labelText="Email" name="email" inputType="email" value={formData.email} onChange={handleChange} />
          <InputType labelText="Password" name="password" inputType="password" value={formData.password} onChange={handleChange} />
        </>
      )}

      {/* Register Fields */}
      {formType === "register" && (
        <>
          {(formData.role === "donar" || formData.role === "admin") && (
            <InputType labelText="Name" name="name" inputType="text" value={formData.name} onChange={handleChange} />
          )}
          {formData.role === "organisation" && (
            <InputType labelText="Organisation Name" name="organisationName" inputType="text" value={formData.organisationName} onChange={handleChange} />
          )}
          {formData.role === "hospital" && (
            <InputType labelText="Hospital Name" name="hospitalName" inputType="text" value={formData.hospitalName} onChange={handleChange} />
          )}

          {/* Gender (only for donar or admin) */}
          {(formData.role === "donar" || formData.role === "admin") && (
            <div className="d-flex">
              {["Male", "Female"].map((g) => (
                <div className="form-check m-1" key={g}>
                  <input
                    type="radio"
                    className="form-check-input"
                    name="gender"
                    value={g}
                    onChange={handleChange}
                    checked={formData.gender === g}
                  />
                  <label className="form-check-label">{g}</label>
                </div>
              ))}
            </div>
          )}

          {/* Age only for donor */}
          {formData.role === "donar" && (
            <InputType labelText="Age" name="age" inputType="number" value={formData.age} onChange={handleChange} />
          )}

          <InputType labelText="Email" name="email" inputType="email" value={formData.email} onChange={handleChange} />
          <InputType labelText="Password" name="password" inputType="password" value={formData.password} onChange={handleChange} />
          <InputType labelText="Website" name="website" inputType="text" value={formData.website} onChange={handleChange} />
          <InputType labelText="Address" name="address" inputType="text" value={formData.address} onChange={handleChange} />
          <InputType labelText="Phone" name="phone" inputType="text" value={formData.phone} onChange={handleChange} />
        </>
      )}

      {/* Buttons */}
      <div className="d-flex justify-content-between mt-3">
        <p>
          {formType === "login" ? (
            <>Not registered? <Link to="/register">Register Here</Link></>
          ) : (
            <>Already a user? <Link to="/login">Login!</Link></>
          )}
        </p>
        <button className="btn btn-primary" type="submit">{submitBtn}</button>
      </div>
      <br />
      <Link to="/">I will try later!</Link>
    </form>
  );
};

export default Form;
