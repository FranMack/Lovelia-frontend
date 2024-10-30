import { useNavigate, useParams } from "react-router";
import {  LazyImage } from "../../ui/components";
import { blogNotes } from "../assets/ blogNotes";
import { useContext, useEffect, useState } from "react";
import { moreArticles } from "../assets/infoArticulos";
import avatar from "../../../public/isologo-lovelia.png"
import { TimerContext } from "../../context/timerContext";
import { ShopingCartContext } from "../../context";



 const BlogNote = () => {

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



  const{activatedAlarm}=useContext(TimerContext)
  const {shopingCartOpen}=useContext(ShopingCartContext)


  return (
    <main className={activatedAlarm || shopingCartOpen ? "viewport-background":""}>
    <section className="blogNote-container">
      
      <div className="blogNote-top-container">
        <small>{`Incio / Blog / ${blogNotes[index-1].title}`}</small>
        <div className="image-container">
          <img src={blogNotes[index-1].image1} alt="blog image" />
        </div>
      </div>

      <div className="blogNote-center-container">
        <div className="title-container">
          <h2>{blogNotes[index-1].title}</h2>

          <div className="title-bottom-container">
          <div className="blogNote-avatar-container">
            <img src={avatar} alt="author picture" />
          </div>
          <h4>
            {`${blogNotes[index-1].author}`} - <span>{`${blogNotes[index-1].date}`}</span>
          </h4>
          </div>
          
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


      <div className="blogNote-botton-title-container">
        <h3>Otras notas:</h3>
     
      </div>
      <div className="blog-historias-container">
        {moreArticles.map((articulo, i) => {
          return (
            <div className={`blog-historias-card card${i}`} key={i}>
              <LazyImage src={articulo.image} alt={articulo.tittle} />

              <h6>{articulo.author}</h6>
              <h4>{articulo.tittle}</h4>
              <p>{articulo.date}</p>
            </div>
          );
        })}
      </div>
    </section>
    </main>
  );
};

export default BlogNote