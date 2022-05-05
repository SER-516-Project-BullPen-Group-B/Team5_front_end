import { useState, useEffect } from "react";
import localForage from "localforage";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import DropDown from "../components/DropDown";
import { map } from "../utils/api-mappings";
import { useNavigate } from "react-router-dom";

const TaigaService: React.FC = () => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");
  const [select, setSelect] = useState("Metrics");
  const navigate = useNavigate();
  const metrics = [
    "Lead Time",
    "Cycle Time",
    "Niko Niko",
    "CFD",
    "WIP",
    "Active Tasks",
    "Throughput",
    "Accepted Work Spread",
    "Impediment Tracker",
    "Scope Change",
  ];
  const nav = (route: string) => {
    navigate(route);
  };

  useEffect(() => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    localForage.getItem("username", (err, value: any) => {
      if (value !== null) {
        setUsername(value);
      }
    });
    localForage.getItem("password", (err, value: any) => {
      if (value !== null) {
        setPassword(value);
      }
    });
    localForage.getItem("input", (err, value: any) => {
      if (value !== null) {
        setUrl(value);
      }
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (select !== "Metrics") {
      const metric = map[select];
      localForage.setItem("username", username);
      localForage.setItem("password", password);
      localForage.getItem("input", (err, value) => {
        console.log(value);
        if (value !== null && value !== url) {
          for (const item of Object.keys(map)) {
            localForage.removeItem(map[item].localForageKey);
            localForage.setItem("input", url);
          }
        } else {
          localForage.setItem("input", url);
        }
      });

      // const formattedDate = new Date(Date.parse(date.toString()));

      try {
        const data =
          select === "CFD" || select === "WIP"
            ? axios.post(`${metric.endpoint}`, {
                username: username,
                password: password,
                type: "normal",
                team: url.split(" ")[1],
                group: url.split(" ")[0],
              })
            : axios.post(`${metric.endpoint + url}`, {
                username: username,
                password: password,
                type: "normal",
              });
        data
          .then(async (res) => {
            if (res.status === 200) {
              localForage.setItem(metric.localForageKey, res.data);
              console.log(res.data);
              nav(metric.route);
            }
          })
          .catch((_error) => {
            console.log(_error.response.status);
            if (_error.response.status === 422) {
              toast.info("Bad project data!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            } else {
              toast.error("Try again with valid credentials or slug!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }
          });
        toast.promise(data, {
          pending: metric.requestPending,
          success: metric.requestSuccess,
          error: metric.requestError,
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error);
        } else {
          console.log(error);
        }
      }
    } else {
      toast("Select a metric before maiking the request!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
                src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-2xl font-extrabold text-gray-900">
                Welcome! Visualize your project&rsquo;s metrics here
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
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
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
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Taiga Project Slug <br />
                      <p className="italic pt-2">
                        (For CFD and WIP please provide the &lt;group-name&gt;
                        &lt;team-name&gt; instead of slug. For example: Group-B
                        Team-5)
                      </p>
                    </label>
                    <div className="mt-1">
                      <input
                        id="taiga-url"
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="content-center">
                    <DropDown
                      values={metrics}
                      select={setSelect}
                      title={select}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
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
