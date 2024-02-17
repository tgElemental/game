import { Avatar, Button, NavBar, Space, Toast } from "antd-mobile";
import {
  AppstoreOutline,
  GiftOutline,
  HistogramOutline,
  InformationCircleOutline,
  RightOutline,
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
        <Button>
          <Space>
            <InformationCircleOutline color="var(--adm-color-primary)" />
            <span>راهنما</span>
          </Space>
        </Button>
      </Link>

      <Link to={"/game"}>
        <Button>
          <Space>
            <GiftOutline />
            <span>بازی</span>
          </Space>
        </Button>
      </Link>

      <Link to={"/invite"}>
        <Button>
          <Space>
            <GiftOutline />
            <span>دعوت</span>
          </Space>
        </Button>
      </Link>

      <Link to={"/ranking"}>
        <Button>
          <Space>
            <HistogramOutline />
            <span>رده بندی</span>
          </Space>
        </Button>
      </Link>

      <Link to={"/elements"}>
        <Button>
          <Space>
            <AppstoreOutline />
            <span>عناصر</span>
          </Space>
        </Button>
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
      back={"برگشت"}
      onBack={back}
    >
      سلام
    </NavBar>
  );
};

export default Nav;
