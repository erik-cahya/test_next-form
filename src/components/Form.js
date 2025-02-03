import { useState } from "react";

const Form = ({ onSuccess }) => {
  const [formData, setFormData] = useState({ order: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formElement = event.target;
    const formDataObj = new FormData(formElement);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataObj).toString(),
      });

      if (response.ok) {
        onSuccess(); // Panggil fungsi navigasi dari parent
      } else {
        alert("Gagal mengirim data!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Terjadi kesalahan, coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form data-netlify="true" name="pizzaOrder" method="post" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="pizzaOrder" />
      <label>
        What order did the pizza give to the pineapple?
        <input name="order" type="text" value={formData.order} onChange={handleChange} required />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
