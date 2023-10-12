'use client'
import styles from './page.module.css';
import {SelectOptions} from "@/const";
import {data} from "@/mocks/data";
import {useState} from "react";
import BarChart from "@/components/bar-chart";

export default function Home() {
    const [currentSelect, setCurrentSelect] = useState(SelectOptions.LastYear);

    const handleSelectChange = (e) => {
        setCurrentSelect(SelectOptions[e.target.value]);
    };

    const getDataBySelect = () => {
        switch (currentSelect) {
            case SelectOptions.LastYear:
                return data.graph.year;
            case SelectOptions.LastHalfYear:
                return data.graph.half_year;
            case SelectOptions.LastMonth:
                return data.graph.month;
        }
    }

    const dataBySelect = getDataBySelect();

    return (
        <div className={styles.container}>
            <div className={styles.barGraph}>
                <select className={styles.select} onChange={handleSelectChange}>
                    {Object.entries(SelectOptions).map(([option, value]) => (
                        <option key={option} value={option}>{value}</option>
                    ))}
                </select>
                <div className={styles.field}>
                    <BarChart data={dataBySelect} />
                </div>
            </div>
        </div>
    )
}
