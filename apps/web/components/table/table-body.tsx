import { ReactNode } from 'react';

interface TableBodyProps {
  data: ReactNode[][];
  widths: string[];
}

export default function TableBody({ data, widths }: TableBodyProps) {
  return (
    <tbody>
      {data.map((row, index) => (
        <tr
          key={index}
          className="flex w-[93.6rem] items-center justify-end gap-[1.6rem] border-b border-gray-400 px-[1.6rem] py-[2.4rem]"
        >
          {row.map((cell, cellIndex) => (
            <td
              key={cellIndex}
              className={`${widths[cellIndex]} flex justify-start truncate`}
            >
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
