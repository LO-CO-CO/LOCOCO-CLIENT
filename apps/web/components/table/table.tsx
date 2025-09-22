// Table.tsx - 수정된 버전
import { ReactNode } from 'react';

import TableBody from './table-body';
import TableHeader from './table-header';

interface TableHeader {
  label: string;
  width: string;
}

interface TableProps {
  headers: TableHeader[];
  data: ReactNode[][];
}

export default function Table({ headers, data }: TableProps) {
  const widths = headers.map((h) => h.width);

  return (
    <table>
      <TableHeader headers={headers} />
      <TableBody data={data} widths={widths} />
    </table>
  );
}
