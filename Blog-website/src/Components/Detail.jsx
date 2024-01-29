import { useParams } from "react-router-dom"
import Data from "./Data"

export default function Detail() {
    const { id } = useParams();
    const post = Data[id];
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <p>Date: {post.date}</p>
    </div>
  )
}
