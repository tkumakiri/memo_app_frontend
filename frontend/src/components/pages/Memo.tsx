import React, { useState } from 'react';

export default function MemoPage() {
  const [memo, setMemo] = useState('');

  // const haneleChagngeMemo = use
  const handleChangeMemo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemo(e.target.value);
  };
  return (
    <div>
      <div>メモ欄</div>
      <input type="text" onChange={handleChangeMemo} />
      <div>{memo}</div>
      <div>カテゴリ</div>
    </div>
  );
}
