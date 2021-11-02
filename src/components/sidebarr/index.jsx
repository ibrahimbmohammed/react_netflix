import { BsPlus, BsCodeSlash, BsFillFileCheckFill} from 'react-icons/bs';
import { FaBook, FaPoo } from 'react-icons/fa';
import {GrLineChart, GrBladesVertical, GrCode} from 'react-icons/gr';
import {RiStackFill} from 'react-icons/ri';
import {IoIosCopy} from 'react-icons/io';
import {IoExtensionPuzzle} from 'react-icons/io5';

const SideBar = () => {
  return (
    <aside className="flex flex-col fixed top-16 left-0 bg-gray-100 w-89 h-screen items-center">
      <div className="flex flex-col items-start h-screen w-4/5 ">
        <div className="flex justify-center items-center mt-4">
          <div className="logo mr-2 ">
            <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.657 5.343a8 8 0 1 0-1.314 12.378 1.333 1.333 0 1 1 1.449 2.238A10.667 10.667 0 1 1 21.667 11a4 4 0 0 1-6.4 3.201A5.333 5.333 0 1 1 16.333 11 1.333 1.333 0 1 0 19 11c0-2.05-.781-4.093-2.343-5.657ZM13.667 11a2.667 2.667 0 1 0-5.334 0 2.667 2.667 0 0 0 5.334 0Z" fill="#F8C51B" /></svg>
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-sm">Product Web</h2>
            <p className="text-sm text-gray-500">Classic software project</p>
          </div>
        </div>
        {/* end of first div */}
        
          <ul className="list flex flex-col justify-start items-start mt-10 min-w-full ">
            <li className="flex items-center justify-start hover:bg-blue-300 hover:text-blue-700 hover:font-semibold min-w-full rounded-md  transition-opacity delay-100 ease-in">
              <span  className="mr-4 py-2 ml-2">
                <FaBook/>
              </span>
              <h3> Backlog</h3>
            </li>
            <li className="my flex items-center justify-start hover:bg-blue-300 hover:text-blue-700 hover:font-semibold min-w-full rounded-md transition-opacity delay-100 ease-in">
              <span className="mr-4 py-2 ml-2">
                <GrBladesVertical/>
              </span>
              <h3> Active Sprint</h3>
            </li>
            <li className="my flex items-center justify-start hover:bg-blue-300 hover:text-blue-700 hover:font-semibold min-w-full rounded-md transition-opacity delay-100 ease-in">
              <span className="mr-4 py-2 ml-2">
              <GrLineChart/>
              </span>
              <h3> Reports</h3>
            </li>
            <Divider/>
            <li className="my flex items-center justify-start hover:bg-blue-300 hover:text-blue-700 hover:font-semibold min-w-full rounded-md transition-opacity delay-100 ease-in" >
              <span className="mr-4 py-2 ml-2">
                <RiStackFill/>
              </span>
              <h3> Issues</h3>
            </li>
            <li className="my flex items-center justify-start hover:bg-blue-300 hover:text-blue-700 hover:font-semibold min-w-full rounded-md transition-opacity delay-100 ease-in">
              <span className="mr-4 py-2 ml-2">
                <IoExtensionPuzzle/>
              </span>
              <h3> Components</h3>
            </li>
            <li className="my flex items-center justify-start hover:bg-blue-300 hover:text-blue-700 hover:font-semibold min-w-full rounded-md transition-opacity delay-100 ease-in" >
              <span className="mr-4 py-2 ml-2">
                <BsCodeSlash/>
              </span>
              <h3> Code</h3>
            </li>
            <li className="my flex items-center justify-start hover:bg-blue-300 hover:text-blue-700 hover:font-semibold min-w-full rounded-md transition-opacity delay-100 ease-in">
              <span className="mr-4 py-2 ml-2">
                <BsFillFileCheckFill/>
              </span>
              <h3> Releases</h3>
            </li>
            <li className="my flex items-center justify-start hover:bg-blue-300 hover:text-blue-700 hover:font-semibold min-w-full rounded-md">
              <span className="mr-4 py-2 ml-2">
                <IoIosCopy/>
              </span>
              <h3> Project Pages</h3>
            </li>
          </ul>
        
      </div>

    </aside>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
