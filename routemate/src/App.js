import { Footer, Header } from "./components/index";

import './App.css';
import { AllRoutes } from "./routes/AllRoutes";

function App() {

  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;