import "./calculate.css";
import DisplayCalculate from "../../components/common/calculate/display.calculate"
import BtnsCalculate from "../../components/common/calculate/btns.calculate"


function CalculaltePage() {
  return (
    <>
        {/* 계산기 숫자 디스플레이 영역 */}
        <DisplayCalculate />

        {/* 계산기 버튼 영역 */}
        <BtnsCalculate />
    </>
  );
}

export default CalculaltePage;