import { Link as RouterLink, Routes, Route } from "react-router-dom";
import {
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Modal,
  useDisclosure,
  Button,
  Card,
} from "@nextui-org/react";
// import ReactPlayer from "react-player";
import ReactPlayer from "react-player/youtube";

import "./App.css";
import About from "./about";
import Contact from "./contact";
import { Progress } from "@nextui-org/progress";
import { useState, useEffect } from "react";
import Forma from "./forma";
function App() {
  const [counter, setCounter] = useState(0);
  const { isOpen, onOpenChange } = useDisclosure();
  const [info, setInfo] = useState(false);
  const [read, setRead] = useState(false);
  const [right, setRight] = useState(50);
  const [left, setLeft] = useState(50);
  useEffect(() => {
    onOpenChange();
  }, []);

  function upGrade() {
    setRight(right + Math.floor(Math.random() * 5));
    setLeft(left - Math.floor(Math.random() * 5));
  }
  function sbros() {
    if (counter === 0) {
      if (left && right != 50) {
        let pravo = Math.random() * (53 - 51) + 51;
        let pravo1 = Number(pravo.toFixed(2));
        let levo = Math.random() * (49 - 45) + 45;
        let levo1 = Number(levo.toFixed(2));

        setRight(pravo1);
        setLeft(levo1);
        setCounter(1);
      }
    }
    if (counter === 1) {
      setRight(50);
      setLeft(50);
      setCounter(0);
    }
  }
  return (
    <div>
      <div>
        <header className="flex h-20 justify-between w-full items-center bg-white ">
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
          <div className="flex w-full items-center h-full gap-[10%] justify-around border-b">
            <div>
              <RouterLink to="/" className="font-bold text-primary-500">
                HOME
              </RouterLink>
            </div>
            <div>
              <RouterLink to="/about" className="font-bold text-primary-500">
                ABOUT
              </RouterLink>
            </div>
            <div>
              <RouterLink to="/contact" className="font-bold text-primary-500">
                INFO
              </RouterLink>
            </div>
            <div>
              {" "}
              <RouterLink to="/contact" className="font-bold text-primary-500">
                FORMULS
              </RouterLink>
            </div>
          </div>
        </header>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {info && (
                <div className="absolute w-screen h-screen z-50 bg-default-100">
                  <Card className="p-8 top-[10%] m-4 py-10">
                    <div className="flex flex-col gap-4 mb-2">
                      <h1 className="text-xl">Подготовка к эксперименту:</h1>
                      <p className="text-default-600">
                        Перед началом работы убедитесь, что параметры установки
                        находятся на исходных значениях, которые отображаются в
                        соответствующих полях интерфейса.
                      </p>
                      <h1 className="text-xl">Нагнетание давления:</h1>
                      <p className="text-default-600">
                        Нажмите кнопку "Насос" для увеличения давления в
                        системе.
                      </p>
                      <p className="text-default-600">
                        Как только достигнуто нужное давление, остановите
                        накачку и запишите разницу колен монометра в таблицу
                      </p>
                    </div>
                    <Button
                      onClick={() => {
                        setInfo(false);
                        setRead(true);
                      }}
                    >
                      Готово
                    </Button>
                  </Card>
                </div>
              )}

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
                  <p className="rotate-90 text-center mt-6">{left}</p>
                </div>
                <div className="-rotate-90 mt-[30%]">
                  <p className="rotate-90 text-center mb-6">{right}</p>
                  <Progress
                    aria-label="Loading..."
                    value={right}
                    className="max-w-xs"
                  />
                </div>
                <div className="col-span-2 justify-center flex flex-col w-[50%] m-auto gap-4">
                  {read && (
                    <div className="flex m-auto gap-3">
                      <Button
                        color="primary"
                        onClick={upGrade}
                        className="w-1/2"
                      >
                        Насос
                      </Button>
                      <Button
                        onClick={sbros}
                        className="bg-gray-400 border w-1/2"
                      >
                        Клапан
                      </Button>
                    </div>
                  )}
                  <Button
                    variant="shadow"
                    onClick={() => {
                      setInfo(true);
                      setRead(false);
                    }}
                    className="bg-orange-500"
                  >
                    Прочитать инструкции
                  </Button>
                </div>
              </div>
              {read && <Forma></Forma>}
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
