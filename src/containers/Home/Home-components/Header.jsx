import logoBranca from '../../../assets/logos/logo-rich-branca.png'; 
import { Link } from 'react-router-dom';
import '../../../styles/style.css'

function Header() {
  return (
    <header class="flex items-center text-white justify-around border-b-2 ">
      <img src={logoBranca} class="wd-hg-100" />
      <div class="pt-5 pb-5 pl-15 pr-15 bg-gradient bg-linear-(--gd-purple) text-white rounded-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.31)]">
        <ul class="flex items-center space-x-15">  
          <li class="nav">Home</li>
          <li class="nav">Sobre nós</li>
          <li class="nav">Cursos</li>
          <li class="nav">Simulações</li>
          <li class="nav">Suporte</li>
        </ul>
      </div>
      <div class="flex space-x-15 items-center">
        <Link to={"/login"}>
          Login
        </Link>
        <Link to={"/cadastro"} class="pt-3 pb-3 pl-10 pr-10 bg-gradient bg-linear-(--gd-purple) text-white rounded-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.31)]">
          <span>Cadastro</span>
        </Link>
      </div>  
    </header>
  );
}

export default Header