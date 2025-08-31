import { useEffect } from 'react';
import { useTweetsStore } from './TweetStore';
import { TweetItem } from '../tweetItem/tweetItem';
import './tweetList.css';

export function TweetList() {
  const { data: tweets, loading, error, loadTweets, deleteTweet } = useTweetsStore();

  useEffect(() => {
    loadTweets();
  }, [loadTweets]);

  return (
    <div className="tweet-list">
      <h2 className="tweet-list-title">Tweety ({tweets.length})</h2>

      {loading && <p className="tweet-loading">Načítavam tweety...</p>}

      {error && <p className="tweet-error">{error}</p>}

      {!loading && !error && tweets.length === 0 && (
        <div className="tweet-empty">
          <p className="tweet-empty-text">Zatiaľ žiadne tweety. Napíš prvý!</p>
        </div>
      )}

      {!loading && !error &&
        tweets.map((tweet) => (
          <TweetItem
            key={tweet.id}
            id={tweet.id}
            content={tweet.content}
            onDelete={deleteTweet}
          />
        ))}
    </div>
  );
}
