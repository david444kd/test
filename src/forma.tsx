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
import Formula1 from "./images/formula1";
import Formula2 from "./images/formula2";
import Formula3 from "./images/formula3";
import Formula4 from "./images/formula4";
import Formula5 from "./images/formula5";
import Formula6 from "./images/formula6";
import Formula7 from "./images/formula7";
import Formula8 from "./images/formula8";
import Formula9 from "./images/formula9";

const Forma = () => {
  return (
    <Table aria-label="Example static collection table" className="">
      <TableHeader>
        <TableColumn>
          <Formula1></Formula1>
        </TableColumn>
        <TableColumn>
          <Formula2></Formula2>
        </TableColumn>
        <TableColumn>
          <Formula3></Formula3>
        </TableColumn>
        <TableColumn>
          <Formula4></Formula4>
        </TableColumn>
        <TableColumn>
          <Formula5></Formula5>
        </TableColumn>
        <TableColumn>
          <Formula6></Formula6>
        </TableColumn>
        <TableColumn>
          <Formula7></Formula7>
        </TableColumn>
        <TableColumn>
          <Formula8></Formula8>
        </TableColumn>
        <TableColumn>
          <Formula9></Formula9>
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
