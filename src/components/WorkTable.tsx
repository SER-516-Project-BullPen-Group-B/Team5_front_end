import { useState, useEffect } from "react";
import localForage from "localforage";

const Table = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    localForage.getItem("acceptedWorkSpread", (err, value: any) => {
      if (value !== null) {
        setData(value);
      }
    });
  }, []);
  console.log(data);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">
            Accepted Work spread
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A table to show the accepted work spread.
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Full Name
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Stratergy
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      User stories worked with
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data ? (
                    data.map((user: string[], i: number) => {
                      console.log(user);
                      return (
                        <tr key={i} className="divide-x divide-gray-200">
                          <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                            {user["name"]}
                          </td>
                          <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                            {user["process_followed"] === "both" ? (
                              "Mixed"
                            ) : user["process_followed"] ===
                              "not_divide_and_conquer" ? (
                              "Collaborated"
                            ) : user["process_followed"] ===
                              "divide_and_conquer" ? (
                              "Divided and Conqured"
                            ) : (
                              <></>
                            )}
                          </td>
                          <div className="whitespace-nowrap p-4 text-sm text-gray-500">
                            {user["user_stories"].map(
                              (userStory: string, index: number) => {
                                return <li key={index}>{userStory}</li>;
                              }
                            )}
                          </div>
                        </tr>
                      );
                    })
                  ) : (
                    <>
                      <tr>
                        <td>
                          Data not available, please make a valid request before
                          you visit this page.
                        </td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
