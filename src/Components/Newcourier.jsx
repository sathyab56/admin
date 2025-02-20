import React, { useEffect, useState } from "react";

const CourierForm = () => {
  const [couriers, setCouriers] = useState([]);
  const [formData, setFormData] = useState({
    partnerName: "",
    serviceRegion: "",
    contactNumber: "",
    email: "",
    address: "",
    deliveryTimeframes: "",
    pricing: "",
    expressDelivery: false,
    standardDelivery: false,
    sameDayDelivery: false,
    internationalShipping: false,
  });
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    const savedCouriers = JSON.parse(localStorage.getItem("courierPartners")) || [];
    setCouriers(savedCouriers);
  }, []);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const addCourier = () => {
    if (!formData.partnerName || !formData.serviceRegion || !formData.contactNumber || !formData.email) {
      alert("Please fill in all required fields!");
      return;
    }

    const newCourier = { ...formData };
    const updatedCouriers = [...couriers, newCourier];
    setCouriers(updatedCouriers);
    localStorage.setItem("courierPartners", JSON.stringify(updatedCouriers));

    setFormData({
      partnerName: "",
      serviceRegion: "",
      contactNumber: "",
      email: "",
      address: "",
      deliveryTimeframes: "",
      pricing: "",
      expressDelivery: false,
      standardDelivery: false,
      sameDayDelivery: false,
      internationalShipping: false,
    });
  };

  const removeCourier = (index) => {
    const updatedCouriers = couriers.filter((_, i) => i !== index);
    setCouriers(updatedCouriers);
    localStorage.setItem("courierPartners", JSON.stringify(updatedCouriers));
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
        <button 
          style={{ padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
          onClick={() => setShowTable(!showTable)}
        >
          {showTable ? "Hide Courier Partners" : "View Courier Partners"}
        </button>
      </div>

      <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", marginTop: "20px" }}>
        <h2>Add Courier Partner</h2>
        {[
          { name: "partnerName", placeholder: "Partner Name" },
          { name: "serviceRegion", placeholder: "Service Region" },
          { name: "contactNumber", placeholder: "Contact Number" },
          { name: "email", placeholder: "Email", type: "email" },
          { name: "address", placeholder: "Address" },
          
        ].map(({ name, placeholder, type = "text" }) => (
          <input key={name} type={type} name={name} value={formData[name]} onChange={handleChange} placeholder={placeholder} required style={{ display: "block", marginBottom: "10px", padding: "8px", width: "100%", border: "1px solid black" }} />
        ))}

        {["ExpressDelivery", "StandardDelivery", "SamedayDelivery", "InternationalShipping"].map((name) => (
          <div key={name}>
            <label>
              <input type="checkbox" name={name} checked={formData[name]} onChange={handleChange} /> {name.replace(/([A-Z])/g, " $1").trim()}
            </label>
          </div>
        ))}
        {["DeliveryTimeframes", "Pricing"].map((name, i) => (
          <input key={i} type="text" name={name} value={formData[name]} onChange={handleChange} placeholder={name.replace(/([A-Z])/g, " $1")} required style={{ display: "block", marginBottom: "10px", padding: "8px", width: "100%", border: "1px solid black" }} />
        ))}

        <button style={{ padding: "10px", backgroundColor: "green", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginRight: "10px" }} onClick={addCourier}>Add Courier Partner</button>
        <button style={{ padding: "10px", backgroundColor: "red", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={() => setFormData({
          partnerName: "", serviceRegion: "", contactNumber: "", email: "", address: "", deliveryTimeframes: "", pricing: "", expressDelivery: false, standardDelivery: false, sameDayDelivery: false, internationalShipping: false,
        })}>Cancel</button>
      </div>

      {showTable && (
        <div style={{ marginTop: "20px" }}>
          <h3>Courier Partners List</h3>
          <table style={{ width: "100%", textAlign: "left", backgroundColor: "white", borderCollapse: "collapse", border: "2px solid black" }}>
            <thead>
              <tr>
                {["Partner Name", "Service Region", "Contact Number", "Email", "Address", "Delivery Timeframes", "Pricing", "Delivery Options", "Actions"].map((heading) => (
                  <th key={heading} style={{ border: "1px solid white", padding: "10px",textAlign :"center" }}>{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {couriers.map((courier, index) => (
                <tr key={index} style={{ borderBottom: "1px solid white" }}>
                  {["partnerName", "serviceRegion", "contactNumber", "email", "address", "deliveryTimeframes", "pricing"].map((key) => (
                    <td key={key} style={{ border: "1px solid white", padding: "10px" , }}>{courier[key]}</td>
                  ))}
                  <td style={{ border: "1px solid white", padding: "10px" }}>
                    {["expressDelivery", "standardDelivery", "sameDayDelivery", "internationalShipping"].filter(option => courier[option]).map(option => option.replace(/([A-Z])/g, " $1").trim()).join(", ")}
                  </td>
                  <td><button style={{ backgroundColor: "red", color: "white", padding: "5px" }} onClick={() => removeCourier(index)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CourierForm;