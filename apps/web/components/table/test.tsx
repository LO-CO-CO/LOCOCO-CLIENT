import Table from './table';

export default function Test() {
  const headers = [
    { label: '크리에이터', width: 'w-[20rem]' },
    { label: '팔로워 수', width: 'w-[15rem]' },
    { label: '상태', width: 'w-[10rem]' },
  ];

  const tableData = [
    [
      <div key="profile-1" className="flex items-center gap-[0.8rem]">
        <span>Mia Rodriguez</span>
      </div>,
      <span key="followers-1">34.2K</span>,
      <span key="status-1" className="rounded bg-green-100 px-2 py-1">
        승인
      </span>,
    ],
    [
      <div key="profile-2" className="flex items-center gap-[0.8rem]">
        <span>Alex Thompson</span>
      </div>,
      <span key="followers-2">128.5K</span>,
      <span key="status-2" className="rounded bg-yellow-100 px-2 py-1">
        대기중
      </span>,
    ],
  ];

  return <Table headers={headers} data={tableData} />;
}
