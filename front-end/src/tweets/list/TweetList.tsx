import { useEffect, useState } from "react";
import { TweetItem } from "../item/tweetItem";
import { TweetAdd } from "../add/TweetAdd";
import api from "../../_shared/api/axios";
import { useAuthStore } from "../../_shared/store/useAuthStore";
import "./tweetList.css";

interface Tweet {
  _id: string;
  content: string;
  userId: string;
}

export function TweetList() {
  function useTweetsFetch() {
    const [tweets, setTweets] = useState<Tweet[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchTweets = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await api.get<Tweet[]>("/tweets");
        setTweets(res.data);
      } catch {
        setError("Nepodarilo sa načítať tweety.");
      } finally {
        setLoading(false);
      }
    };

    const addTweet = (tweet: Tweet) => {
      setTweets((prev) => [tweet, ...prev]);
    };

    const deleteTweet = (id: string) => {
      setTweets((prev) => prev.filter((t) => t._id !== id));
    };

    useEffect(() => {
      fetchTweets();
    }, []);

    return { tweets, loading, error, addTweet, deleteTweet };
  }

  const { tweets, loading, error, addTweet, deleteTweet } = useTweetsFetch();
  const { userId } = useAuthStore();

  return (
    <div className="tweet-list">
      {userId && <TweetAdd onAdd={addTweet} />}

      <h2 className="tweet-list-title">Tweety ({tweets.length})</h2>

      {loading && <p className="tweet-loading">Načítavam...</p>}
      {error && <p className="tweet-error">{error}</p>}
      {!loading && !error && tweets.length === 0 && (
        <p className="tweet-empty-text">Zatiaľ žiadne tweety.</p>
      )}

      {tweets.map((tweet) => (
        <TweetItem
          key={tweet._id}
          id={tweet._id}
          content={tweet.content}
          userId={tweet.userId}
          currentUserId={userId}
          onDelete={deleteTweet}
        />
      ))}
    </div>
  );
}
