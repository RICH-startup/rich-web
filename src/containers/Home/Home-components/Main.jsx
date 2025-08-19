import arrowDown from '../../../assets/icons/arrow-down.png'
import moneyIncome from '../../../assets/visual-elements/money-income.png'
import dottedVector from '../../../assets/visual-elements/dotted-element.png'
import Header from './Header'
import "../../../styles/style.css"

function Main() {
    return (
        <main class="flex text-white items-center justify-center space-x-20 h-[1000px]">
            <div id="idHome" class="flex items-center duration-75">
                <div class="w-[40vw] flex-col space-y-7">
                    <h1 class="bg-gradient-to-t from-(--dk-yellow) to-(--lt-yellow) bg-clip-text text-transparent text-[60px] leading-[1.095] font-extrabold">Experiencie sua vida financeira da melhor maneira possível!</h1>
                    <span class="pt-1 pb-1 pl-3 pr-3 bg-(--transparent-purple) rounded-[5px] text-[20]">Para mais informações, clique no botão abaixo</span>
                    <a class="flex items-center bg-white text-black font-bold pt-3 pb-3 pl-5 pr-5 space-x-7 rounded-[10px] mt-6 cursor-pointer w-fit">
                        <p>Sobre Nós</p> 
                        <img src={arrowDown} alt="" class="h-[20px]"/>
                    </a>
                </div>
                <img src={moneyIncome} alt="" />
            </div>
        </main>
    );
}

export default Main;