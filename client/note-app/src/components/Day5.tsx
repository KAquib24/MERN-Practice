// Handling Forms and Event
// src/components/ContactForm.tsx
import React, { useState } from "react";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function Day5({
  onSubmit,
}: {
  onSubmit?: (data: ContactFormData) => Promise<void> | void;
}) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const validateEmail = (value: string) =>
    /^\S+@\S+\.\S+$/.test(value.trim());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // important!
    setError(null);

    if (!name.trim() || !email.trim()) {
      setError("Name and email are required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const payload: ContactFormData = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    try {
      setLoading(true);
      await onSubmit?.(payload); // user-supplied submit handler (optional)
      // simple success behavior:
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError("Failed to submit. Try again.");
    } finally {
      setLoading(false);
    }
  }

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) =>{
   // you can access e.currentTarget, e.button, etc.
    // console.log("Button clicked", e.currentTarget);
    alert("Button clicked");
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "enter") {
      alert("Enter is clicked")
    }
  }

  return (
    <form className="max-w-md w-full p-6 bg-white rounded-lg shadow" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>

      {error && <div className="mb-3 text-sm text-red-600">{error}</div>}

      <label className="block mb-3">
        <span className="text-sm font-medium">Name</span>
        <input
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border p-2"
          placeholder="Your name"
          aria-label="Name"
          required
        />
      </label>

      <label className="block mb-3">
        <span className="text-sm font-medium">Email</span>
        <input
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border p-2"
          placeholder="you@example.com"
          type="email"
          aria-label="Email"
          required
        />
      </label>

      <label className="block mb-4">
        <span className="text-sm font-medium">Message</span>
        <textarea
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
          className="mt-1 block w-full rounded-md border p-2"
          rows={4}
          placeholder="Write your message..."
          aria-label="Message"
        />
      </label>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-60"
          aria-busy={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        <button
          type="button"
          onClick={() => {
            setName("");
            setEmail("");
            setMessage("");
            setError(null);
          }}
          className="px-3 py-2 text-sm border rounded"
        >
          Clear
        </button>
        <button onClick={handleButton} className="px-4 py-2 bg-green-600 text-white rounded">handleButton</button>
        <input
        onKeyDown={handleKeyDown}
        className="border p-2 rounded"
        placeholder="Press Enter"
      />
      </div>
    </form>
  );
}
