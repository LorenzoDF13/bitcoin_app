import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchText } from "react-native-svg";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useTransactionStore = create(
  persist(
    (set, get) => ({
      transactions: [],
      addTransaction: (transaction) =>
        set(() => ({ transactions: [...get().transactions, transaction] })),
    }),
    {
      name: "transactions-storage", // unique name
      getStorage: createJSONStorage(() => AsyncStorage), // Add this here!
    }
  )
);
