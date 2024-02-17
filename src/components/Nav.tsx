import { Avatar, NavBar, Space, Toast } from "antd-mobile";
import {
  AppstoreOutline,
  GiftOutline,
  HistogramOutline,
  InformationCircleOutline,
  RightOutline,
  ShrinkOutline,
} from "antd-mobile-icons";
import { Link } from "react-router-dom";
const back = () =>
  Toast.show({
    content: "نرو نرو",
    duration: 1000,
  });
const right = (
  <div style={{ fontSize: 24 }}>
    <Space style={{ "--gap": "16px" }}>
      <Link to={"/help"}>
        <InformationCircleOutline color="var(--adm-color-primary)" />
      </Link>

      <Link to={"/game"}>
        <ShrinkOutline />
      </Link>

      <Link to={"/invite"}>
        <GiftOutline />
      </Link>

      <Link to={"/ranking"}>
        <HistogramOutline />
      </Link>

      <Link to={"/elements"}>
        <AppstoreOutline />
      </Link>
    </Space>
  </div>
);
const left = (
  <div style={{ fontSize: 24 }}>
    <Space style={{ "--gap": "16px" }}>
      <Link to={"/profile"}>
        <Avatar src="" />
      </Link>
    </Space>
  </div>
);
const Nav = () => {
  return (
    <NavBar
      left={left}
      backArrow={<RightOutline color="var(--adm-color-primary)" />}
      right={right}
      onBack={back}
    ></NavBar>
  );
};

export default Nav;
