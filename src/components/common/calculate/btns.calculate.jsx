// 계산기 버튼
import ButtonCalculate from "./button.calculate"

function BtnsCalculate () {
    const calSings = [ "7", "8", "9", "×", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];
    
    return (
        <div>
            <ul className="w-50 flex flex-wrap gap-0.5">
                {
                    calSings.map((i, index) => {
                        return(
                            <li key={i + index}>
                                <ButtonCalculate sign={i} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default BtnsCalculate;