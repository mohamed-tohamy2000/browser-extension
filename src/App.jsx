import Header from "./components/Header";
import Main from "./components/Main"



export default function App() {
  return (
    <div className="bg-[#EBF2FC] w-full h-full flex justify-center items-center dark:bg-black p-8 ">
      <div className="  flex flex-col container gap-16  ">
        <Header/>
        <Main/>
      </div>

    </div>
  )
}
