import { Card, Image } from "@nextui-org/react";
import img1 from "../src/images/IMG_5383 2.jpg";
import img2 from "../src/images/IMG_5385.jpg";
import img3 from "../src/images/IMG_5386.jpg";
import img4 from "../src/images/IMG_5387.jpg";
import img5 from "../src/images/IMG_5388.jpg";
import img6 from "../src/images/IMG_5389.jpg";
import img7 from "../src/images/tg_image_2687291458.png";

const About = () => {
  return (
    <div className="flex justify-center pt-16">
      {/* <div className="w-full p-5 h-[90%]"></div> */}
      <div className="flex justify-center flex-col items-center">
        <h1 className="font-bold">Лабораторная работа № 18</h1>
        <h3>
          Определение отношения удельных теплоёмкостей методом Клемана - Дезорма
        </h3>
        <div className="flex justify-center flex-col items-center gap-2 pt-6">
          <p className="italic">Порядок работы</p>
          <p>
            Перед началом работы убедитесь, что параметры установки находятся на
            исходных значениях в соответствующих полях интерфейса.
          </p>
          <Card className="flex w-full">
            <div className="grid gap-4 grid-cols-2 justify-center items-center p-4">
              <p className="text-xs">
                1. Нажатием кнопки <span className="font-bold">"Насос"</span>{" "}
                насосом нагнетают воздух в сосуд А. При этом разность уровней
                жидкости в коленах манометра выбудете видеть на схеме, а также в
                таблице в графе h1
              </p>
              <Image className="border" src={img1}></Image>
            </div>
          </Card>

          <Card className="flex w-full">
            <div className="grid gap-4 grid-cols-2 justify-center items-center p-4">
              <p className="text-xs">
                2. После нажатия кнопки "Клапан" из сосуда выпускается воздух,
                то есть происходит адиабатическое расширение, которое
                сопровождается понижением температуры ниже комнатной и
                уменьшением давления до величины атмосферного. После этого
                клапан закрывается, и температура повышается до комнатной, что
                сопровождается повышением давления, о чем мы можем судить по
                показаниям манометра на рисунке (разность в коленах манометра
                h2).
              </p>
              <Image className="border" src={img2}></Image>
            </div>
          </Card>
          <Card className="flex w-full">
            <div className="flex flex-col gap-4 p-4">
              <div className="grid  grid-cols-2 justify-center items-center">
                <p className="text-xs">3. Вычислить γ по формуле</p>
                <div className="flex w-full justify-center">
                  <div className="w-[50%] ">
                    <Image src={img3}></Image>
                  </div>
                </div>
              </div>
              <p className="text-xs">4. Опыт повторить 7 раз.</p>
              <div className="grid  grid-cols-2 justify-center items-center">
                <p className="text-xs">
                  5. Найти среднее арифметическое значение
                </p>
                <Image src={img4}></Image>
              </div>
              <div className="grid  grid-cols-2 justify-center items-center">
                <p className="text-xs">
                  6. Определить среднюю квадратичную ошибку среднего
                  арифметического значения{" "}
                </p>
                <Image src={img5}></Image>
              </div>
              <div className="grid  grid-cols-2 justify-center items-center">
                <p className="text-xs">
                  7. При заданных доверительной вероятности Р = 0,95 и числе
                  опытов п = 7 определить доверительный интервал Δγ найденного
                  среднего арифметического значения отношения γ = Cр / Cv:
                </p>
                <Image src={img6}></Image>
              </div>
              <div className="grid justify-center items-center">
                <p className="text-xs">8. Данные занести в таблицу</p>
                <Image src={img7}></Image>
              </div>
              <p className="text-xs">
                Написать вывод по результатам выполненной работы.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
