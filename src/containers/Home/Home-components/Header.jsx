import logoBranca from '../../../assets/logos/logo-rich-branca.png'; 
import { Link } from 'react-router-dom';
import '../../../styles/style.css'

function Header() {
  return (
    <header id="idHeader" class="flex items-center text-white justify-around border-b-2 fixed top-0 left-0 w-full z-50">
      <img src={logoBranca} class="wd-hg-100" />
      <div class="pt-5 pb-5 pl-15 pr-15 bg-gradient text-white">
        <ul class="flex items-center space-x-15">  
          <a href="#idHeader" class="nav">Home</a>
          <a href="#idSobreNos" class="nav">Sobre nós</a>
          <a href="#idCursos" class="nav">Cursos</a>
          <a href="#idSimulacoes" class="nav">Simulações</a>
          <a href="#idSuporte" class="nav">Suporte</a>
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