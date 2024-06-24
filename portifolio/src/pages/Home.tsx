import logoImage from "../../public/logo.svg"
import GridProject from "../components/GridProject"

function Home() {
  return (
    <div className='h-screen w-full bg-primary'>

      <nav className="text-white font-semibold text-md  flex justify-around lg:justify-between max-w-[1200px] mx-auto p-3 items-center">
        <img width={36} src={logoImage}/>
        <ul className="flex gap-x-20">
          <li className="cursor-pointer hover:text-primaryComplement hover:scale-95 transition-all delay-75">Home</li>
          <li className="cursor-pointer hover:text-primaryComplement hover:scale-95 transition-all delay-75">About</li>
          <li className="cursor-pointer hover:text-primaryComplement hover:scale-95 transition-all delay-75">Contact</li>
        </ul>
      </nav>
      <main className="">
          <GridProject/>
      </main>
    </div>


  )
}

export default Home