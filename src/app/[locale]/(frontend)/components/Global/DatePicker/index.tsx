"use client";
import { useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

import ChevronDownIcon from '@/src/assets/icons/chevron-down.svg'
import classNames from "classnames";

type Props = {
    value?: string | null; // ISO string "YYYY-MM-DD"
    onChange?: (isoDate: string) => void;
    className?: string;
    placeholder?: string;
    minYear?: number;
    maxYear?: number;
    disabled?: boolean;
};

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const pad = (n: number) => n.toString().padStart(2, "0");

const isoFromParts = (y: number, m: number, d: number) => `${y}-${pad(m)}-${pad(d)}`;

const parseISO = (iso?: string | null) => {
    if (!iso) return null;
    const [y, m, d] = iso.split("-").map((s) => Number(s));
    if (!y || !m || !d) return null;
    return { y, m, d };
};

const buildMonthMatrix = (year: number, month: number) => {
    // month: 1..12
    const first = new Date(year, month - 1, 1);
    const last = new Date(year, month, 0);
    const startWeekday = first.getDay(); // 0..6 (Sun..Sat)
    const daysInMonth = last.getDate();

    const rows: (number | null)[][] = [];
    let week: (number | null)[] = [];

    for (let i = 0; i < startWeekday; i++) week.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
        week.push(d);
        if (week.length === 7) {
            rows.push(week);
            week = [];
        }
    }
    if (week.length) {
        while (week.length < 7) week.push(null);
        rows.push(week);
    }
    while (rows.length < 6) rows.push(new Array(7).fill(null));
    return rows;
};

