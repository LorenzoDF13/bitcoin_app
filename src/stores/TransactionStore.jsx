import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchText } from "react-native-svg";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useTransactionStore = create(
  persist(
    (set, get) => ({
      transactions: [
        {
          amountUsd: 10,
          date: "1710424794",
          receiver: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
          type: "Received",
        },
      ],
      addTransaction: (transaction) =>
        set(() => ({ transactions: [...get().transactions, transaction] })),
    }),
    {
      name: "transactions-storage", // unique name
      getStorage: createJSONStorage(() => AsyncStorage), // Add this here!
    }
  )
);
