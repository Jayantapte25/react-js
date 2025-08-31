import { Outlet, useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <main>
      <Outlet />
      <div className="component">
        <div className="contact">Contact Us</div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  )
}