export default function DatePicker({
    value = null,
    onChange,
    className,
    placeholder = "Select Date",
    minYear,
    maxYear,
    disabled = false,
}: Props) {
    const today = new Date();
    const currentYear = today.getFullYear();

    const minY = minYear ?? currentYear - 5;
    const maxY = maxYear ?? currentYear + 5;

    // parse incoming value
    const parsed = parseISO(value);

    // view state: which month/year is shown in calendar
    const [viewYear, setViewYear] = useState<number>(parsed?.y ?? currentYear);
    const [viewMonth, setViewMonth] = useState<number>(parsed?.m ?? today.getMonth() + 1); // 1..12
    const [open, setOpen] = useState(false);

    // selected parts
    const [selected, setSelected] = useState<{ y: number; m: number; d: number } | null>(
        parsed ? { y: parsed.y, m: parsed.m, d: parsed.d } : null
    );

    useEffect(() => {
        if (parsed) {
            setSelected({ y: parsed.y, m: parsed.m, d: parsed.d });
            setViewYear(parsed.y);
            setViewMonth(parsed.m);
        }
    }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

    // month matrix recalculated when view changes
    const matrix = useMemo(() => buildMonthMatrix(viewYear, viewMonth), [viewYear, viewMonth]);

    // years list
    const years = useMemo(() => {
        const arr: number[] = [];
        for (let y = minY; y <= maxY; y++) arr.push(y);
        return arr;
    }, [minY, maxY]);

    const toggle = () => {
        if (disabled) return;
        setOpen((s) => !s);
    };

    const handlePick = (d: number | null) => {
        if (!d) return;
        const iso = isoFromParts(viewYear, viewMonth, d);
        setSelected({ y: viewYear, m: viewMonth, d });
        onChange?.(iso);
        setOpen(false);
    };

    const displayLabel = selected ? `${pad(selected.d)} ${monthNames[selected.m - 1]} ${selected.y}` : placeholder;

    return (
        <div className={twMerge("relative inline-block w-full", className)}>
            <button
                type="button"
                onClick={toggle}
                disabled={disabled}
                className={twMerge(
                    "w-full h-11 px-3 flex items-center justify-between rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm font-medium shadow-sm transition-all hover:border-white/40 w-[320px] cursor-pointer",
                    disabled ? "opacity-60 cursor-not-allowed" : "hover:!bg-[#f0fff6]/5",
                )}
            >
                <span className="truncate">{displayLabel}</span>
                <Image
                    src={ChevronDownIcon}
                    alt="chevron-down-icon"
                    className={classNames(
                        "opacity-60 invert transition-transform duration-300",
                        { 'rotate-180': open }
                    )}
                />

            </button>

            {open && (
                <div className="absolute z-50 mt-2 w-[320px] bg-black/50 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl p-3 animate-fade-in">
                    {/* header: month & year selectors */}
                    <div className="flex items-center justify-between mb-2 gap-2">
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => {
                                    // prev month
                                    if (viewMonth === 1) {
                                        setViewMonth(12);
                                        setViewYear((y) => Math.max(minY, y - 1));
                                    } else setViewMonth((m) => m - 1);
                                }}
                                className="p-2 rounded-md hover:bg-white/5 transition"
                                aria-label="Previous month"
                            >
                                ‹
                            </button>

                            <select
                                value={viewMonth}
                                onChange={(e) => setViewMonth(Number(e.target.value))}
                                className="bg-transparent text-sm px-2 py-1 rounded-md border border-white/5"
                            >
                                {monthNames.map((m, i) => (
                                    <option value={i + 1} key={m}>
                                        {m}
                                    </option>
                                ))}
                            </select>

                            <select
                                value={viewYear}
                                onChange={(e) => setViewYear(Number(e.target.value))}
                                className="bg-transparent text-sm px-2 py-1 rounded-md border border-white/5"
                            >
                                {years.map((y) => (
                                    <option value={y} key={y}>
                                        {y}
                                    </option>
                                ))}
                            </select>

                            <button
                                type="button"
                                onClick={() => {
                                    // next month
                                    if (viewMonth === 12) {
                                        setViewMonth(1);
                                        setViewYear((y) => Math.min(maxY, y + 1));
                                    } else setViewMonth((m) => m + 1);
                                }}
                                className="p-2 rounded-md hover:bg-white/5 transition"
                                aria-label="Next month"
                            >
                                ›
                            </button>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={() => {
                                    const t = new Date();
                                    setViewYear(t.getFullYear());
                                    setViewMonth(t.getMonth() + 1);
                                    const iso = isoFromParts(t.getFullYear(), t.getMonth() + 1, t.getDate());
                                    setSelected({ y: t.getFullYear(), m: t.getMonth() + 1, d: t.getDate() });
                                    onChange?.(iso);
                                    setOpen(false);
                                }}
                                className="px-2 py-1 rounded-md text-sm hover:bg-white/5 transition"
                            >
                                Today
                            </button>
                        </div>
                    </div>

                    {/* weekdays */}
                    <div className="grid grid-cols-7 text-xs text-white/60 mb-2">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((w) => (
                            <div key={w} className="text-center py-1">
                                {w}
                            </div>
                        ))}
                    </div>

                    {/* days */}
                    <div className="grid grid-cols-7 gap-1">
                        {matrix.map((row, rIdx) =>
                            row.map((d, cIdx) => {
                                const isSelected = selected && d && selected.y === viewYear && selected.m === viewMonth && selected.d === d;
                                const isToday =
                                    d &&
                                    new Date().getFullYear() === viewYear &&
                                    new Date().getMonth() + 1 === viewMonth &&
                                    new Date().getDate() === d;
                                return (
                                    <button
                                        key={`${rIdx}-${cIdx}`}
                                        onClick={() => handlePick(d)}
                                        disabled={!d}
                                        className={twMerge(
                                            "h-9 w-9 flex items-center justify-center rounded-md text-sm transition",
                                            !d ? "opacity-0 pointer-events-none" : "hover:bg-white/10",
                                            isSelected ? "bg-[#22C55E] text-white font-semibold" : "text-white/90",
                                            isToday && !isSelected ? "ring-1 ring-white/20" : ""
                                        )}
                                    >
                                        {d ?? null}
                                    </button>
                                );
                            })
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
