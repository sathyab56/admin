import { useState, useEffect } from "react";

export default function SupplierManagement() {
  const [suppliers, setSuppliers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    gst: "",
    products: "",
    price: "",
    gstValue: "",
    contact: "",
    address: "",
  });

  useEffect(() => {
    const storedSuppliers = JSON.parse(localStorage.getItem("suppliers")) || [];
    setSuppliers(storedSuppliers);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const addSupplier = () => {
    if (!formData.gst) {
      alert("GST Number is required!");
      return;
    }
    const updatedSuppliers = [...suppliers, formData];
    setSuppliers(updatedSuppliers);
    localStorage.setItem("suppliers", JSON.stringify(updatedSuppliers));
    alert("Supplier added successfully!");
    setFormData({ name: "", gst: "", products: "", price: "", gstValue: "", contact: "", address: "" });
  };

  const removeSupplier = (index) => {
    const updatedSuppliers = suppliers.filter((_, i) => i !== index);
    setSuppliers(updatedSuppliers);
    localStorage.setItem("suppliers", JSON.stringify(updatedSuppliers));
  };

  const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-cover bg-center p-5" style={{ backgroundImage: "url('background.png')" }}>
      <header className="flex justify-between items-center p-4 ">
        <div></div>
        <div className="flex gap-3">
          <button
            onClick={() => document.getElementById("supplierList").scrollIntoView()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800"
          >
            View Suppliers
          </button>
        </div>
      </header>

      <div id="addSupplier" className="max-w-xl mx-auto bg-white p-6 rounded shadow mt-6">
        <h2 className="text-lg font-semibold mb-4">Add New Supplier</h2>
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type={key === "price" || key === "gstValue" ? "number" : "text"}
            id={key}
            value={formData[key]}
            onChange={handleChange}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            className="w-full p-2 border rounded mb-3"
          />
        ))}
        <button onClick={addSupplier} className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-800">
          Submit
        </button>
      </div>

      <div id="supplierList" className="max-w-4xl mx-auto mt-6">
        <div className="flex justify-between items-center bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold">Supplier List</h2>
          <input
            type="text"
            placeholder="Search Supplier by Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded"
          />
        </div>

        <table className="w-full mt-4 bg-white shadow rounded">
          <thead>
            <tr className="bg-blue-100 text-left">
              <th className="p-3">Supplier</th>
              <th className="p-3">GST Number</th>
              <th className="p-3">Products Supplied</th>
              <th className="p-3">Price</th>
              <th className="p-3">GST Value</th>
              <th className="p-3">Contact Number</th>
              <th className="p-3">Address</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSuppliers.map((supplier, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{supplier.name}</td>
                <td className="p-3">{supplier.gst}</td>
                <td className="p-3">{supplier.products}</td>
                <td className="p-3">{supplier.price}</td>
                <td className="p-3">{supplier.gstValue}</td>
                <td className="p-3">{supplier.contact}</td>
                <td className="p-3">{supplier.address}</td>
                <td className="p-3">
                  <button 
                    onClick={() => removeSupplier(index)} 
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}