import { useState, useEffect, useContext } from "react";
import { TweetItem } from "../tweetItem/tweetItem";
import { TweetAdd } from "../tweetAdd/TweetAdd";
import api from "../../../_shared/api/axios";
import { AuthContext } from "../../../_shared/context/AuthContext";
import "./tweetList.css";

interface Tweet {
  _id: string;
  content: string;
  userId: string;
}

export function TweetList() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { userId: currentUserId } = useContext(AuthContext);

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

  const handleAddTweet = (tweet: Tweet) => {
    setTweets((prev) => [tweet, ...prev]);
  };

  const handleDeleteTweet = (id: string) => {
    setTweets((prev) => prev.filter((t) => t._id !== id));
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  // Split tweets into two groups
  const yourTweets = tweets.filter((t) => t.userId === currentUserId);
  const otherTweets = tweets.filter((t) => t.userId !== currentUserId);

  return (
    <div className="tweet-list">
      <TweetAdd onAdd={handleAddTweet} />

      <h2 className="tweet-list-title">Tweety ({tweets.length})</h2>

      {loading && <p className="tweet-loading">Načítavam...</p>}
      {error && <p className="tweet-error">{error}</p>}
      {!loading && !error && tweets.length === 0 && (
        <p className="tweet-empty-text">Zatiaľ žiadne tweety.</p>
      )}

      {yourTweets.length > 0 && (
        <>
          <h3 className="tweet-section-title">Your Tweets</h3>
          {yourTweets.map((tweet) => (
            <TweetItem
              key={tweet._id}
              id={tweet._id}
              content={tweet.content}
              userId={tweet.userId}
              currentUserId={currentUserId}
              onDelete={handleDeleteTweet}
            />
          ))}
        </>
      )}

      {otherTweets.length > 0 && (
        <>
          <h3 className="tweet-section-title">Other Tweets</h3>
          {otherTweets.map((tweet) => (
            <TweetItem
              key={tweet._id}
              id={tweet._id}
              content={tweet.content}
              userId={tweet.userId}
              currentUserId={currentUserId}
              onDelete={handleDeleteTweet}
            />
          ))}
        </>
      )}
    </div>
  );
}
