/* eslint-disable */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface DropDownProps {
  values: any;
  select: any;
  title: string;
}

const DropDown: React.FC<DropDownProps> = ({ values, select, title }) => {
  const handleSelect = (value) => {
    select(value);
  };

  return (
    <Menu as="div" className="w-full relative z-10 inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-cyan-500">
          {title}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          {values instanceof Array ? (
            values.map((item) => (
              <div className="py-1" key={item}>
                <Menu.Item>
                  {() => (
                    <a
                      className={classNames(
                        "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={() => handleSelect(item)}
                    >
                      {item}
                    </a>
                  )}
                </Menu.Item>
              </div>
            ))
          ) : (
            <></>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDown;
