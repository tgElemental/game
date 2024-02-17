import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { List, DotLoading } from "antd-mobile";

interface RankingItem {
  name: string;
  score: number;
}

const RankingPage = () => {
  const [data, setData] = useState<RankingItem[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.rahomaskan.com/api/ranking");
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Nav />
      {loading ? (
        <DotLoading />
      ) : (
        <List mode="card" header="رده بندی">
          {data.map((item, index) => (
            <List.Item title={index + 1} extra={item.score} key={index}>
              {item.name}
            </List.Item>
          ))}
        </List>
      )}
    </>
  );
};

export default RankingPage;
