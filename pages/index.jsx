import ComparisonSlider from "../components/ComparisonSlider";

const Home = () => {
  return (
    // beforeImage, afterImage為圖片路徑 string
    <ComparisonSlider beforeImage="/images/before.jpg" afterImage="/images/after.jpg" />
  );
};

export default Home;
