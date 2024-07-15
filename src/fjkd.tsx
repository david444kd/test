import { Input, DateInput, Button} from "@nextui-org/react"
import {CalendarDate} from "@internationalized/date";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import { EyeFilledIcon } from "./EyeFilledIcon";
import React from "react";
export const Fjkd = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  function click (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let ob = {
      email: formData.get("email"),
      date: formData.get("date"),
      password: formData.get("password"),
    };
    console.log(ob);
    
  }
  return (
    <div className="flex w-30 justify-center">
      <form onSubmit={click}>
        <h1 className="text-center m-10 text-2xl font-bold text-gray-700">Registration</h1>
        <Input className="mb-5"  type="email" variant={"underlined"} label="" placeholder="Email" name="email"/>
        <DateInput className="mb-5" name="date" variant={'underlined'} label={"Birth date"} placeholderValue={new CalendarDate(1995, 11, 6)}  />
        <Input
          name="password"
          label="Password"
          variant="bordered"
          placeholder="Enter your password"
          endContent={
            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="max-w-xs"
        />
        <div className="flex justify-center mt-4">
          <Button color="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>

    </div>
  )
}

export default Fjkd