"use client";
import * as echarts from "echarts";
import { useState, useEffect } from "react";

type ohlcvType = {
  datetime: Date | null;
  unixtime: bigint;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: bigint;
  up: boolean;
  down: boolean;
};

type annotationType = {
  start_time: Date;
  unixtime: bigint;
  is_annotated: boolean;
  annotator: string | null;
};

export default function Home() {

  const [selected, setSelected] = useState<annotationType>();
  const [not_annotated_list, setNotAnnotatedList] = useState<annotationType[]>();
  const [annotated_list, setAnnotatedList] = useState<annotationType[]>();

  useEffect(() => {
    fetch('/api/list')
      .then((res) => res.json())
      .then((data) => {
        setNotAnnotatedList(data.filter((d: annotationType) => !d.is_annotated));
        setAnnotatedList(data.filter((d: annotationType) => d.is_annotated));
        setSelected(not_annotated_list?.[0]);
      });
  }, [not_annotated_list]);

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex">
      <div className="overflow-auto w-1/3">
        {not_annotated_list?.map((item) => (
          <div
            key={item.unixtime}
            className={`${selected ? "bg-blue-300" : ""}`}
            onClick={() => setSelected(item)}
          >
            {String(item.start_time)}
          </div>
        ))}
      </div>
      <div className="w-1/3 flex flex-col"></div>
      <div className="overflow-auto w-1/3">
        {annotated_list?.map((item) => (
          <div
            key={item.unixtime}
            className={`${selected ? "bg-blue-300" : ""}`}
            onClick={() => setSelected(item)}
          >
            {String(item.start_time)}
          </div>
        ))}
      </div>
    </div>
  );
}
