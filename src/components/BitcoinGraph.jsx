import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Area, Chart, Line } from "react-native-responsive-linechart";

const BitcoinGraph = ({ LineColor, ToColor, heigth }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.blockchain.info/charts/market-price?timespan=1y")
      .then((response) => response.json())
      .then((data) => {
        setData(data.values);
      });
  }, []);
  return (
    <View>
      <Chart
        style={{ height: heigth || 150 }}
        data={data || [{ x: 1, y: 4 }]}
        padding={{ left: 0, bottom: 20, right: 0, top: 20 }}
        xDomain={{
          min: data ? Math.min(...data.map((d) => d.x)) : 0,
          max: data ? Math.max(...data.map((d) => d.x)) : 1,
        }}
        yDomain={{
          min: data ? Math.min(...data.map((d) => d.y)) - 1000 : 0,
          max: data ? Math.max(...data.map((d) => d.y)) : 1,
        }}
      >
        <Area
          theme={{
            gradient: {
              from: { color: LineColor },
              to: { color: ToColor, opacity: 0.01 },
            },
          }}
        />
        <Line
          theme={{
            stroke: { color: LineColor, width: 1 },
          }}
        />
      </Chart>
    </View>
  );
};

export default BitcoinGraph;
