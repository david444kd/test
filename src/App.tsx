import { Link as RouterLink, Routes, Route } from "react-router-dom";
import {
  DropdownMenu,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  Button,
} from "@nextui-org/react";
import "./App.css";
import About from "./about";
import Contact from "./contact";
import { Progress } from "@nextui-org/progress";
import { useState } from "react";
import Forma from "./forma";
function App() {
  const [right, setRight] = useState(50);
  const [left, setLeft] = useState(50);

  function upGrade() {
    setRight(right + Math.floor(Math.random() * 5));
    setLeft(left - Math.floor(Math.random() * 5));
  }
  return (
    <div>
      <div>
        <header className="flex justify-between w-full items-center bg-gray-100">
          <div>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered" className="ml-[5%]" size="sm">
                  Menu
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Example with disabled actions"
                disabledKeys={["edit", "delete"]}
              >
                <DropdownItem key="first">First</DropdownItem>
                <DropdownItem key="second">Second</DropdownItem>
                <DropdownItem key="third">Third</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="flex gap-[10%] mr-[10%]">
            <div>
              <RouterLink to="/">Home</RouterLink>
            </div>
            <div>
              <RouterLink to="/about">About</RouterLink>
            </div>
            <div>
              <RouterLink to="/contact">Info</RouterLink>
            </div>
          </div>
        </header>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="grid grid-cols-2  h-[90vw] items-center justify-center">
                <div className="-rotate-90 mt-[30%]">
                  {/* className="flex justify-center mb-10 w-9/12 lg:w-1/5" */}
                  <Progress
                    aria-label="Loading..."
                    value={left}
                    className="max-w-xs"
                  />
                  <p className="rotate-90 text-center">{left}</p>
                </div>
                <div className="-rotate-90 mt-[30%]">
                  <p className="rotate-90 text-center">{right}</p>
                  <Progress
                    aria-label="Loading..."
                    value={right}
                    className="max-w-xs"
                  />
                </div>
                <div className="col-span-2 justify-center flex">
                  {/* className="mt-20" */}
                  <Button color="primary" onClick={upGrade}>
                    Насос
                  </Button>
                  {/* <div>
                  <p>{left}</p>
                  <p>{right}</p>
                </div> */}
                </div>
              </div>
              <Forma></Forma>
            </>
          }
        />
        {/* <Route path="/form" element={<Fjkd />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
