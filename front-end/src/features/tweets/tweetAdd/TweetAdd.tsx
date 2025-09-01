import { useState } from "react";
import { Send } from "lucide-react";
import api from "../../../_shared/api/axios";
import "./tweetAdd.css";

interface Tweet {
  _id: string;
  content: string;
}

interface TweetAddProps {
  onAdd: (tweet: Tweet) => void;
}

export function TweetAdd({ onAdd }: TweetAddProps) {
  const [tweetInput, setTweetInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addTweet = async () => {
    const content = tweetInput.trim();
    if (!content) return;

    setLoading(true);
    setError(null);
    try {
      const res = await api.post<Tweet>("/tweets", { content });
      onAdd(res.data);
      setTweetInput("");
    } catch {
      setError("Nepodarilo sa pridať tweet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tweet-box">
      <h2 className="tweet-title">Napíš tweet</h2>
      <div className="tweet-form">
        <textarea
          id="tweet-content"
          name="tweetContent"       
          value={tweetInput}
          onChange={(e) => setTweetInput(e.target.value)}
          placeholder="Čo máš na mysli?"
          className="tweet-textarea"
          rows={4}
        />
        <div className="tweet-button-container">
          <button
            onClick={addTweet}
            disabled={!tweetInput.trim() || loading}
            className="tweet-button"
          >
            <Send size={16} />
            <span>{loading ? "Pridávam..." : "Pridať tweet"}</span>
          </button>
        </div>
        {error && <p className="tweet-error">{error}</p>}
      </div>
    </div>
  );
}
