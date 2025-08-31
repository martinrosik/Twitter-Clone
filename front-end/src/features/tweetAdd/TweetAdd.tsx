import { useState} from 'react';
import { Send } from 'lucide-react';
import { useTweetsStore } from '../tweetList/TweetStore.ts';
import './tweetAdd.css'

export function TweetAdd() {
  const [tweetInput, setTweetInput] = useState('');
  const { addTweet } = useTweetsStore();

  const handleAddTweet = () => {
    if (tweetInput.trim()) {
      addTweet(tweetInput.trim());
      setTweetInput('');
    }
  };

  return (
    <div className="tweet-box">
      <h2 className="tweet-title">Napíš tweet</h2>
      <div className="tweet-form">
        <textarea
          value={tweetInput}
          onChange={(e) => setTweetInput(e.target.value)}
          placeholder="Čo máš na mysli ?"
          className="tweet-textarea"
          rows={4}
        />
        <div className="tweet-button-container">
          <button
            onClick={handleAddTweet}
            disabled={!tweetInput.trim()}
            className="tweet-button"
          >
            <Send size={16} />
            <span>Pridať tweet</span>
          </button>
        </div>
      </div>
    </div>
  );
}
