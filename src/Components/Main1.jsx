import React, { useEffect, useState } from "react";

const main1 = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders([
      { id: "ORD123456", status: "In Production", progress: "60%", location: "Mumbai, IN", delivery: "Feb 22, 2025", courier: "FedEx", trackingId: "FDX987654" },
      { id: "ORD123457", status: "Shipped", progress: "100%", location: "Delhi, IN", delivery: "Feb 20, 2025", courier: "DHL", trackingId: "DHL654321" },
      { id: "ORD123458", status: "Pending", progress: "30%", location: "Bangalore, IN", delivery: "Feb 25, 2025", courier: "BlueDart", trackingId: "BDART123789" },
      { id: "ORD123459", status: "Processing", progress: "45%", location: "Hyderabad, IN", delivery: "Feb 23, 2025", courier: "DTDC", trackingId: "DTDC987321" }
    ]);
  }, []);

  const styles = {
    dashboard: { textAlign: "center", padding: "2rem", backgroundColor: "transparent" },
    container: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", maxWidth: "900px", width: "100%", margin: "auto" },
    card: { backgroundColor: "white", borderRadius: "1.25rem", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", padding: "1.5rem", width: "300px", textAlign: "center" },
    orderId: { fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" },
    h1:{ fontSize:"2.5rem"},
    status: { color: "#6b7280" },
    progressContainer: { marginTop: "1rem" },
    progressBar: { backgroundColor: "#e5e7eb", height: "8px", borderRadius: "4px", marginTop: "0.5rem", width: "100%", position: "relative" },
    progress: { backgroundColor: "#3b82f6", height: "100%", borderRadius: "4px", transition: "width 0.3s ease-in-out" },
    trackingContainer: { marginTop: "1rem", display: "flex", alignItems: "center", gap: "0.5rem", justifyContent: "center" },
    text: { color: "#6b7280", fontSize: "0.875rem" }
  };

  return (
    <div style={styles.dashboard}>
      <h1 style={styles.h1}>Current Orders</h1>
      <div style={styles.container}>
        {orders.map((order) => (
          <div key={order.id} style={styles.card}>
            <h2 style={styles.orderId}>Order #{order.id}</h2>
            <p style={styles.status}>Current Status: {order.status}</p>
            <div style={styles.progressContainer}>
              <h3>Production Progress</h3>
              <div style={styles.progressBar}>
                <div style={{ ...styles.progress, width: order.progress }}></div>
              </div>
              <p>{order.progress} completed</p>
            </div>
            <div style={styles.trackingContainer}><h3>Courier:</h3><p style={styles.text}>{order.courier}</p></div>
            <div style={styles.trackingContainer}><h3>Tracking ID:</h3><p style={styles.text}>{order.trackingId}</p></div>
            <div style={styles.trackingContainer}><h3>Courier Location:</h3><p style={styles.text}>{order.location}</p></div>
            <div style={styles.trackingContainer}><h3>Estimated Delivery:</h3><p style={styles.text}>{order.delivery}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default main1;