import img1 from "../src/img/1.png";
import img2 from "../src/img/2.png";
import img3 from "../src/img/3.png";
import img4 from "../src/img/4.png";
import img5 from "../src/img/5.png";
import img6 from "../src/img/6.png";
import img7 from "../src/img/7.png";
import img8 from "../src/img/8.png";
import img9 from "../src/img/9.png";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
const Forma = () => {
  return (
    // <div className="grid grid-cols-9 justify-center items-center text-center border-1 border-solid  border-black">
    //   <div>
    //     <img src={img1} alt="" />
    //   </div>
    //   <div>
    //     <img src={img2} alt="" />
    //   </div>
    //   <div>
    //     <img src={img3} alt="" />
    //   </div>
    //   <div>
    //     <img src={img4} alt="" />
    //   </div>
    //   <div>
    //     <img src={img5} alt="" />
    //   </div>
    //   <div>
    //     <img src={img6} alt="" />
    //   </div>
    //   <div>
    //     <img src={img7} alt="" />
    //   </div>
    //   <div>
    //     <img src={img8} alt="" />
    //   </div>
    //   <div>
    //     <img src={img9} alt="" />
    //   </div>
    // </div>
    <Table aria-label="Example static collection table" className="">
      <TableHeader>
        <TableColumn>
          <img className="w-12 m-auto" src={img1} alt="" />
        </TableColumn>
        <TableColumn>
          <img className="w-12 m-auto" src={img2} alt="" />
        </TableColumn>
        <TableColumn>
          <img className="w-24 m-auto" src={img3} alt="" />
        </TableColumn>
        <TableColumn>
          <img className="w-12 m-auto" src={img4} alt="" />
        </TableColumn>
        <TableColumn>
          <img className="w-24 m-auto" src={img5} alt="" />
        </TableColumn>
        <TableColumn>
          <img className="w-24  m-auto" src={img6} alt="" />
        </TableColumn>
        <TableColumn>
          <img className="w-24  m-auto" src={img7} alt="" />
        </TableColumn>
        <TableColumn>
          <img className="w-24  m-auto" src={img8} alt="" />
        </TableColumn>
        <TableColumn>
          <img className="w-24  m-auto" src={img9} alt="" />
        </TableColumn>
      </TableHeader>

      <TableBody>
        {/* Строка 1  */}
        <TableRow key="1" className="">
          <TableCell>
            <input className="bg-slate-200 w-20"></input>
          </TableCell>
          <TableCell>
            <input className="bg-slate-200 w-20"></input>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell>
            {" "}
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell rowSpan={7}>0</TableCell>
          <TableCell>0</TableCell>
          <TableCell rowSpan={7}>0</TableCell>
          <TableCell rowSpan={7}>0</TableCell>
          <TableCell rowSpan={7}>0</TableCell>
        </TableRow>

        {/* Строка 2  */}
        <TableRow key="2">
          <TableCell>
            <input className="bg-slate-200 w-20"></input>
          </TableCell>
          <TableCell>
            <input className="bg-slate-200 w-20"></input>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell>
            {" "}
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell>0</TableCell>
          <TableCell className="hidden">Active</TableCell>
          <TableCell className="hidden">Tony Reichert</TableCell>
          <TableCell className="hidden">CEO</TableCell>
          <TableCell className="hidden">Active</TableCell>
        </TableRow>

        {/* Строка 3  */}
        <TableRow key="3">
          <TableCell>
            <input className="bg-slate-200 w-20"></input>
          </TableCell>
          <TableCell>
            <input className="bg-slate-200 w-20"></input>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell>
            {" "}
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell>0</TableCell>
          <TableCell className="hidden">Active</TableCell>
          <TableCell className="hidden">Tony Reichert</TableCell>
          <TableCell className="hidden">CEO</TableCell>
          <TableCell className="hidden">Active</TableCell>
        </TableRow>

        {/* Строка 4  */}
        <TableRow key="4">
          <TableCell>
            <input className="bg-slate-200 w-20"></input>
          </TableCell>
          <TableCell>
            <input className="bg-slate-200 w-20"></input>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell>
            {" "}
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell>0</TableCell>
          <TableCell className="hidden">Active</TableCell>
          <TableCell className="hidden">Tony Reichert</TableCell>
          <TableCell className="hidden">CEO</TableCell>
          <TableCell className="hidden">Active</TableCell>
        </TableRow>

        {/* Строка 5  */}
        <TableRow key="5">
          <TableCell>
            <input className="bg-slate-200 w-20"></input>
          </TableCell>
          <TableCell>
            <input className="bg-slate-200 w-20"></input>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell>
            {" "}
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell>0</TableCell>
          <TableCell className="hidden">Active</TableCell>
          <TableCell className="hidden">Tony Reichert</TableCell>
          <TableCell className="hidden">CEO</TableCell>
          <TableCell className="hidden">Active</TableCell>
        </TableRow>

        {/* Строка 6  */}
        <TableRow key="6">
          <TableCell>
            <input className="bg-slate-200 w-20"></input>
          </TableCell>
          <TableCell>
            <input className="bg-slate-200 w-20"></input>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell>
            {" "}
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell>0</TableCell>
          <TableCell className="hidden">Active</TableCell>
          <TableCell className="hidden">Tony Reichert</TableCell>
          <TableCell className="hidden">CEO</TableCell>
          <TableCell className="hidden">Active</TableCell>
        </TableRow>
        {/* Строка 7  */}
        <TableRow key="7">
          <TableCell>
            <input className="bg-slate-200 w-20"></input>
          </TableCell>
          <TableCell>
            <input className="bg-slate-200 w-20"></input>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell>
            {" "}
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell>0</TableCell>

          <TableCell className="hidden">Active</TableCell>
          <TableCell className="hidden">Tony Reichert</TableCell>
          <TableCell className="hidden">CEO</TableCell>
          <TableCell className="hidden">Active</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Forma;
