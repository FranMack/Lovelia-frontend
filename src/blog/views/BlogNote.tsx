import { useNavigate, useParams } from "react-router";
import { BackgroundVideo } from "../../ui/components";
import { blogNotes } from "../assets/ blogNotes";
import { useEffect, useState } from "react";



export const BlogNote = () => {

  const navigate=useNavigate()

  const {id}=useParams()
  const [index,setIndex]=useState<number>(1)

  useEffect(()=>{
    if(id){
      window.scrollTo(0,0)
      
      if(Number(id)>blogNotes.length || !Number(id) ){
        navigate("/")
        return
      }
      setIndex(Number(id))
    }
  },[id])




  return (
    <section className="blogNote-container">
      <BackgroundVideo/>
      <div className="blogNote-top-container">
        <small>{`Incio / Blog / ${blogNotes[index-1].title}`}</small>
        <div className="image-container">
          <img src={blogNotes[index-1].image1} alt="blog image" />
        </div>
      </div>

      <div className="blogNote-center-container">
        <div className="title-container">
          <h2>{blogNotes[index-1].title}</h2>
          <h3>Una experiencia puede cambiar muchas cosas.</h3>
          <h4>
            {`${blogNotes[index-1].author}`} <span>{`${blogNotes[index-1].date}`}</span>
          </h4>
        </div>

        <div className="text-container">
      {blogNotes[index-1].paragraphs1.map((item,i)=>{
        return(<p key={i}>{item}</p>)
      })}
          <div className="image-container">
            <img src={blogNotes[index-1].image2} alt="blog image" />
          </div>
          {blogNotes[index-1].paragraphs2.map((item,i)=>{
        return(<p key={i}>{item}</p>)
      })}
        </div>
      </div>
    </section>
  );
};
