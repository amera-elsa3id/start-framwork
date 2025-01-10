

export default function Contact() {
  return (
    <><div className='light-bg text-dark bg-light text-center flex-grow-1 pt-5 mt-5 align-self-stretch con'>
      <h2 className='dark-heading text-uppercase fw-bold fs-1'>Contact Section</h2>
      <div className="d-flex justify-content-center align-items-center my-3">
      <div className="line line-dark me-2"></div>
      <i className="fa-solid fa-star"></i>
      <div className="line line-dark ms-2"></div>
    </div>
      <div className="container ">
        <div className="w-50 mx-auto d-flex flex-column mt-5">
          <div className="form-floating mb-4  ">
      <input type="text" className="form-control border-0 border-bottom" id="name" placeholder="name@example.com"/>
      <label htmlFor="name">userName</label>
</div>
        <div className="form-floating mb-4  ">
      <input type="number" className="form-control border-0 border-bottom" id="age" placeholder="name@example.com"/>
      <label htmlFor="age">userAge</label>
</div>
        <div className="form-floating mb-4  ">
      <input type="email" className="form-control border-0 border-bottom" id="user" placeholder="name@example.com"/>
      <label htmlFor="email">userEmail</label>
</div>
        <div className="form-floating mb-4  ">
      <input type="password" className="form-control border-0 border-bottom" id="pass" placeholder="name@example.com"/>
      <label htmlFor="pass">userPassword</label>
</div>
<div className="btn btn-bg text-white ">Send Message</div>
        </div>
        
      </div>
      
    </div>
    </>
  )
}
