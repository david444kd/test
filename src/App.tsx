import { Link as RouterLink, Routes, Route } from "react-router-dom";
import {
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Modal,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import ReactPlayer from "react-player";
import "./App.css";
import About from "./about";
import Contact from "./contact";
import { Progress } from "@nextui-org/progress";
import { useState, useEffect } from "react";
import Forma from "./forma";
function App() {
  const { isOpen, onOpenChange } = useDisclosure();
  const [right, setRight] = useState(50);
  const [left, setLeft] = useState(50);
  useEffect(() => {
    onOpenChange();
  }, []);

  function upGrade() {
    setRight(right + Math.floor(Math.random() * 5));
    setLeft(left - Math.floor(Math.random() * 5));
  }
  return (
    <div>
      <div>
        <header className="flex h-14 justify-between w-full items-center bg-gray-100">
          <div>
            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              size="xs"
              className="m-auto"
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 text-primary-500">
                      Что нужно знать перед началом эксперимента
                    </ModalHeader>
                    <ModalBody>
                      <p className="text-default-600">
                        Добро пожаловать в виртуальную лабораторную работу по
                        определению теплоёмкостей Cp и Cv методом
                        Клемана-Дезорма! Здесь вы сможете провести эксперимент
                        по определению теплоёмкостей газа при постоянном
                        давлении и объёме с помощью классического метода.
                      </p>
                      <p className="text-primary-500">Обратите внимание:</p>
                      <ul className="flex flex-col gap-1">
                        <li className="text-default-600">
                          1) Формулы, необходимые для расчётов, вы можете найти
                          в меню, выбрав соответствующий пункт.
                        </li>
                        <li className="text-default-600">
                          2) Подробную информацию о выполнении эксперимента
                          также можно найти в меню.
                        </li>
                        <li className="text-default-600">
                          3) Если у вас возникнут вопросы, комментарии или
                          предложения, посетите раздел с информацией об авторах
                          и контактами, который также находится в меню.
                        </li>
                      </ul>
                      <p>
                        Нажмите "Начать эксперимент", чтобы приступить к
                        выполнению. Желаем успехов!
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onPress={onClose}>
                        Начать эксперимент!
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
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
              <div className="flex justify-center">
                <ReactPlayer
                  light
                  url="https://youtu.be/c9DIoSNoQNs?si=xmIniMwsckxlj-k1"
                  controls
                  playing
                  // playIcon={}
                />
              </div>
              <div className="grid grid-cols-2  h-[90vw] items-center justify-center">
                <div className="-rotate-90 mt-[30%]">
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
                  <Button color="primary" onClick={upGrade}>
                    Насос
                  </Button>
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
