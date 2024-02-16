import { Link } from "react-router-dom";
import { Typography, Image, Layout, Button, Skeleton } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { CaretRightOutlined } from "@ant-design/icons";
import { layoutStyle, contentStyle, footerStyle } from "../components/Styling";
import Typewriter from "typewriter-effect"; // Import the Typewriter component
const { Text } = Typography;

// Define the props type
interface PageTemplateProps {
  number: string;
  linkTo: string;
  title: string;
  image: string;
  paragraphText: string;
}
const { Title } = Typography;
// Use the props type in your component
const PageTemplate: React.FC<PageTemplateProps> = ({
  number,
  linkTo,
  title,
  image,
  paragraphText,
}) => {
  return (
    <Layout style={layoutStyle}>
      <Content style={contentStyle}>
        <Title>{title}</Title>
        <br />
        <Text>{number} / </Text>
        <Text type="secondary"> ۹ </Text>
        <br />
        <Image
          src={image}
          alt={title}
          placeholder={<Skeleton.Image active />}
          preview={false}
          className="mainimage"
          width={160}
          height={160}
        />
        <Typewriter
          options={{
            strings: [paragraphText],
            autoStart: true,
            loop: false,
            delay: 75,
          }}
        />
      </Content>
      <Footer style={footerStyle}>
        <Link to={linkTo} className="nextlink">
          <Button
            type="primary"
            size="large"
            block
            icon={<CaretRightOutlined />}
            style={{ width: "100%" }}
          >
            بعدی
          </Button>
        </Link>
      </Footer>
    </Layout>
  );
};

export default PageTemplate;
