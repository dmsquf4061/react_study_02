import { useEffect, useState } from "react";

import "./calculate.css";
import DisplayCalculate from "../../components/common/calculate/display.calculate"
import BtnsCalculate from "../../components/common/calculate/btns.calculate"


function CalculaltePage() {
  const calSings = [ "7", "8", "9", "×", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];
  const [result, setResult] = useState(0);

  // 체크
  useEffect (() => {
    console.log ('result 변경됨');
  }, [result]);

  // result 업데이트
  // 플러스 버튼
  const plusClick = () => {
    setResult((prev) => prev + 1);
  };

  // 마이너스 버튼
  const minusClick = () => {
    setResult((prev) => prev - 1);
  };

  return (
    <>
        {/* 계산기 숫자 디스플레이 영역 */}
        {/* <DisplayCalculate /> */}
        <div>
            <input 
              readOnly 
              value={result}
              className="w-50 mb-0.5 border-1 border-stone-200 border-solid h-12 rounded-md text-right px-2" 
              type="text"
            />
        </div>

        {/* 계산기 버튼 영역 */}
        {/* <BtnsCalculate /> */}
        <div>
            <ul className="w-50 flex flex-wrap gap-0.5">
                {
                    calSings.map((i, index) => {
                        return(
                            <li key={i + index}>
                                <button 
                                  className={`w-12 flex justify-center items-baseline border border-stone-200 border-solid h-12 rounded-md 
                                  ${i === '=' ? '!bg-stone-500 text-white hover:!bg-stone-600' 
                                              : '!bg-stone-200 text-black hover:!bg-stone-300'}`}
                                  onClick={() => console.log(i)}               
                                >
                                  {i}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </>
  );
}

export default CalculaltePage;