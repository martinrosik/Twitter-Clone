import { Trash2 } from 'lucide-react';
import './tweetItem.css';

interface TweetItemProps {
  id: number;
  content: string;
  onDelete: (id: number) => void;
}

export function TweetItem({ id, content, onDelete }: TweetItemProps) {
  return (
    <div className="tweet-item">
      <div className="tweet-item-header">
        <p className="tweet-content">{content}</p>
        <button
          onClick={() => onDelete(id)}
          className="tweet-delete-button"
          title="Zmazať tweet"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}
