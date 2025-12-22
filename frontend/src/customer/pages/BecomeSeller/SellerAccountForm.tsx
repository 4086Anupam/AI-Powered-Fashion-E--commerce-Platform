// import { Button, Step, StepLabel, Stepper } from "@mui/material";
// import React, { useState } from "react";
// import BecomeSeller from "./BecomeSeller";
// import BecomeSellerFormStep1 from "./BecomeSellerFormStep1";
// import { useFormik } from "formik";
// import BecomeSellerFormStep2 from "./BecomeSellerFormStep2";
// import BecomeSellerFormStep3 from "./BecomeSellerFormStep3";
// import BecomeSellerFormStep4 from "./BecomeSellerFormStep4";

// const steps = [
//   "Tax Details & Mobile",
//   "Pickup Address",
//   "Bank Details",
//   "Supplier Details",
// ];

// const SellerAccountForm = () => {
//   const [activeStep, setActiveStep] = useState(0);

//   const handleStep = (value: number) => {
//     // Move backward
//     if (value === -1 && activeStep > 0) {
//       setActiveStep((prev) => prev - 1);
//     }
//     // Move forward
//     else if (value === 1 && activeStep < steps.length - 1) {
//       setActiveStep((prev) => prev + 1);
//     }
//     // When on last step
//     else if (value === 1 && activeStep === steps.length - 1) {
//       handleCreateAccount();
//     }

//     console.log("active step: ", activeStep);
//   };

//   const handleCreateAccount = () => {
//     console.log("create account");
//   };

//   const formik = useFormik({
//     initialValues: {
//       mobile: "",
//       otp: "",
//       gstin: "",
//       pickupAddress: {
//         name: "",
//         mobile: "",
//         pincode: "",
//         address: "",
//         locality: "",
//         city: "",
//         state: "",
//       },
//       bankDetails: {
//         accountNumber: "",
//         ifscCode: "",
//         accountHolderName: "",
//       },
//       sellerName: "",
//       email: "",
//       businessDetails: {
//         businessName: "",
//         businessEmail: "",
//         businessMobile: "",
//         logo: "",
//         banner: "",
//         businessAddress: "",
//       },
//       password: "",
//     },

//     // validationSchema: FormSchema,
//     onSubmit: (values) => {
//       console.log(values, "formik submitted");
//     },
//   });

//   return (
//     <div>
//       {/* Stepper */}
//       <Stepper activeStep={activeStep} alternativeLabel>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>

//       {/* Step Content */}
//       <section className="mt-20 space-y-10">
//         <div>
//           {activeStep === 0 && <BecomeSellerFormStep1 formik={formik} />}
//           {activeStep === 1 && <BecomeSellerFormStep2 formik={formik} />}
//           {activeStep === 2 && (
//             <p>
//               <BecomeSellerFormStep3 formik={formik} />
//             </p>
//           )}
//           {activeStep === 3 && (
//             <p>
//               <BecomeSellerFormStep4 formik={formik} />
//             </p>
//           )}
//         </div>

//         {/* Navigation Buttons */}
//         <div className="flex items-center justify-between mt-4">
//           <Button
//             onClick={() => handleStep(-1)}
//             variant="contained"
//             disabled={activeStep === 0}
//           >
//             Back
//           </Button>

//           {/* <Button onClick={() => handleStep(1)} variant="contained">
//             {activeStep === steps.length - 1 ? "Create account" : "Continue"}
//           </Button> */}
//           <Button
//             onClick={() => {
//               if (activeStep === steps.length - 1) {
//                 formik.handleSubmit(); // ✅ triggers form submit + console full data
//               } else {
//                 handleStep(1);
//               }
//             }}
//             variant="contained"
//           >
//             {activeStep === steps.length - 1 ? "Create account" : "Continue"}
//           </Button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SellerAccountForm;

import { Button, Step, StepLabel, Stepper } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import BecomeSellerFormStep1 from "./BecomeSellerFormStep1";
import BecomeSellerFormStep2 from "./BecomeSellerFormStep2";
import BecomeSellerFormStep3 from "./BecomeSellerFormStep3";
import BecomeSellerFormStep4 from "./BecomeSellerFormStep4";
import { useAppDispatch } from "../../../State/Store";
import { useNavigate } from "react-router-dom";
import { createSeller } from "../../../State/Seller/sellerSlice";

const steps = [
  "Tax Details & Mobile",
  "Pickup Address",
  "Bank Details",
  "Supplier Details",
];

const SellerAccountForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      formik.handleSubmit();
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSubmit = (values: any) => {
    console.log("Submitting seller:", values);

    dispatch(createSeller(values))
      .unwrap()
      .then((seller) => {
        alert("Seller Created Successfully!");
        // Redirect to OTP verify page
        // navigate(`/verify-seller/${values.email}`);
      })
      .catch((err) => {
        alert("Error: " + err.message);
      });
  };

  const formik = useFormik({
    initialValues: {
      sellerName: "",
      mobile: "",
      email: "",
      password: "",
      GSTIN: "",
      pickupAddress: {
        name: "",
        street: "",
        city: "",
        state: "",
        pinCode: "",
        mobile: "",
      },
      bankDetails: {
        accountNumber: "",
        ifscCode: "",
        accountHolderName: "",
      },
      businessDetails: {
        businessName: "",
        businessEmail: "",
        businessMobile: "",
        businessAddress: "",
        logo: "",
        banner: "",
      },
    },
    onSubmit: (values) => {
      console.log("✅ Final Submitted Payload =>", values);
      dispatch(createSeller(values))
        .unwrap()
        .then(() => {
          alert("Seller Created ✅ Check email for OTP!");
          // navigate(`/verify-seller/${values.email}`);
        })
        .catch((error) => {
          alert("Failed ❌ " + error);
        });
    },
  });

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <section className="mt-20 space-y-10">
        {activeStep === 0 && <BecomeSellerFormStep1 formik={formik} />}
        {activeStep === 1 && <BecomeSellerFormStep2 formik={formik} />}
        {activeStep === 2 && <BecomeSellerFormStep3 formik={formik} />}
        {activeStep === 3 && <BecomeSellerFormStep4 formik={formik} />}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-4">
          <Button onClick={handleBack} disabled={activeStep === 0}>
            Back
          </Button>

          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Create Account" : "Continue"}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SellerAccountForm;
