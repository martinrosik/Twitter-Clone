import { useEffect } from 'react';
import { Trash2 } from 'lucide-react';
import { useTweetsStore } from '../store/TweetStore';
import '../styles/tweetlist.css';

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

      {!loading && !error && tweets.map((tweet) => (
        <div key={tweet.id} className="tweet-item">
          <div className="tweet-item-header">
            <p className="tweet-content">{tweet.content}</p>
            <button
              onClick={() => deleteTweet(tweet.id)}
              className="tweet-delete-button"
              title="Zmazať tweet"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
