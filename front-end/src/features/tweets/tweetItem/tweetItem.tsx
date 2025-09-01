import { Trash2 } from "lucide-react";
import { useState } from "react";
import api from "../../../_shared/api/axios";
import "./tweetItem.css";

interface TweetItemProps {
  id: number;
  content: string;
  onDelete: (id: number) => void;
}

export function TweetItem({ id, content, onDelete }: TweetItemProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteTweet = async () => {
    setLoading(true);
    setError(null);
    try {
      await api.delete(`/tweets/${id}`);
      onDelete(id);
    } catch {
      setError("Nepodarilo sa zmazať tweet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tweet-item">
      <div className="tweet-item-header">
        <p className="tweet-content">{content}</p>
        <button
          onClick={deleteTweet}
          disabled={loading}
          className="tweet-delete-button"
          title="Zmazať tweet"
        >
          <Trash2 size={16} />
        </button>
      </div>
      {error && <p className="tweet-error">{error}</p>}
    </div>
  );
}
