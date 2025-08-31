import api from "../api/axios";

export interface Tweet {
  id: number;
  content: string;
}

export const fetchTweets = async (): Promise<Tweet[]> => {
  const res = await api.get<Tweet[]>("/tweets");
  return res.data;
};

export const createTweet = async (content: string): Promise<Tweet> => {
  const res = await api.post<Tweet>("/tweets", { content });
  return res.data;
};

export const deleteTweet = async (id: number): Promise<void> => {
  await api.delete(`/tweets/${id}`);
};  
