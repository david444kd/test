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
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell rowSpan={7}>
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
          <TableCell rowSpan={7}>
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell rowSpan={7}>
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell rowSpan={7}>
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
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
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
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
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
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
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
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
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
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
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
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
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="px-10">
              0
            </label>
          </TableCell>

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
