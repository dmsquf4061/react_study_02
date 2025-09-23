import "../components/common/calculate/calculate.css";

function CalculaltePage() {
  return (
    <>
        <div className="">
            <input className="w-50 mb-0.5 border-1 border-stone-200 border-solid h-12 rounded-md text-right px-2" type="text" />
        </div>
        <ul className="w-50 flex flex-wrap gap-0.5">
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">%</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">CE</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">C</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">←</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">1/x</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">x²</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">√</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">÷</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">7</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">8</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">9</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">×</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">4</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">5</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">6</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">-</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">1</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">2</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">3</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">+</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">+/-</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">0</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-200 border-solid h-12 rounded-md !bg-stone-200">.</button>
            </li>
            <li>
                <button className="w-12 flex justify-center items-baseline border-1 !border-stone-500 border-solid h-12 rounded-md text-white !bg-stone-500">=</button>
            </li>
        </ul>
    </>
  );
}

export default CalculaltePage;