import DropDown from "../components/DropDown";
import { useState, useEffect } from "react";
import localforage from "localforage";
import Impediment from "../components/Impediment";

const ImpedimentTracker: React.FC = () => {

    const [select, setSelect] = useState("");
    const types = [];

    return (
        <div>
            <div className="flex justify-end ...">
                <div className="m-6">
                {" "}
                <DropDown values={types} select={setSelect} title={select}></DropDown>
                </div>
            </div>
            <div className="m-4">
                <div>
                    Data not available, please make a valid request before you visit
                    this page.
                    <Impediment></Impediment>
                </div>
            </div>
        </div>
    );
}

export default ImpedimentTracker;