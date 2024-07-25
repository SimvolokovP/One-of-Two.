import AppRoutes from "./components/AppRoutes/AppRoutes";
import Header from "./components/Header/Header";
import MobileBar from "./components/MobileBar/MobileBar";
import MobileLogo from "./components/MobileLogo/MobileLogo";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <MobileLogo />
        <MobileBar />
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
