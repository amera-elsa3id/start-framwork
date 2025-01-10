import logo from "../../assets/avataaars.svg"
import StarLine from './../StarLine/StarLine';

export default function Home() {
  return (
    <>
    <div className=" text-white text-center">
    <div className="img">
      <img src={logo} alt="Logo" className="w-100 mb-2" />
    </div>
    <h2 className=" fw-bold fs-1">Start Framework</h2>
    <StarLine/>
    <p  className="fs-5"> Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </>
  )
}
