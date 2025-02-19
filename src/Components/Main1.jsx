import  {useEffect}  from "react";
import { PageContext } from "../Context/PageContext";
import  {useState} from "react";
import  {useContext} from "react";

const main1= () => {
  const { orders } = useContext(PageContext);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    setOrderList([...orders].reverse());
  }, [orders]);

  const styles = {
    dashboard: { textAlign: "center", padding: "2rem", backgroundColor: "transparent" },
    h1:{fontSize:"3rem",fontWeight:"bold",marginBottom:"1rem"},
    container: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", maxWidth: "", width: "100%", margin: "auto" },
    card: { backgroundColor: "white", borderRadius: "1.25rem", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", padding: "1.5rem", width: "auto", textAlign: "center",flex:"2" },
    orderId: { fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" },
    status: { color: "#6b7280" },
    progressContainer: { marginTop: "1rem" },
    progressBar: { backgroundColor: "#e5e7eb", height: "8px", borderRadius: "4px", marginTop: "0.5rem", width: "100%", position: "relative" },
    progress: { backgroundColor: "#3b82f6", height: "100%", borderRadius: "4px", transition: "width 0.3s ease-in-out" },
    trackingContainer: { marginTop: "1rem", display: "flex", alignItems: "center", gap: "0.5rem", justifyContent: "center" },
    text: { color: "black", fontSize: "0.875rem" },
    text1: { color: "black", fontSize: "1rem" }
  };

  return (
    <div style={styles.dashboard}>
      <h1 style={styles.h1}>Current Orders</h1>
      <div style={styles.container}>
        {orderList.map((order, index) => (
          <div key={index} style={styles.card}>
            <p style={styles.orderId}>Order #{order._id}</p>
            <h2 style={styles.text1}> {order.bankName}<b>-</b> {order.address}</h2>
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
            <div style={styles.trackingContainer}><h3>Estimated Delivery:</h3><p style={styles.text}>{order.delivery}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default main1;