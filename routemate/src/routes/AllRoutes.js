import { Navigate, Route, Routes } from "react-router-dom";
import { Admin, Contact, Contactau, Contactuk, Contactus, Home, PageNotFound, ProductDetails, ProductList } from "../pages/index";

export const AllRoutes = () => {
  const loggedin = true; // Simulating a logged-in user for demonstration

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/contact" element={<Contact />}>
        <Route path="au" element={<Contactau />} />
        <Route path="us" element={<Contactus />} />
        <Route path="uk" element={<Contactuk />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="/admin" element={loggedin ? <Admin /> : <Navigate to="/" />} />
    </Routes>
  )
}
