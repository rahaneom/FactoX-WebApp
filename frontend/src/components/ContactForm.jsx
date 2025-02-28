import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateInput = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateInput()) {
      try {
        const res = await axios.post(
          "https://factox-webapp.onrender.com/api/contact",
          formData
        );
        if (res.status === 201) {
          toast.success("Message sent successfully!");
          setSubmitted(true);

          setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
          }, 2000);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("Something went wrong. Try again.");
      }
    } else {
      toast.error("Please fill in all fields correctly.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen contact-bg pt-16">
      <form
        onSubmit={handleSubmit}
        className="bg-transparent backdrop-blur-xl border border-gray-700 text-white p-8 rounded-lg shadow-lg w-full max-w-md transition-transform transform scale-100 hover:scale-[1.02]"
      >
        <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-400 mb-6">
          Contact Us
        </h2>

        <label className="block mb-2">Name:</label>
        <input
          type="text"
          className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 input-box focus:outline-none  focus:border-blue-500 text-white"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <label className="block mt-4 mb-2">Email:</label>
        <input
          type="email"
          className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 input-box focus:outline-none focus:border-blue-500 text-white"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <label className="block mt-4 mb-2">Message:</label>
        <textarea
          className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 input-box focus:outline-none focus:border-blue-500 text-white"
          rows="4"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}

        <button
          type="submit"
          className={`mt-4 w-full py-2 rounded text-white transition-all ${
            submitted
              ? "bg-green-500 cursor-not-allowed"
              : "bg-gradient-to-b from-green-400 to-green-900 hover:bg-blue-500"
          }`}
          disabled={submitted}
        >
          {submitted ? "Submitted ✔" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
