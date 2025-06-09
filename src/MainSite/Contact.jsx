import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section
      id="contact"
      className="w-full bg-panel-light text-text-invert py-28 px-6 scroll-mt-24"
    >
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-bg-100 mb-4">
          Let’s Talk
        </h2>
        <p className="text-lg text-neutral-700">
          Questions? Collaborations? We’d love to hear from you. Drop a message
          below and we’ll get back to you soon.
        </p>
      </div>

      <form
        action="https://formspree.io/f/xdkzkrjo"
        method="POST"
        className="space-y-6 max-w-xl mx-auto"
      >
        {["name", "email", "message"].map((field, i) => {
          const isTextarea = field === "message";
          const label = field[0].toUpperCase() + field.slice(1);
          return (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium mb-1 text-text-invert"
              >
                {label}
              </label>
              {isTextarea ? (
                <textarea
                  id={field}
                  name={field}
                  rows="5"
                  className="w-full bg-white/70 text-bg-100 border border-border rounded-lg px-4 py-3 placeholder:text-border"
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  className="w-full bg-white/70 text-bg-100 border border-border rounded-lg px-4 py-3 placeholder:text-border"
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Your ${field}`}
                  required
                />
              )}
            </div>
          );
        })}

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-800 hover:cursor-pointer text-white font-semibold py-3 rounded-lg transition hover:brightness-110 active:scale-95"
        >
          Send Message
        </button>

        {statusMessage && (
          <p className="mt-6 text-accent-400 text-center font-medium">
            {statusMessage}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
