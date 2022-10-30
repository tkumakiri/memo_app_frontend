import React, { useState } from 'react';

export default function MemoPage() {
  const [memo, setMemo] = useState('');

  // const haneleChagngeMemo = use
  const handleChangeMemo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemo(e.target.value);
  };
  return (
    <div className="grid justify-items-center h-screen">
      <div className="font-serif space-y-2 bg-slate-300 w-3/5 h-3/5 mt-2.5">
        <div className="mx-4">
          <h1 className="text-xl">To DO memo</h1>
          <div className="my-10">
            <div>メモ欄</div>
            <input className="border border-gray-300" type="text" onChange={handleChangeMemo} />
          </div>
          <div>カテゴリ</div>
        </div>
      </div>
    </div>
  );
}
