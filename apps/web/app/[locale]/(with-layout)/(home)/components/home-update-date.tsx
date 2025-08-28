export default function HomeUpdateDate() {
  const japanDate = new Date().toLocaleDateString('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const [year, month, day] = japanDate.split('/');

  return (
    <div className="text-jp-body2 mt-[4rem] flex justify-end font-medium text-gray-600">
      更新日時 :<span className="text-en-body1">{year}</span>年
      <span className="text-en-body1">{month}</span>月
      <span className="text-en-body1">{day}</span>日
    </div>
  );
}
