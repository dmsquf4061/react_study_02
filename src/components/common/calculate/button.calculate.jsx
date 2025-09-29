// 계산기 숫자 디스플레이

function ButtonCalculate ({ sign, number }) {

    console.log('ButtonCalculate가 부모한테 받은 싸인 프롭스! ', sign);

    return (
        <button 
            className={`w-12 flex justify-center items-baseline border border-stone-200 border-solid h-12 rounded-md 
                       ${sign === '=' ? '!bg-stone-500 text-white' : '!bg-stone-200 text-black'}`}
        >
            {sign}
        </button>
    )
}

export default ButtonCalculate;