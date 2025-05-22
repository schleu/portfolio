import React, { useState } from 'react';
import { curriculoMock } from './curriculo';
import { carreiraMock } from './carreira';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import classNames from 'classnames';
import { TodoList } from './type';

// This page reads carreira.json and curriculo.json and displays their contents as todo lists for career and resume improvements.

// Helper to create unique keys for categories
const makeKey = (...args: (string | number)[]) => args.join('__');

// Helper to check if all items in a section are checked
const areAllChecked = (data: any, checked: { [key: string]: boolean }, parentKey: string): boolean => {
if (Array.isArray(data)) {
    return data.every((_: string, idx: number) => checked[makeKey(parentKey, idx)]);
} else if (typeof data === 'object' && data !== null) {
    return Object.entries(data).every(([sub, value]) => areAllChecked(value, checked, makeKey(parentKey, sub)));
}
return false;
};

const transition = { duration: 0.25, ease: 'easeInOut' };
const variants = {
collapsed: { opacity: 0, height: 0, overflow: 'hidden' },
open: { opacity: 1, height: 'auto', overflow: 'visible' },
};

const TodoPage: React.FC = () => {
const [carreira] = useState<TodoList>(carreiraMock);
const [curriculo] = useState<TodoList>(curriculoMock);
const [checked, setChecked] = useState<{ [key: string]: boolean }>({});
const [open, setOpen] = useState<{ [key: string]: boolean }>({});

const handleCheck = (key: string) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
};

const handleToggle = (key: string) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
};

const renderTodoSection = (title: string, data: TodoList, parentKey: string) => {
    const key = makeKey(parentKey, title);
    if (Array.isArray(data)) {
    return (
        <div className="mb-4" key={key}>
        <div className="flex items-center cursor-pointer" onClick={() => handleToggle(key)}>
            {open[key] ? (
            <FaChevronDown className={`mr-2`} />
            ) : (
            <FaChevronRight className={`mr-2`} />
            )}
            <span className={`font-semibold`}>{title.replace(/_/g, ' ').toUpperCase()}</span>
        </div>
        <AnimatePresence initial={false}>
            {open[key] && (
            <motion.ul
                className="ml-6 mt-1"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={variants}
                transition={transition}
            >
                {data.map((item: string, idx: number) => {
                const itemKey = makeKey(key, idx);
                return (
                    <li key={itemKey} className="flex items-start py-1">
                    <input
                        type="checkbox"
                        checked={!!checked[itemKey]}
                        onChange={() => handleCheck(itemKey)}
                        className="mr-2 accent-green-500 mt-0.5"
                    />
                    <span className={classNames(
                        checked[itemKey] ? 'line-through text-zinc-400' : 'text-zinc-400',
                        'text-sm transition-all duration-300 cursor-pointer'
                    )} onClick={() => handleCheck(itemKey)}>{item}</span>
                    </li>
                );
                })}
            </motion.ul>
            )}
        </AnimatePresence>
        </div>
    );
    } else if (typeof data === 'object' && data !== null) {
    return (
        <div className="mb-4" key={key}>
        <div className="flex items-center cursor-pointer" onClick={() => handleToggle(key)}>
            {open[key] ? (
            <FaChevronDown className={`mr-2`} />
            ) : (
            <FaChevronRight className={`mr-2`} />
            )}
            <span className={`font-semibold`}>{title.replace(/_/g, ' ').toUpperCase()}</span>
        </div>
        <AnimatePresence initial={false}>
            {open[key] && (
            <motion.div
                className="ml-6 mt-1"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={variants}
                transition={transition}
            >
                {Object.entries(data).map(([sub, value]) => renderTodoSection(sub, value as unknown as TodoList, key))}
            </motion.div>
            )}
        </AnimatePresence>
        </div>
    );
    }
    return null;
};

const renderRoot = (data: TodoList) =>
    Object.entries(data).map(([section, value]) => {
    const allDone = areAllChecked(value, checked, section);
    return (
        <div key={section} className="mb-8">
        <div
            className="flex items-center cursor-pointer"
            onClick={() => handleToggle(section)}
        >
            {open[section] ? (
            <FaChevronDown className={`mr-2 ${allDone ? 'text-green-500' : 'text-zinc-400'}`} />
            ) : (
            <FaChevronRight className={`mr-2 ${allDone ? 'text-green-500' : 'text-zinc-400'}`} />
            )}
            <h2 className={`m-0 text-2xl font-bold`}>
            {section.replace(/_/g, ' ').toUpperCase()}
            </h2>
        </div>
        <AnimatePresence initial={false}>
            {open[section] && (
            <motion.div
                className="ml-4 mt-1"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={variants}
                transition={transition}
            >
                {Object.entries(value as unknown as TodoList).map(([sub, val]) => renderTodoSection(sub, val as unknown as TodoList, section))}
            </motion.div>
            )}
        </AnimatePresence>
        </div>
    );
    });

return (
    <div className="max-w-3xl mx-auto p-8">
    <h1 className="text-3xl font-bold mb-8">Todo List</h1>
    <div>
        {curriculo && renderRoot(curriculo)}
        {carreira && renderRoot(carreira)}
    </div>
    </div>
);
};

export default TodoPage;
