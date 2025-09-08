import DevLens from "../assets/images/DevLens.svg";
import StyleSpy from "../assets/images/StyleSpy.svg"
import SpeedBoost from "../assets/images/SpeedBoost.svg"
import JSONWizard from "../assets/images/JSONWizard.svg"
import TabMasterPro from "../assets/images/TabMasterPro.svg" 
import ViewportBuddy from "../assets/images/ViewportBuddy.svg"
import Markup from "../assets/images/Markup.svg"
import GridGuides from "../assets/images/GridGuides.svg"
import Palette from "../assets/images/Palette.svg"
import LinkChecker from "../assets/images/LinkChecker.svg"
import dOM from "../assets/images/DOM.svg"
import ConsolePlus from "../assets/images/ConsolePlus.svg"


export default function Main() {
  let card = [
    {
      title: "DevLens",
      img: DevLens,
      desc: "Quickly inspect page layouts and visualize element boundaries.",
      isSub : false
    },
    {
      title: "StyleSpy",
      img: StyleSpy,
      desc: "Instantly analyze and copy CSS from any webpage element.",
      isSub : true
    },
    {
      title: "SpeedBoost",
      img: SpeedBoost,
      desc: "Optimizes browser resource usage to accelerate page loading.",
      isSub : true
    },
    {
      title: "JSONWizard",
      img: JSONWizard,
      desc: "Formats, validates, and prettifies JSON responses in-browser.",
      isSub : true
    },
    {
      title: "TabMaster Pro",
      img: TabMasterPro,
      desc: "Organizes browser tabs into groups and sessions.",
      isSub : false
    },
    {
      title: "ViewportBuddy",
      img: ViewportBuddy,
      desc: "Simulates various screen resolutions directly within the browser.",
      isSub : true
    },
    {
      title: "Markup Notes",
      img: Markup,
      desc: "Enables annotation and notes directly onto webpages for collaborative debugging.",
      isSub : false
    },
    {
      title: "GridGuides",
      img: GridGuides,
      desc: "Overlay customizable grids and alignment guides on any webpage.",
      isSub : true
    },
    {
      title: "Palette Picker",
      img: Palette,
      desc: "Instantly extracts color palettes from any webpage.",
      isSub : false
    },
    {
      title: "LinkChecker",
      img: LinkChecker,
      desc: "Scans and highlights broken links on any page.",
      isSub : true
    },
    {
      title: "DOM Snapshot",
      img: dOM,
      desc: "Capture and export DOM structures quickly.",
      isSub : false
    },
    {
      title: "ConsolePlus",
      img: ConsolePlus,
      desc: "Enhanced developer console with advanced filtering and logging.",
      isSub : true
    },
  ];

  return (
    <div className=" w-full h-[914px] gap-8 flex flex-col">
      <div className=" w-full h-[104] md:h-[46px] gap-5 flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center">
        <div className="w-60 h-[34px] text-[34px] font-bold ">
          <h1>Extensions List</h1>
        </div>
        <div className="flex w-[295px] h-[46px] gap-3">
          <button className="w-16 btn h-full bg-[#F25C54] rounded-4xl btn-active border-2 ">
            All
          </button>
          <button className="w-[95px] btn h-full bg-white dark:bg-[#2F364B] rounded-4xl btn-active border-2 ">
            Active
          </button>
          <button className="w-28 btn h-full  bg-white dark:bg-[#2F364B] rounded-4xl btn-active border-2 ">
            Inactive
          </button>
        </div>
      </div>
      <div className=" w-full h-[836px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3">
        {card.map((el, index) => (
          <div
            key={index}
            className="flex justify-between flex-col  bg-white dark:bg-[#2F364B] w-full h-[200px] p-5 rounded-2xl"
          >
            <div className=" flex w-full h-[76px] gap-4">
              <div className="w-[100px] h-[60px]">
                <img src={el.img} alt={el.title} className="w-full h-full" />
              </div>
              <div>
                <h1 className=" font-bold text-2xl">{el.title}</h1>
                <p className=" text-[16px]">{el.desc} </p>
              </div>
            </div>
            <div className="flex justify-between items-center w-full h-[38px]">
              <button className=" border border-gray-800 bg-[#05050700] rounded-2xl w-[91px] h-full">
                Remove
              </button>
              <input
                type="checkbox"
                checked={el.isSub}
                className="toggle  bg-[#535868] checked:border-red-500 checked:bg-red-400  checked:text-[#FBFDFE]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
