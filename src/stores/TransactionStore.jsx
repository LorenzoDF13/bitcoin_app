import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchText } from "react-native-svg";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { useBitcoinStore } from "./BitcoinStore";

export const useTransactionStore = create(
  persist(
    (set, get) => ({
      transactions: [
        {
          amountUsd: useBitcoinStore.getState().usd,
          date: "1710424794000",
          receiver: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
          type: "Received",
        },
      ],
      addTransaction: (transaction) =>
        set(() => ({ transactions: [transaction, ...get().transactions] })),
      resetTransactions: () => set(() => ({ transactions: [] })),
    }),
    {
      name: "transactions-storage", // unique name
      storage: createJSONStorage(() => AsyncStorage), // Add this here!
    }
  )
);
