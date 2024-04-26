import FAQ from "../../components/FAQ/FAQ";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import NavBar from "../../components/Navbar/Navbar";
import Section from "../../components/Section/Section";
import styles from "./HomePage.module.css";

const HomePage = ({
  topAlbums,
}) => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Section data={topAlbums} type="top" title="Top Albums" />
    </>
  );
};

export default HomePage;
