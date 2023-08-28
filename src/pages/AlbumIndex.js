import { useOutletContext } from 'react-router-dom';

export default function AlbumIndex() {
  const list = useOutletContext();
  return (
    <div>
      這是相簿首頁
      {list.map((item) => {
        return <li key={item.id}>{item.id}</li>;
      })}
    </div>
  );
}
