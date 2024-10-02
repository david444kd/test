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
  Input,
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
          <img className="w-12" src={img1} alt="" />
        </TableColumn>
        <TableColumn>
          <img className="w-12" src={img2} alt="" />
        </TableColumn>
        <TableColumn>
          <img src={img3} alt="" />
        </TableColumn>
        <TableColumn>
          <img src={img4} alt="" />
        </TableColumn>
        <TableColumn>
          <img src={img5} alt="" />
        </TableColumn>
        <TableColumn>
          <img src={img6} alt="" />
        </TableColumn>
        <TableColumn>
          <img src={img7} alt="" />
        </TableColumn>
        <TableColumn>
          <img src={img8} alt="" />
        </TableColumn>
        <TableColumn>
          <img src={img9} alt="" />
        </TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>
            {/* <input className="bg-slate-300 rounded-md" type="text" placeholder="" /> */}
            <Input></Input>
          </TableCell>
          <TableCell>
            <Input></Input>
          </TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>
            <Input></Input>
          </TableCell>
          <TableCell>
            <Input></Input>
          </TableCell>
          <TableCell>Paused</TableCell>
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>
            <Input></Input>
          </TableCell>
          <TableCell>
            <Input></Input>
          </TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>
            <Input></Input>
          </TableCell>
          <TableCell>
            <Input></Input>
          </TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell>
            <Input></Input>
          </TableCell>
          <TableCell>
            <Input></Input>
          </TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell>
            <Input></Input>
          </TableCell>
          <TableCell>
            <Input></Input>
          </TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="7">
          <TableCell>
            <Input></Input>
          </TableCell>
          <TableCell>
            <Input></Input>
          </TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Forma;
