import { useState } from "react";
import emailjs from "emailjs-com";

interface ReservationForm {
  people: number;
  date: string;
  time: string;
}

const ContactPage: React.FC = () => {
  const [activeForm, setActiveForm] = useState<string>("reservation");
  const [reservation, setReservation] = useState<ReservationForm>({
    people: 1,
    date: "",
    time: "",
  });
  const [review, setReview] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendEmail = (formData: Record<string, unknown>, templateId: string) => {
    emailjs
      .send("service_wsoolyp", templateId , formData, "pgkzRYxYtct63QvyB")
      .then(() => alert("Form submitted successfully!"))
      .catch((error) => console.error("Error sending email:", error));
  };

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reservation.date || !reservation.time) {
      alert("Please fill in all reservation details.");
      return;
    }
    sendEmail({ type: "reservation", ...reservation }, "template_e30c8g9");
  };

  const submitReview = () => {
    if (review.trim() && name.trim()) {
      sendEmail({ type: "review", name, review }, "template_w8x7mu7");
      setReview("");
      setName("");
    } else {
      alert("Please enter your name and review.");
    }
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all contact details.");
      return;
    }
    sendEmail({ type: "contact", name, email, message }, "template_w8x7mu7");
  };

  return (
    <div className="container mx-auto p-6 my-30">
      <h2 className="text-3xl font-semibold text-center mb-6">Contact & Reservations</h2>
      
      <div className="flex justify-center mb-6 space-x-4">
        {[{ name: "Reserve a Table", id: "reservation" },
          { name: "Customer Reviews", id: "review" },
          { name: "Contact Us", id: "contact" }].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActiveForm(btn.id)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
              activeForm === btn.id ? "bg-orange-600 text-white" : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {btn.name}
          </button>
        ))}
      </div>
      
      {activeForm === "reservation" && (
        <form onSubmit={handleReservation} className="space-y-3 max-w-md mx-auto">
          <input type="number" min="1" max="20" value={reservation.people} onChange={(e) => setReservation({ ...reservation, people: Number(e.target.value) })} className="border p-2 rounded w-full" placeholder="Number of People" />
          <input type="date" value={reservation.date} onChange={(e) => setReservation({ ...reservation, date: e.target.value })} className="border p-2 rounded w-full" />
          <input type="time" value={reservation.time} onChange={(e) => setReservation({ ...reservation, time: e.target.value })} className="border p-2 rounded w-full" />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700">Confirm Reservation</button>
        </form>
      )}

      {activeForm === "review" && (
        <div className="max-w-md mx-auto">
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded w-full mb-2" />
          <input type="text" placeholder="Write a review..." value={review} onChange={(e) => setReview(e.target.value)} className="border p-2 rounded w-full mb-2" />
          <button onClick={submitReview} className="bg-orange-600 text-white px-4 py-2 rounded w-full hover:bg-orange-700">Submit Review</button>
        </div>
      )}

      {activeForm === "contact" && (
        <form onSubmit={handleContact} className="space-y-3 max-w-md mx-auto">
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded w-full" />
          <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded w-full" />
          <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} className="border p-2 rounded w-full h-24"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;
