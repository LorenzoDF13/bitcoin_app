import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchText } from "react-native-svg";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useBitcoinStore = create(
  persist(
    (set, get) => ({
      usd: "2.000",
      bitcoin: 0,
      last_24h_change: 0,
      btcPrice: "0",
      setBtcPrice: (btcPrice) => set({ btcPrice }),
      setUsd: (usd) => set({ usd }),
      setLast24hChange: (last_24h_change) => set({ last_24h_change }),
      setBitcoin: (bitcoin) => set({ bitcoin }),
    }),
    {
      name: "bitcoin-storage", // unique name
      getStorage: createJSONStorage(() => AsyncStorage), // Add this here!
    }
  )
);
