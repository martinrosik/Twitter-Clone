import { create } from "zustand";

export interface Tweet {
  id: number;
  content: string;
}

interface TweetStore {
  tweets: Tweet[];
  addTweet: (content: string) => void;
  deleteTweet: (id: number) => void;
  loadTweets: () => void;
}

export const useTweetStore = create<TweetStore>((set, get) => ({
  tweets: [],
  addTweet: (content: string) => {
    const newTweet: Tweet = { id: Date.now(), content };
    const newTweets = [newTweet, ...get().tweets];
    set({ tweets: newTweets });
    localStorage.setItem('tweets', JSON.stringify(newTweets));
  },
  deleteTweet: (id: number) => {
    const newTweets = get().tweets.filter((tweet) => tweet.id !== id);
    set({ tweets: newTweets });
    localStorage.setItem('tweets', JSON.stringify(newTweets));
  },
  loadTweets: () => {
    const stored: Tweet[] = JSON.parse(localStorage.getItem('tweets') || '[]');
    set({ tweets: stored });
  },
}));
