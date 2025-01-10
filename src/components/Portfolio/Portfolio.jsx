import { useState } from "react"
import img1 from "../../assets/port/port1.png"
import img2 from "../../assets/port/port2.png"
import img3 from "../../assets/port/port3.png"

export default function Portfolio() {
  let [img,setImg]=useState()
  let [images,] = useState([
    {src:img1,id:"img1"},
    {src:img2,id:"img2"},
    {src:img3,id:"img3"},
    {src:img1,id:"img4"},
    {src:img2,id:"img5"},
    {src:img3,id:"img6"},
  ])
  function changeImg(img){
   
    console.log(img)
    setImg(img)
  }
  return (
    <>
    <div className='light-bg text-dark bg-light text-center flex-grow-1 pt-5 mt-5 align-self-stretch'>
      <h2 className='dark-heading text-uppercase fw-bold fs-2'>portfolio component</h2>
      <div className="d-flex justify-content-center align-items-center my-3">
      <div className="line line-dark me-2"></div>
      <i className="fa-solid fa-star"></i>
      <div className="line line-dark ms-2"></div>
    </div>
    <div className="container">
      <div className="row g-3">
        {images.map((img)=><div key={img.id} className="col-md-4">
          <div id={img.id} className=" position-relative card" onClick={()=>changeImg(img.src)} >
            <img src={img.src} className="w-100 rounded"/>
            <div className=" position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center bg-blue rounded">
            <i className="fa-solid fa-plus fa-5x text-white"></i>
            </div>
          </div>
        </div>)}
       {img? <div className="d-flex align-items-center justify-content-center position-fixed z-3  m-0 top-0 start-0 end-0 bottom-0 bg-blue-trans" onClick={()=>changeImg()}>
          <img src={img} alt="" className="w-25 rounded" />
        </div>:null}
        
      </div>
    </div>
    </div>
    </>
  )
}
