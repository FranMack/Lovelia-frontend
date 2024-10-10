import { useEffect } from "react";
import { Blog1,Blog2,Blog3 } from "../pages"

 const Blog = () => {
  useEffect(()=>{ window.scrollTo(0, 0);},[])
  return (
<main>

    <Blog1/>
    <Blog2/>
    <Blog3/>
</main>  )
}

export default Blog;