import { Link } from "react-router-dom";
import Data from './Data';

export default function List() {
  return (
    <div>
         <h2>Blog Posts</h2>
      <ul>
        {Data.map((post, index) => (
          <li key={index}>
            <Link to={`/post/${index}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
