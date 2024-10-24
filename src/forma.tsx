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
        <TableColumn className="">
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
            {/* <input
              type=""
              className="bg-slate-200 w-20"
              placeholder="h1"
            ></input> */}
            <p id="row1_h1" className="w-10"></p>
          </TableCell>
          <TableCell>
            {/* <input
              type=""
              className="bg-slate-200 w-20"
              placeholder="h2"
            ></input> */}
            <p id="row1_h2" className="w-10"></p>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
            </label>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
            </label>
          </TableCell>
          <TableCell rowSpan={7}>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
            </label>
          </TableCell>
          <TableCell>
            {" "}
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
            </label>
          </TableCell>
          <TableCell rowSpan={7}>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
            </label>
          </TableCell>
          <TableCell rowSpan={7}>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
            </label>
          </TableCell>
          <TableCell rowSpan={7}>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
            </label>
          </TableCell>
        </TableRow>

        {/* Строка 2  */}
        <TableRow key="2">
          <TableCell>
            <p id="row2_h1"></p>
          </TableCell>
          <TableCell>
            <p id="row2_h2"></p>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
            </label>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
            </label>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
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
            <p id="row3_h1"></p>
          </TableCell>
          <TableCell>
            <p id="row3_h2"></p>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
            </label>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
            </label>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
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
            <p id="row4_h1"></p>
          </TableCell>
          <TableCell>
            <p id="row4_h2"></p>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
            </label>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
            </label>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
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
            <p id="row5_h1"></p>
          </TableCell>
          <TableCell>
            <p id="row5_h2"></p>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
            </label>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
            </label>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
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
            <p id="row6_h1"></p>
          </TableCell>
          <TableCell>
            <p id="row6_h2"></p>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
            </label>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
            </label>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
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
            <p id="row7_h1"></p>
          </TableCell>
          <TableCell>
            <p className="" id="row7_h2"></p>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
            </label>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
            </label>
          </TableCell>
          <TableCell>
            <label htmlFor="" className="">
              <input type="" className="bg-slate-200 w-20"></input>
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
