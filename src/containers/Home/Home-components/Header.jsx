import logoBranca from '../../../assets/logo-rich-branca.png'; 
import "../../../styles/style.css"

function Header() {
  return (
    <header class="flex items-center">
      <img src={logoBranca} class="wd-hg-100" />
      <div class="pt-5 pb-5 pl-15 pr-15 bg-gradient bg-linear-(--gd-purple) text-white rounded-[30px] shadow-[0px_1px_4px_rgba(0,0,0,1)]">
        <ul class="flex space-x-20">
          <li class="hover:cursor-pointer">Home</li>
          <li class="hover:cursor-pointer">Sobre nós</li>
          <li class="hover:cursor-pointer">Cursos</li>
          <li class="hover:cursor-pointer">Simulações</li>
          <li class="hover:cursor-pointer">Suporte</li>
        </ul>
      </div>
      <button>
        
      </button>
    </header>
  );
}

export default Header