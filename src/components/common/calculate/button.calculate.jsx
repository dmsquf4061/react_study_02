// 계산기 숫자 디스플레이
let sumValue = 0;

function ButtonCalculate ({ sign, number }) { 
    //console.log('ButtonCalculate가 부모한테 받은 싸인 프롭스! ', sign);

    const clickFunction = function () {
        sumValue += Number(sign);

        //alert(sign);
        console.log("합계는 ? ", sumValue);

    }
    return (
        <button 
            className={`w-12 flex justify-center items-baseline border border-stone-200 border-solid h-12 rounded-md 
            ${sign === '=' ? '!bg-stone-500 text-white hover:!bg-stone-600' 
                           : '!bg-stone-200 text-black hover:!bg-stone-300'}`}
            onClick={clickFunction}               
        >
            {sign}
        </button>
    )
}

export default ButtonCalculate;