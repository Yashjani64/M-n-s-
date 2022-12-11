import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";

import Navigation from "../../components/navigation/Navigation";
import "./home.css";
export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        {/* <Post/> */}
        <Main />
        <Navigation />
      </div>
      <Footer />
    </>
  );
}
