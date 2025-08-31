import { create } from "zustand";
import type { Tweet } from "../utils/tweets.api";
import { fetchTweets, createTweet, deleteTweet } from "../utils/tweets.api";

interface TweetsState {
  tweets: Tweet[];
  loading: boolean;
  loadTweets: () => Promise<void>;
  addTweet: (content: string) => Promise<void>;
  deleteTweet: (id: number) => Promise<void>;
}

export const useTweetsStore = create<TweetsState>((set) => ({
  tweets: [],
  loading: false,

  loadTweets: async () => {
    set({ loading: true });
    try {
      const data = await fetchTweets();
      set({ tweets: data });
    } finally {
      set({ loading: false });
    }
  },

  addTweet: async (content: string) => {
    const newTweet = await createTweet(content);
    set((state) => ({ tweets: [...state.tweets, newTweet] }));
  },

  deleteTweet: async (id: number) => {
    await deleteTweet(id);
    set((state) => ({ tweets: state.tweets.filter((t) => t.id !== id) }));
  },
}));
