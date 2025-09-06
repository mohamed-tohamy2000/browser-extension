import Header from "./components/Header";
import Main from "./components/main";



export default function App() {
  return (
    <div className="w-full h-full flex justify-center items-center dark p-8 ">
      <div className="flex flex-col container gap-16  ">
        <Header/>
        <Main/>
      </div>

    </div>
  )
}
