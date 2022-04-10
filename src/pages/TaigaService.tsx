import Calender from "../components/calender";
import { useState } from "react";
import localForage from "localforage";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// http://mpattan.pythonanywhere.com/leadTime?slug=

const TaigaService: React.FC = () => {
  const [date, setDate] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDate = new Date(Date.parse(date.toString()));
    console.log(
      formattedDate.getMonth() +
        "/" +
        formattedDate.getDate() +
        "/" +
        formattedDate.getFullYear()
    );
    try {
      const data = axios.get(
        `http://mpattan.pythonanywhere.com/leadTime?slug=${url}`
      );
      data
        .then(async (res) => {
          localForage.setItem("leadTime", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      toast.promise(data, {
        pending: "Generating Viz for Lead Time",
        success: "Viz for Lead Time is ready!",
        error: "An unexpected error occured while processing the request",
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error");
      } else {
        console.log("error");
      }
    }
    console.log(date, username, password, url);
  };
  return (
    <>
      <ToastContainer transition={Flip} />

      <div className="min-h-full">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-2xl font-extrabold text-gray-900">
                Welcome! Visualize your project's metrics here
              </h2>
            </div>

            <div className="mt-12">
              <div className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Username
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          autoComplete="email"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          autoComplete="current-password"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Taiga Project URL
                    </label>
                    <div className="mt-1">
                      <input
                        id="taiga-url"
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="content-center">
                    <Calender date={setDate} />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Fetch
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaigaService;
