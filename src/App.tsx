import { Link as RouterLink, Routes, Route } from 'react-router-dom';
import { Link, DropdownMenu, Dropdown, DropdownItem, DropdownTrigger, Button, Image, Select, SelectItem } from '@nextui-org/react';
import './App.css';
import Fjkd from './fjkd';
import About from './about';
import Contact from './contact';

function App() {
  const animals = [
    { key: 'type1', label: 'type1' },
    { key: 'type2', label: 'type2' },
    { key: 'type3', label: 'type3' },
    { key: 'type4', label: 'type4' },
    { key: 'type5', label: 'type5' },
  ];

  return (
    <div>
      <header className='flex justify-between items-center border-b bg-gray-100'>
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" className='ml-10'>
              Menu
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Example with disabled actions" disabledKeys={['edit', 'delete']}>
            <DropdownItem key="first">First</DropdownItem>
            <DropdownItem key="second">Second</DropdownItem>
            <DropdownItem key="third">Third</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <nav>
          <ul className='flex m-10'>
            <li> <Link className='text-gray-700' as={RouterLink} to='/'>Home</Link> </li>
            <li> <Link className='pl-10 text-gray-700' as={RouterLink} to='/form'>Form</Link> </li>
            <li> <Link className='text-gray-700 pl-10' as={RouterLink} to='/about'>About</Link> </li>
            <li> <Link className='pl-10 text-gray-700' as={RouterLink} to='/contact'>Contact</Link> </li>
          </ul>
        </nav>
      </header>

      <main className='p-10'>
        <Routes>
          <Route path="/" element={
            <div>
              <div className='flex justify-center'>
                <h1 className='m-10 text-2xl font-bold text-gray-700'>Items List</h1>
              </div>
              <div className='flex flex-col items-center'>
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className='flex items-center justify-between mb-10 w-full max-w-2xl'>
                    <Image
                      isZoomed
                      width={200}
                      alt={`productImage${item}`}
                      src="https://www.zadroagency.com.au/wp-content/uploads/2014/11/Blog44_Web-1920x1080-1-1024x576.png"
                    />
                    <div className='m-10'> <p className='font-mono'>Товар {item}</p></div>
                    <div className='w-48'>
                      <Select
                        items={animals}
                        label="product types"
                        placeholder="select type"
                        className="w-full"
                      >
                        {(animal) => <SelectItem key={animal.label}>{animal.label}</SelectItem>}
                      </Select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }/>
          <Route path="/form" element={<Fjkd />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
