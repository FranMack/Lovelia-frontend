import videoHome from "../assets/video-home.mp4"

export const Home7 = () => {
  return (
    <section className="section7-home-container">
         <video controls>
        <source src={videoHome} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}
