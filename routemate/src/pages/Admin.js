import { useNavigate } from "react-router-dom";

export const Admin = () => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    return navigate("/");
  }

  return (
    <main>
      <div className="component d-flex flex-column align-items-center">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit" onClick={onSubmit}>Login</button>
      </div>
    </main>
  )
}
