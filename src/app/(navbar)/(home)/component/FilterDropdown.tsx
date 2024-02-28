"use client"
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { TabStateType } from './Home'
import SortIcon from '@/public/icon/SortIcon'

export default function FilterDropdown({
  setState
}:{
  setState:React.Dispatch<React.SetStateAction<TabStateType>>
})  {

return (
<div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        
        <div>
          <Menu.Button className="">
          <div 
            className={` h-10
            hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
            border rounded-full px-3 py-2 cursor-pointer transition-colors 
            text-slate-900 flex gap-2 self-center shrink-0}
            `}
            >
                <SortIcon/>
                <p className=" text-sm font-normal self-center">Name</p>
            </div>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute p-4 z-50 right-0 mt-2 w-56 origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
             
              <h6 className="text-sm font-bold text-center text-gray-900">
                Sort By
              </h6>

              <div className="mt-4">

                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-100' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      Name (A-Z)
                    </button>
                  )}
                </Menu.Item>
        
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-100' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm font-normal`}
                    >
                    Low to High Effort
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-100' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm font-normal`}
                    >
                      High to Low Effort
                    </button>
                  )}
                </Menu.Item>
            </div>

          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
function EditInactiveIcon(props:React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
      </svg>
    )
  }

function EditActiveIcon(props:React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
      </svg>
    )
  }
  