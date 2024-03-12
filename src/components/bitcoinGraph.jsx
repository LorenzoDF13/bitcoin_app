import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Area, Chart, Line } from "react-native-responsive-linechart";

const BitcoinGraph = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.gemini.com/v2/ticker/btcusd")
      .then((response) => response.json())
      .then((data) => {
        setData(
          data.changes.map((change, i) => ({ y: parseInt(change), x: i }))
        );
      });
  }, []);
  return (
    <View>
      <Chart
        style={{ height: 130 }}
        data={data || [{ x: 1, y: 4 }]}
        padding={{ left: 0, bottom: 20, right: 20, top: 20 }}
        xDomain={{ min: 1, max: 10 }}
        yDomain={{
          min: data ? Math.min(...data.map((d) => d.y)) : 0,
          max: data ? Math.max(...data.map((d) => d.y)) : 1,
        }}
      >
        <Area
          theme={{
            gradient: {
              from: { color: "#0b447c" },
              to: { color: "#0b447c", opacity: 0.1 },
            },
          }}
        />
        <Line
          theme={{
            stroke: { color: "#0975dd", width: 2 },
          }}
        />
      </Chart>
    </View>
  );
};

export default BitcoinGraph;
