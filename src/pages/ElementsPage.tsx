import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import WebApp from "@twa-dev/sdk";
interface ScoreData {
  "0": {
    userid: number;
    score: number;
    tree: number;
    light: number;
    water: number;
    wind: number;
    fire: number;
  };
}
const ElementsPage = () => {
  const [scoreData, setScoreData] = useState<ScoreData | null>(null);
  const userdata = WebApp.initDataUnsafe;
  const userid = userdata?.user?.id;

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const response = await fetch(
          `https://api.rahomaskan.com/api/score?tgid=${userid}`,
        );
        const data = await response.json();
        setScoreData(data);
      } catch (error) {
        console.error("Error fetching score data:", error);
      }
    };

    fetchScore();
  }, [userid]);

  return (
    <>
      <Nav />
      <h1>صفحه عناصر</h1>
      {scoreData && (
        <div>
          <h2>User Score</h2>
          <p>User ID: {scoreData["0"].userid}</p>
          <p>Score: {scoreData["0"].score}</p>
          <p>Tree: {scoreData["0"].tree}</p>
          <p>Light: {scoreData["0"].light}</p>
          <p>Water: {scoreData["0"].water}</p>
          <p>Wind: {scoreData["0"].wind}</p>
          <p>Fire: {scoreData["0"].fire}</p>
        </div>
      )}
    </>
  );
};

export default ElementsPage;
