import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManageClients from "./pages/client/ManageClients";
import Login from "./pages/auth/Login";
import { store } from "./store/store";
import { Provider } from "react-redux";
import AdminProtected from "./utils/AdminProtected";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ManageSites from "./pages/site/ManageSites";
import AddSite from "./pages/site/AddSite";
import AddClient from "./pages/client/AddClient";
import ManageGuard from "./pages/guard/ManageGuard";
import AddGuard from "./pages/guard/AddGuard";
import ViewSite from "./pages/site/ViewSite";
import ViewGuard from "./pages/guard/ViewGuard";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <div className="App">
            <Routes>
              <Route
                path="/"
                element={
                  // <AdminProtected>
                  <ManageClients />
                  // </AdminProtected>
                }
              />
              <Route path="/postSite" element={<ManageSites />} />
              <Route path="/addSite" element={<AddSite />} />
              <Route path="/addClient" element={<AddClient />} />
              <Route path="/addGuard" element={<AddGuard />} />
              <Route path="/guards" element={<ManageGuard />} />
              <Route path="/viewSite" element={<ViewSite />} />
              <Route path="/viewGuard" element={<ViewGuard />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
