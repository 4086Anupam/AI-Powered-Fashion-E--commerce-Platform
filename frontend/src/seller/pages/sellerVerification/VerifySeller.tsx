import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function VerifySeller() {
  const { otp } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("Verifying account...");

  useEffect(() => {
    axios
      .patch(`http://localhost:5454/sellers/verify/${otp}`)
      .then(() => {
        setMessage("✅ Email Verified Successfully!");
        setTimeout(() => navigate("/become-seller"), 2000);
      })
      .catch(() => setMessage("❌ Invalid or Expired OTP"));
  }, [otp, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>{message}</h2>
    </div>
  );
}
