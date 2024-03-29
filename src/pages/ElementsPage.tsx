import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import WebApp from "@twa-dev/sdk";
import { Card, Divider, DotLoading, Grid } from "antd-mobile";
import data from "@emoji-mart/data";
import { init } from "emoji-mart";
init({ data });
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      "em-emoji": any;
    }
  }
}
interface ScoreData {
  "0": {
    userid: number;
    score: number;
    tree: number;
    light: number;
    water: number;
    wind: number;
    fire: number;
    earth: number;
  };
}
const ElementsPage = () => {
  const [scoreData, setScoreData] = useState<ScoreData | null>(null);
  const [isLoading, setIsLoading] = useState(true); // New state for loading status
  const userdata = WebApp.initDataUnsafe;
  const userid = userdata?.user?.id || 208627;

  useEffect(() => {
    const fetchScore = async () => {
      setIsLoading(true); // Set loading to true before fetching
      try {
        const response = await fetch(
          `https://api.rahomaskan.com/api/score?tgid=${userid}`,
        );
        const data = await response.json();
        setScoreData(data);
      } catch (error) {
        console.error("Error fetching score data:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchScore();
  }, [userid]);

  return (
    <>
      <Nav />
      <h1>صفحه عناصر</h1>
      {isLoading ? (
        <span style={{ fontSize: 24 }}>
          <DotLoading />
        </span>
      ) : scoreData ? (
        <>
          <Divider
            style={{
              color: "#1677ff",
              borderColor: "#1677ff",
              borderStyle: "dashed",
            }}
          >
            <em-emoji id="sunny"></em-emoji> دارایی{" "}
            <em-emoji id="deciduous_tree"></em-emoji>
          </Divider>
          <Grid columns={2} gap={[0, 24]}>
            <Grid.Item span={2}>
              <Card
                bodyStyle={{ background: "#eee" }}
                headerStyle={{ background: "#ddd", padding: "5px 15px" }}
                extra={<em-emoji id="moneybag"></em-emoji>}
                title="امتیاز"
              >
                <h2>{scoreData["0"].score.toString()}</h2>
              </Card>
            </Grid.Item>
            <Grid.Item>
              <Card
                headerClassName="suntreeCardHeader"
                bodyClassName="elementsCardBody"
                title={<em-emoji id="deciduous_tree" Size="5em"></em-emoji>}
              >
                <h3>{scoreData["0"].tree.toString()}</h3>
              </Card>
            </Grid.Item>
            <Grid.Item>
              <Card
                headerClassName="suntreeCardHeader"
                bodyClassName="elementsCardBody"
                title={<em-emoji id="sunny" Size="5em"></em-emoji>}
              >
                <h4>{scoreData["0"].light.toString()}</h4>
              </Card>
            </Grid.Item>
            <Grid.Item span={2}>
              <Divider
                style={{
                  color: "#1677ff",
                  borderColor: "#1677ff",
                  borderStyle: "dashed",
                }}
              >
                <em-emoji id="fire"></em-emoji>{" "}
                <em-emoji id="droplet"></em-emoji> عناصر{" "}
                <em-emoji id="wind_blowing_face"></em-emoji>{" "}
                <em-emoji id="large_brown_circle"></em-emoji>
              </Divider>
            </Grid.Item>

            <Grid.Item>
              <Card
                headerClassName="elementsCardHeader"
                bodyClassName="elementsCardBody"
                title={<em-emoji id="droplet" Size="5em"></em-emoji>}
              >
                {scoreData["0"].water.toString()}
              </Card>
            </Grid.Item>
            <Grid.Item>
              <Card
                headerClassName="elementsCardHeader"
                bodyClassName="elementsCardBody"
                title={<em-emoji id="wind_blowing_face" Size="5em"></em-emoji>}
              >
                {scoreData["0"].wind.toString()}
              </Card>
            </Grid.Item>
            <Grid.Item>
              <Card
                headerClassName="elementsCardHeader"
                bodyClassName="elementsCardBody"
                title={<em-emoji id="fire" Size="5em"></em-emoji>}
              >
                {scoreData["0"].fire.toString()}
              </Card>
            </Grid.Item>
            <Grid.Item>
              <Card
                headerClassName="elementsCardHeader"
                bodyClassName="elementsCardBody"
                title={<em-emoji id="large_brown_circle" Size="5em"></em-emoji>}
              >
                {scoreData["0"].earth.toString()}
              </Card>
            </Grid.Item>
          </Grid>
          <p>User ID: {scoreData["0"].userid}</p>
        </>
      ) : null}
    </>
  );
};

export default ElementsPage;
