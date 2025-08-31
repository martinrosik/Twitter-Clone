import { TweetAdd } from "../tweetAdd/TweetAdd";
import { TweetList } from "../tweetList/TweetList";
import './homePage.css';

export default function HomePage() {
  return (
    <main className="home-page">
      <div>
        <TweetAdd />
        <TweetList />
      </div>
    </main>
  )
}
