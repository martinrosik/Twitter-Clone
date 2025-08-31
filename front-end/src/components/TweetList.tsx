import { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import { useTweetsStore } from '../store/TweetStore.ts';
import '../styles/tweetlist.css';

export function TweetList() {
  const { tweets, deleteTweet, loadTweets } = useTweetsStore();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTweets = async () => {
      setLoading(true);
      setError(null);
      try {
        await loadTweets();
      } catch (err) {
        setError('Nepodarilo sa načítať tweety. Skúste znova.');
      } finally {
        setLoading(false);
      }
    };

    fetchTweets();
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
