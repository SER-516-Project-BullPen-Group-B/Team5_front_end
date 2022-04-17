import localforage from 'localforage';
import DropDown from "../components/DropDown";
import { useState, useEffect } from 'react';
import CFDComp from '../components/CFD';

const CFD : React.FC = () => {

    const [data, setData] = useState("");
    const [select, setSelect] = useState("Line");
    const types = ["Line"]

    useEffect(() => {
        localforage.getItem("cfd", (err, value: any) => {
            const labels = Object.keys(value);
            const newCount: number[] = [];
            const inProgress: number[] = [];
            const readyForTest: number[] = [];
            const done: number[] = [];
            const blocked: number[] = [];
            Object.values(value).forEach((val: any) => {
               newCount.push(val['New']);
               inProgress.push(val['In Progress']);
               readyForTest.push(val['Ready for Test']);
               done.push(val['Done']);
               blocked.push(val['Blocked']);
            });
            console.log(newCount, inProgress, readyForTest, done, blocked);
            const data = {
                labels: labels,
                datasets: [
                    {
                        label: "New",
                        data: newCount,
                        backgroundColor: "rgba(153, 51, 204, 0.15)",
                        borderColor: "rgba(153, 51, 204, 0.9)",
                        fill: true,
                    },
                    {
                        label: "In Progress",
                        data: inProgress,
                        fill: true,
                        backgroundColor: "rgba(255, 187, 51, 0.15)",
                        borderColor: "rgba(255, 187, 51, 0.9)"
                    },
                    {
                        label: "Ready for Test",
                        data: readyForTest,
                        backgroundColor: "rgba(51, 181, 229, 0.15)",
                        borderColor: "rgba(51, 181, 229, 0.9)",
                        fill: true,
                    },
                    {
                        label: "Done",
                        data: done,
                        fill: true,
                        backgroundColor: "rgba(0,200,81,0.15)",
                        borderColor: "rgba(0,200,81,0.9)"
                    },
                    {
                        label: "Blocked",
                        data: blocked,
                        fill: true,
                        backgroundColor: "rgba(220, 53, 69,0.15)",
                        borderColor: "rgba(220, 53, 69,0.9)"
                    }
                ]
            };
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
                {
                    data ? (
                        <CFDComp data={data} />
                    ) : (
                        <div>
                            Data not available ...
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default CFD;