import { TweetList } from "../../tweets/list/TweetList";
import '../homePage.css';

export default function HomePage() {
  return (
    <main className="home-page">
      <div>
        <TweetList />
      </div>
    </main>
  )
}
