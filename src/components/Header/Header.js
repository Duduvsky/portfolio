import React from 'react';
import './styles.css'

const Header = () => {

    const perfil = `${process.env.PUBLIC_URL}/assets/Dudu.jpeg`

  return (
    <header style={headerStyle} id='home' className='headerHome'>
        <div className='segura-introducao'>
            <div className='sobre-mim'>
                <h1>About me</h1>
                <p>
                    Sou apaixonado por jogos e um grande fã do mundo Nerd/Geek. Formado em Biomedicina 
                    com pós-graduação em Ciências Biológicas, trabalhei em um banco de sangue no Rio de Janeiro 
                    antes de decidir mudar de carreira. Buscando algo que estimulasse minha curiosidade e me 
                    desafiasse, estou atualmente cursando Análise e Desenvolvimento de Sistemas. Durante minha 
                    formação, participei de diversos projetos acadêmicos, simulando ambientes empresariais reais. 
                    Também explorei o desenvolvimento de jogos utilizando o Godot. Atualmente, meu foco está no 
                    desenvolvimento Full-Stack.
                </p>
            </div>
            <div className='matheus'>
                <div>
                    <h1> Bem-vindo !</h1>
                    <p> Me chamo Matheus Eduardo Pires de Azevedo e aqui você conhecerá um pouco sobre mim e meus projetos </p>
                </div>
                <img src={perfil} alt="perfil" style={imgStyle} />
            </div>
        </div>
        <div className='buttons'>
            <a href="#projetos" className="btn">Projects here !</a>
            <a href="#contact" className="btn">Contact here !</a>
        </div>
    </header>
  );
};

const headerStyle = {
    padding: '2rem',
    color: 'white',
    height: '100vh'
};

const imgStyle = {
    borderRadius: '1000px',
    width: '100%',
    maxWidth: '250px',
    height: 'auto',
  };

export default Header;
