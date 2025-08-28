import { TweetForm } from '../components/TweetForm';
import { TweetList } from '../components/TweetList';

export default function TweetComponent() {
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <TweetForm />
      <TweetList />
    </div>
  );
}