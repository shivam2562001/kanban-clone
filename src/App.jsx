import { useRef, useState } from "react";
//import SearchBar from './components/SearchBar'
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import SectionTab from "./components/SectionTab";
import CustomButton from "./components/CustomButton";
import FormatOption from "./components/FormatOption";
import KanbanTab from "./components/KanbanTab";
import CustomCard from "./components/CustomCard";
import sceneone from "./assets/sceneone.png";
import scenetwo from "./assets/scene2.png";
import plantone from "./assets/plant1.png";
import planttwo from "./assets/plant2.png";
import "./App.css";
function App() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="flex flex-row bg-white justify-start items-start w-full  ">
      <SideBar />
      <div className="flex flex-col flex-auto h-[100vh] ">
        <Navbar />
        <div className="flex overflow-y-scroll flex-col flex-auto h-[100vh]">
        <div className="flex  mt-2 py-4 px-14 ">
          <SectionTab title={"Mobile App"} />
        </div>
        <div className="flex flex-row mt-1 py-4 px-14 justify-between items-center">
          <div className="flex flex-row gap-x-4">
            <CustomButton>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.6 1H12.4C13.1333 1 13.7333 1.6 13.7333 2.33333V3.8C13.7333 4.33333 13.4 5 13.0667 5.33333L10.2 7.86667C9.8 8.2 9.53333 8.86667 9.53333 9.4V12.2667C9.53333 12.6667 9.26666 13.2 8.93333 13.4L8 14C7.13333 14.5333 5.93333 13.9333 5.93333 12.8667V9.33333C5.93333 8.86667 5.66666 8.26667 5.4 7.93333L2.86666 5.26667C2.53333 4.93333 2.26666 4.33333 2.26666 3.93333V2.4C2.26666 1.6 2.86666 1 3.6 1Z"
                  stroke="#787486"
                  stroke-width="1.3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div>Filter</div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00001 11.2C7.53335 11.2 7.06668 11.02 6.71335 10.6667L2.36668 6.32C2.17335 6.12667 2.17335 5.80667 2.36668 5.61334C2.56001 5.42 2.88001 5.42 3.07335 5.61334L7.42001 9.96C7.74001 10.28 8.26001 10.28 8.58001 9.96L12.9267 5.61334C13.12 5.42 13.44 5.42 13.6333 5.61334C13.8267 5.80667 13.8267 6.12667 13.6333 6.32L9.28668 10.6667C8.93335 11.02 8.46668 11.2 8.00001 11.2Z"
                  fill="#787486"
                />
              </svg>
            </CustomButton>
            <CustomButton>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33334 1.33333V3.33333"
                  stroke="#787486"
                  stroke-width="1.3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6667 1.33333V3.33333"
                  stroke="#787486"
                  stroke-width="1.3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6667 2.33333C12.8867 2.45333 14 3.29999 14 6.43333V10.5533C14 13.3 13.3333 14.6733 10 14.6733H6C2.66667 14.6733 2 13.3 2 10.5533V6.43333C2 3.29999 3.11333 2.45999 5.33333 2.33333H10.6667Z"
                  stroke="#787486"
                  stroke-width="1.3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.8333 11.7333H2.16666"
                  stroke="#787486"
                  stroke-width="1.3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.00001 5.5C7.18001 5.5 6.48668 5.94667 6.48668 6.81333C6.48668 7.22667 6.68001 7.54 6.97334 7.74C6.56668 7.98 6.33334 8.36667 6.33334 8.82C6.33334 9.64667 6.96668 10.16 8.00001 10.16C9.02668 10.16 9.66668 9.64667 9.66668 8.82C9.66668 8.36667 9.43334 7.97333 9.02001 7.74C9.32001 7.53333 9.50668 7.22667 9.50668 6.81333C9.50668 5.94667 8.82001 5.5 8.00001 5.5ZM8.00001 7.39333C7.65334 7.39333 7.40001 7.18667 7.40001 6.86C7.40001 6.52667 7.65334 6.33333 8.00001 6.33333C8.34668 6.33333 8.60001 6.52667 8.60001 6.86C8.60001 7.18667 8.34668 7.39333 8.00001 7.39333ZM8.00001 9.33333C7.56001 9.33333 7.24001 9.11333 7.24001 8.71333C7.24001 8.31333 7.56001 8.1 8.00001 8.1C8.44001 8.1 8.76001 8.32 8.76001 8.71333C8.76001 9.11333 8.44001 9.33333 8.00001 9.33333Z"
                  fill="#787486"
                />
              </svg>

              <div>Today</div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00001 11.2C7.53335 11.2 7.06668 11.02 6.71335 10.6667L2.36668 6.32C2.17335 6.12667 2.17335 5.80667 2.36668 5.61334C2.56001 5.42 2.88001 5.42 3.07335 5.61334L7.42001 9.96C7.74001 10.28 8.26001 10.28 8.58001 9.96L12.9267 5.61334C13.12 5.42 13.44 5.42 13.6333 5.61334C13.8267 5.80667 13.8267 6.12667 13.6333 6.32L9.28668 10.6667C8.93335 11.02 8.46668 11.2 8.00001 11.2Z"
                  fill="#787486"
                />
              </svg>
            </CustomButton>
          </div>
          <div className="flex flex-row gap-x-2 items-center">
            <CustomButton>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.1064 7.74666C6.0864 7.74666 6.07307 7.74666 6.05307 7.74666C6.01973 7.73999 5.97307 7.73999 5.93307 7.74666C3.99973 7.68666 2.53973 6.16666 2.53973 4.29333C2.53973 2.38666 4.09307 0.833328 5.99973 0.833328C7.9064 0.833328 9.45973 2.38666 9.45973 4.29333C9.45307 6.16666 7.9864 7.68666 6.1264 7.74666C6.11973 7.74666 6.11307 7.74666 6.1064 7.74666ZM5.99973 1.83333C4.6464 1.83333 3.53973 2.93999 3.53973 4.29333C3.53973 5.62666 4.57973 6.69999 5.9064 6.74666C5.9464 6.73999 6.03307 6.73999 6.11973 6.74666C7.4264 6.68666 8.45307 5.61333 8.45973 4.29333C8.45973 2.93999 7.35307 1.83333 5.99973 1.83333Z"
                  fill="#787486"
                />
                <path
                  d="M11.0264 7.83334C11.0064 7.83334 10.9864 7.83334 10.9664 7.82667C10.6931 7.85334 10.4131 7.66001 10.3864 7.38667C10.3597 7.11334 10.5264 6.86667 10.7997 6.83334C10.8797 6.82667 10.9664 6.82667 11.0397 6.82667C12.0131 6.77334 12.7731 5.97334 12.7731 4.99334C12.7731 3.98001 11.9531 3.16 10.9397 3.16C10.6664 3.16667 10.4397 2.94001 10.4397 2.66667C10.4397 2.39334 10.6664 2.16667 10.9397 2.16667C12.4997 2.16667 13.7731 3.44001 13.7731 5.00001C13.7731 6.53334 12.5731 7.77334 11.0464 7.83334C11.0397 7.83334 11.0331 7.83334 11.0264 7.83334Z"
                  fill="#787486"
                />
                <path
                  d="M6.11307 15.0333C4.80641 15.0333 3.49307 14.7 2.49974 14.0333C1.57307 13.42 1.06641 12.58 1.06641 11.6667C1.06641 10.7533 1.57307 9.90667 2.49974 9.28667C4.49974 7.96001 7.73974 7.96001 9.72641 9.28667C10.6464 9.90001 11.1597 10.74 11.1597 11.6533C11.1597 12.5667 10.6531 13.4133 9.72641 14.0333C8.72641 14.7 7.41974 15.0333 6.11307 15.0333ZM3.05307 10.1267C2.41307 10.5533 2.06641 11.1 2.06641 11.6733C2.06641 12.24 2.41974 12.7867 3.05307 13.2067C4.71307 14.32 7.51307 14.32 9.17307 13.2067C9.81307 12.78 10.1597 12.2333 10.1597 11.66C10.1597 11.0933 9.80641 10.5467 9.17307 10.1267C7.51307 9.02 4.71307 9.02 3.05307 10.1267Z"
                  fill="#787486"
                />
                <path
                  d="M12.2264 13.8333C11.9931 13.8333 11.7864 13.6733 11.7397 13.4333C11.6864 13.16 11.8597 12.9 12.1264 12.84C12.5464 12.7533 12.9331 12.5867 13.2331 12.3533C13.6131 12.0667 13.8197 11.7067 13.8197 11.3267C13.8197 10.9467 13.6131 10.5867 13.2397 10.3067C12.9464 10.08 12.5797 9.92 12.1464 9.82C11.8797 9.76 11.7064 9.49333 11.7664 9.22C11.8264 8.95333 12.0931 8.78 12.3664 8.84C12.9397 8.96666 13.4397 9.19333 13.8464 9.50666C14.4664 9.97333 14.8197 10.6333 14.8197 11.3267C14.8197 12.02 14.4597 12.68 13.8397 13.1533C13.4264 13.4733 12.9064 13.7067 12.3331 13.82C12.2931 13.8333 12.2597 13.8333 12.2264 13.8333Z"
                  fill="#787486"
                />
              </svg>

              <div>share</div>
            </CustomButton>
            <svg
              width="2"
              height="29"
              viewBox="0 0 2 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 0.5V28.5" stroke="#787486" />
            </svg>
            <FormatOption isActive={isActive} setIsActive={setIsActive} />
          </div>
        </div>
        <div className="flex flex-row px-14 gap-x-4  justify-between flex-auto ">
          <KanbanTab
            title={"To Do"}
            color={"darkblue"}
            numofcard={4}
            editable={true}
          >
            <CustomCard priority={"low"} headTitle={"Brain Stroming"}>
              {
                "Brainstorming brings team members' diverse experience into play."
              }
            </CustomCard>
            <CustomCard priority={"high"} headTitle={"Research"}>
              {
                "User research helps you to create an optimal product for users."
              }
            </CustomCard>
            <CustomCard priority={"high"} headTitle={"Wireframes"}>
              {
                "Low fidelity wireframes include the most basic content and visuals."
              }
            </CustomCard>
          </KanbanTab>
          <KanbanTab title={"On Progress"} color={"lemonorange"} numofcard={3}>
            <CustomCard
              priority={"low"}
              headTitle={"Onboarding Illustrations "}
            >
              <img src={sceneone} width={280} height={110} />
            </CustomCard>
            <CustomCard priority={"low"} headTitle={"Mobile App Design"}>
              <div className="flex flex-row gap-x-2">
                <img src={plantone} width={130} height={80} />
                <img src={planttwo} width={130} height={80} />
              </div>
            </CustomCard>
          </KanbanTab>
          <KanbanTab title={"Done"} color={"skygreen"} numofcard={2}>
            <CustomCard priority={"completed"} headTitle={"Mobile App Design"}>
              <img src={scenetwo} width={280} height={110} />
            </CustomCard>
            <CustomCard priority={"completed"} headTitle={"Design System"}>
              {"It just needs to adapt the UI from what you did before "}
            </CustomCard>
          </KanbanTab>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
