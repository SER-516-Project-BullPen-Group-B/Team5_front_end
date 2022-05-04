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
            const sampleData = [
                {
                  "tags": [
              
                  ],
                  "due_date": null,
                  "due_date_reason": "",
                  "due_date_status": "not_set",
                  "attachments": [
              
                  ],
                  "project": 444346,
                  "project_extra_info": {
                    "name": "SER516 Project 2 Group B Team 3",
                    "slug": "svodeti-ser516-project-2-group-b-team-3",
                    "logo_small_url": null,
                    "id": 444346
                  },
                  "status": 3113841,
                  "status_extra_info": {
                    "name": "Closed",
                    "color": "#A8E440",
                    "is_closed": true
                  },
                  "assigned_to": null,
                  "assigned_to_extra_info": null,
                  "owner": 489148,
                  "owner_extra_info": {
                    "username": "vkambha3",
                    "full_name_display": "Venkata Surya Shandilya Kambhampati",
                    "photo": "https://media-protected.taiga.io/user/0/3/0/3/879ad03565a1b4d64a04da5dfa64b5310a914f2c6878c8583a7ec7f2f607/img_4662.jpg.80x80_q85_crop.jpg?token=YnHE1Q%3Ac_cUKZjty2iQn8AbCicPaZUIb5YAfXFfytd9brH7jjdZZUFWCshbk8OVTjPVSC8VbYgEqCCutNScsWNksHch1Q",
                    "big_photo": "https://media-protected.taiga.io/user/0/3/0/3/879ad03565a1b4d64a04da5dfa64b5310a914f2c6878c8583a7ec7f2f607/img_4662.jpg.300x300_q85_crop.jpg?token=YnHE1Q%3AN0e77oJ0qScB6bsBq8e47TvTS8cBGl69n9w73Iw433Ar_ArcicD4LxxC5BOADJ_yWXGhgnxGq2Kj3IyzwxS0Bw",
                    "gravatar_id": "c8346a54915fbf0bb5b5c6499c8f4054",
                    "is_active": true,
                    "id": 489148
                  },
                  "is_watcher": false,
                  "total_watchers": 0,
                  "is_voter": false,
                  "total_voters": 0,
                  "id": 1520996,
                  "ref": 44,
                  "severity": 2219586,
                  "priority": 1335545,
                  "type": 1341333,
                  "milestone": null,
                  "created_date": "2022-01-17T05:15:28.361Z",
                  "modified_date": "2022-02-17T05:15:28.396Z",
                  "finished_date": "2022-08-17T05:15:28.400Z",
                  "subject": "Sample impediment to test the working of impediment tracker 3",
                  "external_reference": null,
                  "version": 1,
                  "watchers": [
              
                  ],
                  "is_blocked": false,
                  "blocked_note": "",
                  "is_closed": true
                }
              ]
            let timelinedata:(string | Date)[][] = [];
            for(let i=0; i<sampleData.length;i++){
                let createdDate= sampleData[i]['created_date'].split('T')[0].split('-');
                let endDate =sampleData[i]['is_closed']===true?sampleData[i]['modified_date'].split('T')[0].split('-'):sampleData[i]['finished_date'].split('T')[0].split('-');
                let item = [
                    sampleData[i]['subject'],
                    new Date(parseInt(createdDate[0]),parseInt(createdDate[1]),parseInt(createdDate[2])),
                    new Date(parseInt(endDate[0]),parseInt(endDate[1]),parseInt(endDate[2]))
                ]
            timelinedata = [...timelinedata, item]
            }
            console.log(timelinedata)
            const data = [
                // ["Washington", new Date(parseInt(created_date[0]), parseInt(created_date[1]), parseInt(created_date[2])), new Date(parseInt(finished_date[0]), parseInt(finished_date[1]), parseInt(finished_date[2]))],
                ["Adams", new Date(2022, 1, 4), new Date(2022, 2, 14)],
                ["Jefferson", new Date(2022, 1, 4), new Date(2022, 8, 23)],
                ["Jefferson1", new Date(2022, 1, 4), new Date(2022, 8, 23)],
            ];
            console.log(data)
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