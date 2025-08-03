import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <div className="container">
        {/* Fixing the typo: d-felx -> d-flex */}
        <div className="d-flex flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          
          {/* This will show as a separate line */}
          <h2 className="mt-2">Manage RedReserve Blood Bank App</h2>

          <hr />

          <p>
            RedReserve blood bank website is a comprehensive and centralized online platform that plays a vital role in bridging the gap between blood donors and recipients in urgent need of life-saving transfusions. Designed to enhance and streamline the entire blood donation process, the platform serves as a critical tool for facilitating communication between donors, recipients, healthcare providers, and blood banks. It provides a wide array of essential features and services, including educational resources about the importance of blood donation, eligibility criteria, and donation types. Additionally, it offers convenient online registration for both donors and recipients, user-friendly interfaces for scheduling appointments, reminders, donor history tracking, inventory management of available blood units, and real-time updates on blood supply status. By harnessing the power of digital technology, the blood bank website not only ensures the efficient and timely management of blood resources but also promotes awareness, encourages regular donations, and ultimately contributes to saving countless lives.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
