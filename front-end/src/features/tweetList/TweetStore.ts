import { create } from "zustand";
import type { Tweet } from "../../_shared/api/tweets.api";
import { fetchTweets, createTweet, deleteTweet } from "../../_shared/api/tweets.api";

interface TweetsState {
  data: Tweet[];
  loading: boolean;
  error: string | null;
  loadTweets: () => Promise<void>;
  addTweet: (content: string) => Promise<void>;
  deleteTweet: (id: number) => Promise<void>;
}

export const useTweetsStore = create<TweetsState>((set) => ({
  data: [],
  loading: false,
  error: null,

  loadTweets: async () => {
    set({ loading: true, error: null });
    try {
      const tweets = await fetchTweets();
      set({ data: tweets });
    } catch (err: any) {
      set({ error: "Nepodarilo sa načítať tweety. Skúste znova." });
    } finally {
      set({ loading: false });
    }
  },

  addTweet: async (content: string) => {
    set({ loading: true, error: null });
    try {
      const newTweet = await createTweet(content);
      set((state) => ({ data: [...state.data, newTweet] }));
    } catch (err: any) {
      set({ error: "Nepodarilo sa pridať tweet. Skúste znova." });
    } finally {
      set({ loading: false });
    }
  },

  deleteTweet: async (id: number) => {
    set({ loading: true, error: null });
    try {
      await deleteTweet(id);
      set((state) => ({ data: state.data.filter((t) => t.id !== id) }));
    } catch (err: any) {
      set({ error: "Nepodarilo sa zmazať tweet. Skúste znova." });
    } finally {
      set({ loading: false });
    }
  },
}));
