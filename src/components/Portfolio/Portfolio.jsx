import { useState } from "react"


export default function Portfolio() {
  let [img,setImg]=useState()
  let [images,setImages] = useState([
    {src:'./src/assets/port/port1.png',id:"img1"},
    {src:'./src/assets/port/port2.png',id:"img2"},
    {src:'./src/assets/port/port3.png',id:"img3"},
    {src:'./src/assets/port/port1.png',id:"img4"},
    {src:'./src/assets/port/port2.png',id:"img5"},
    {src:'./src/assets/port/port3.png',id:"img6"},
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
