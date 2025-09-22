interface TableHeader {
  label: string;
  width: string;
}

interface TableHeaderProps {
  headers: TableHeader[];
}

export default function TableHeader({ headers }: TableHeaderProps) {
  return (
    <thead>
      <tr className="flex h-[3.5rem] w-[93.6rem] items-center justify-end gap-[1.6rem] border-b border-gray-400 px-[1.6rem]">
        {headers.map((header, index) => (
          <th
            key={index}
            className={`${header.width} caption1 flex justify-start font-[700] text-gray-600`}
          >
            {header.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
