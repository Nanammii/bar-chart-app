'use client'
import styles from './page.module.css';
import {SelectOptions} from "@/const";
import {data} from "@/mocks/data";
import {useState} from "react";
import BarChart from "@/components/bar-chart";
import cn from "classnames";

export default function Home() {
    const [currentSelect, setCurrentSelect] = useState(SelectOptions.LastYear);
    const [sortingIsOpened, setSortingIsOpened] = useState(false);

    const handleSelectClick = (sort) => {
        setCurrentSelect(SelectOptions[sort]);
        setSortingIsOpened(false);
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
    console.log(currentSelect)
    return (
        <div className={styles.container}>
            <div className={styles.barGraph}>
                <span
                    className={styles.select}
                    onClick={() => setSortingIsOpened(!sortingIsOpened)}
                >
                    {currentSelect}
                    <svg
                        className={cn(styles.icon, {[styles.arrowUp]: sortingIsOpened})}
                        width={28} height={17} viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame 50">
                            <path id="Vector 4" d="M26 2L14 14L2 2" stroke="#000AFF" strokeWidth={3} strokeLinecap="round"/>
                        </g>
                    </svg>
                </span>
                <ul className={cn(styles.optionsList, {[styles.opened]: sortingIsOpened})}>
                    {Object.entries(SelectOptions).map(([option, value]) => {
                        if (value !== currentSelect) {
                            return (
                                <li
                                    className={cn(styles.option, {[styles.active]: option === currentSelect})}
                                    key={option}
                                    onClick={() => handleSelectClick(option)}
                                >
                                    {value}
                                </li>
                            )
                        }
                    })}
                </ul>
                <div className={styles.field}>
                    <BarChart data={dataBySelect} />
                </div>
            </div>
        </div>
    )
}
