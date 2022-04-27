import DropDown from "../components/DropDown";
import { useState, useEffect } from "react";
import localforage from "localforage";
import Impediment from "../components/Impediment";
import "../styles/Metric.css";

const ImpedimentTracker: React.FC = () => {

    const [data, setData] = useState("");
    const [select, setSelect] = useState("Timeline");
    const types = ["Timeline"];

    useEffect(() => {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        localforage.getItem("impediment", (err, value: any) => {
            console.log("Value", value);
            const data = [
                ["Washington", new Date(2022, 3, 30), new Date(2022, 12, 4)],
                ["Adams", new Date(1789, 6, 4), new Date(1807, 2, 14)],
                ["Jefferson", new Date(1789, 8, 4), new Date(1797, 1, 23)],
                ["Jefferson1", new Date(1789, 8, 4), new Date(1797, 1, 23)],
                ["Jefferson2", new Date(1789, 8, 4), new Date(1797, 1, 23)],
                ["Jefferson3", new Date(1789, 8, 4), new Date(1797, 1, 23)],
                ["Jefferson4", new Date(1789, 8, 4), new Date(1797, 1, 23)],
                ["Jefferson5", new Date(1789, 8, 4), new Date(1797, 1, 23)],
                ["Jefferson6", new Date(1789, 8, 4), new Date(1797, 1, 23)],
                ["Jefferson7", new Date(1789, 8, 4), new Date(1797, 1, 23)],
                ["Jefferson8", new Date(1789, 8, 4), new Date(1797, 1, 23)],
                ["Jefferson9", new Date(1789, 8, 4), new Date(1797, 1, 23)],
                ["Jefferson10", new Date(1789, 8, 4), new Date(1797, 1, 23)],
                ["Jefferson11", new Date(1789, 8, 4), new Date(1797, 1, 23)],
                ["Jefferson12", new Date(1789, 8, 4), new Date(1797, 1, 23)],
                ["Jefferson13", new Date(1789, 8, 4), new Date(1797, 1, 23)],
                ["Adams1", new Date(1789, 6, 4), new Date(1807, 2, 14)],
                ["Adams2", new Date(1789, 6, 4), new Date(1807, 2, 14)],
                ["Adams3", new Date(1789, 6, 4), new Date(1807, 2, 14)],
                ["Adams4", new Date(1789, 6, 4), new Date(1807, 2, 14)],
                ["Adams5", new Date(1789, 6, 4), new Date(1807, 2, 14)],
                ["Adams6", new Date(1789, 6, 4), new Date(1807, 2, 14)],
                ["Adams7", new Date(1789, 6, 4), new Date(1807, 2, 14)],
                ["Adams8", new Date(1789, 6, 4), new Date(1807, 2, 14)],
            ];
            setData(JSON.stringify(data));
        });
    }, []);

    return (
        <div>
            <div className="flex justify-end ...">
                <div className="m-6">
                {" "}
                <DropDown values={types} select={setSelect} title={select}></DropDown>
                </div>
            </div>
            <div className="m-4">
                {data ? (
                <div>
                    <h3 className="metric-title">Impediment Tracker</h3>
                    <Impediment rows={data}/>
                </div>
                ) : (
                <div>
                    Data not available, please make a valid request before you visit
                    this page.
                </div>
                )}
            </div>
        </div>
    );
}

export default ImpedimentTracker;