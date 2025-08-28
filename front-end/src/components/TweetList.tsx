import { useEffect } from 'react';
import { Trash2 } from 'lucide-react';
import { useTweetStore } from '../store/TweetStore.ts';
import '../styles/tweetlist.css'

export function TweetList() {
  const { tweets, deleteTweet, loadTweets } = useTweetStore();

  useEffect(() => {
    loadTweets();
  }, [loadTweets]);

  return (
    <div className="tweet-list">
      <h2 className="tweet-list-title">Tweety ({tweets.length})</h2>
      {tweets.length === 0 ? (
        <div className="tweet-empty">
          <p className="tweet-empty-text">Zatiaľ žiadne tweety. Napíš prvý!</p>
        </div>
      ) : (
        tweets.map((tweet) => (
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
        ))
      )}
    </div>
  );
}
