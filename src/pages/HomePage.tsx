import { NavBar, Toast } from "antd-mobile";
const back = () =>
  Toast.show({
    content: "نرو نرو",
    duration: 1000,
  });
const HomePage = () => {
  return <NavBar onBack={back}>سلام</NavBar>;
};

export default HomePage;
