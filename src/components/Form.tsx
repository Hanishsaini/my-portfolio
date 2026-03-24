// "use client";

// import { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";

// export default function Form() {
//   const formRef = useRef<HTMLFormElement | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!formRef.current) return;

//     setLoading(true);

//     try {
//       const result = await emailjs.sendForm(
//         "service_j7alnzv",       // ✅ confirm from EmailJS
//         "template_2be5567",      // ✅ confirm from EmailJS
//         formRef.current,
//         "zosR_3PTe7vlmdu7X"      // ✅ public key
//       );

//       console.log("SUCCESS:", result.text);

//       setSuccess(true);
//       formRef.current.reset();
//     } catch (error: any) {
//       console.error("FULL EMAILJS ERROR:", {
//         status: error?.status,
//         text: error?.text,
//         error: error,
//       });

//       alert("Failed to send message. Check console for details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (success) {
//     return (
//       <div className="text-center py-20 text-2xl text-gray-300">
//         ✅ Thank you. I’ll get back to you within 24 hours.
//       </div>
//     );
//   }

//   return (
//     <form
//       ref={formRef}
//       onSubmit={handleSubmit}
//       className="max-w-lg space-y-8"
//     >
//       <input
//         type="text"
//         name="from_name"
//         placeholder="Name"
//         required
//         className="w-full bg-transparent border-b border-white/30 pb-4 text-lg outline-none focus:border-white/60 placeholder:text-gray-500"
//       />

//       <input
//         type="email"
//         name="from_email"
//         placeholder="Email"
//         required
//         className="w-full bg-transparent border-b border-white/30 pb-4 text-lg outline-none focus:border-white/60 placeholder:text-gray-500"
//       />

//       <textarea
//         name="problem"
//         placeholder="What do you want to automate?"
//         required
//         rows={3}
//         className="w-full bg-transparent border-b border-white/30 pb-4 text-lg outline-none focus:border-white/60 placeholder:text-gray-500 resize-none"
//       />

//       <textarea
//         name="current_process"
//         placeholder="Describe your current process (optional)"
//         rows={3}
//         className="w-full bg-transparent border-b border-white/30 pb-4 text-lg outline-none focus:border-white/60 placeholder:text-gray-500 resize-none"
//       />

//       <button
//         type="submit"
//         disabled={loading}
//         className="mt-8 border border-white/40 px-10 py-4 text-sm hover:border-white transition-colors disabled:opacity-50"
//       >
//         {loading ? "SENDING..." : "START A PROJECT"}
//       </button>
//     </form>
//   );
// }

"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    try {
      const result = await emailjs.sendForm(
        "service_j7alnzv",
        "template_2be5567",
        formRef.current,
        "zosR_3PTe7vlmdu7X"
      );
      console.log("SUCCESS:", result.text);
      setSuccess(true);
      formRef.current.reset();
    } catch (error: any) {
      console.error("FULL EMAILJS ERROR:", {
        status: error?.status,
        text: error?.text,
        error: error,
      });
      alert("Failed to send message. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-12 text-xl text-gray-300">
        ✅ Thank you. I'll get back to you within 24 hours.
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="max-w-md mx-auto space-y-8">
      <input
        type="text"
        name="from_name"
        placeholder="Name"
        required
        className="w-full bg-transparent border-b border-white/30 pb-3 text-lg outline-none focus:border-white transition-colors placeholder:text-gray-500"
      />
      <input
        type="email"
        name="from_email"
        placeholder="Email"
        required
        className="w-full bg-transparent border-b border-white/30 pb-3 text-lg outline-none focus:border-white transition-colors placeholder:text-gray-500"
      />
      <textarea
        name="problem"
        placeholder="What do you want to automate?"
        required
        rows={3}
        className="w-full bg-transparent border-b border-white/30 pb-3 text-lg outline-none focus:border-white transition-colors placeholder:text-gray-500 resize-none"
      />
      <textarea
        name="current_process"
        placeholder="Describe your current process (optional)"
        rows={3}
        className="w-full bg-transparent border-b border-white/30 pb-3 text-lg outline-none focus:border-white transition-colors placeholder:text-gray-500 resize-none"
      />
      <button
        type="submit"
        disabled={loading}
        className="mt-6 border border-white/40 px-10 py-4 text-sm hover:border-white transition-all duration-300 disabled:opacity-50"
      >
        {loading ? "SENDING..." : "START A PROJECT"}
      </button>
    </form>
  );
}