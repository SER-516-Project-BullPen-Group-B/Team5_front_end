import { useState, useEffect } from "react";
import localForage from "localforage";

const Table = () => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const [data, setData] = useState<any | null>();

  useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    localForage.getItem("nikoNiko", (err, value: any) => {
      const userData: { value: string; name: string; task_name: string }[] = [];
      value.forEach(
        (user: { value: string; name: string; task_name: string }) => {
          let userObj: { value: string; name: string; task_name: string };
          if ("19358" in user) {
            userObj = {
              value: user["19358"],
              name: user["username"],
              task_name: user["task_name"],
            };
            userData.push(userObj);
          }
        }
      );
      setData(value);
    });
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Niko Niko</h1>
          <p className="mt-2 text-sm text-gray-700">
            A table representing developer satisfaction for a given task
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
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Task Name
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Happiness Value
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data ? (
                    data.map(
                      (
                        user: {
                          "19358": string;
                          username: string;
                          task_name: string;
                        },
                        i: number
                      ) => {
                        return (
                          <tr key={i} className="divide-x divide-gray-200">
                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                              {user.username}
                            </td>
                            <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                              {user.task_name}
                            </td>
                            <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                              {user["19358"] === "happy :-)" ? (
                                "😄"
                              ) : user["19358"] === "sad :-( " ? (
                                "😞"
                              ) : user["19358"] === "confused :-/" ? (
                                "😐"
                              ) : user["19358"] === "mad  >:-{}" ? (
                                "😡"
                              ) : (
                                <></>
                              )}
                            </td>
                          </tr>
                        );
                      }
                    )
                  ) : (
                    <>
                      <tr>
                        <td>Loading ...</td>
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
