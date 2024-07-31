import React from 'react';
import Slider from 'react-slick';
import './styles.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projetos = () => {
  const videoData = [
    {
      src: `${process.env.PUBLIC_URL}/assets/React_App.mp4`,
      title: "React App",
      description: "Uma demonstração de um aplicativo React. Este projeto é um protótipo de uma página web que integra diversos tipos de conteúdo, como posts, vídeos e fotos, utilizando uma API. Desenvolvido sem o auxílio de frameworks adicionais, este aplicativo demonstra o poder e a flexibilidade do React para criar interfaces dinâmicas e interativas.",
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/Landing_Page.mp4`,
      title: "Landing Page",
      description: "Projeto de uma landing page para o setor de advocacia. Desenvolvi esta página com HTML, CSS e JavaScript (utilizando Bootstrap) para um amigo advogado. A página é totalmente navegável e responsiva, projetada para fornecer uma presença online profissional e eficaz, destacando os serviços oferecidos de forma clara e atrativa.",
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/App_PcInclusão.mp4`,
      title: "App PcInclusão",
      description: "Aplicativo de inclusão digital para hardware de computadores. Este aplicativo foi criado para ajudar pessoas que têm pouco conhecimento sobre peças de computador. Ao clicar em uma imagem, o aplicativo exibe o nome da peça e sua função, facilitando a compreensão e aprendizado sobre hardware.",
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/App_CriptoMoeda.mp4`,
      title: "App CriptoMoeda",
      description: "Aplicativo para acompanhamento de valores de criptomoedas. Este app permite aos usuários visualizar o valor de várias criptomoedas em dólar. Basta digitar a sigla ou nome da moeda para obter a cotação atual. Utiliza um servidor local com db.json para hospedar a API, demonstrando habilidades em consumo de dados e integração de APIs.",
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/App_GeneratePasswordCRUD.mp4`,
      title: "App GeneratePasswordCRUD",
      description: "Aplicativo para geração e gerenciamento de senhas. Este aplicativo é uma ferramenta poderosa para gerar senhas seguras e gerenciar informações sensíveis. As senhas geradas seguem critérios de segurança, incluindo letras minúsculas, maiúsculas e números. Utilizando o SQLite integrado no React, o app permite realizar operações de CRUD (Create, Read, Update e Delete) de forma eficiente e segura, facilitando o gerenciamento de dados de senha dos usuários. ",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <section style={sectionStyle} id='projetos' className='projetosbg'>
      <h1 className='titulo'>My Projects</h1>
      <Slider {...settings}>
        {videoData.map((video, index) => (
          <div key={index} style={cardStyle}>
            <video width="100%" height="300px" controls style={videoStyle}>
              <source src={video.src} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <h3 style={textStyle}>{video.title}</h3>
            <p style={textStyle}>{video.description}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

const sectionStyle = {
  padding: '2rem',
  textAlign: 'center',
  // background: '#282c34',
};

const cardStyle = {
  padding: '1rem',
  margin: '1rem',
  border: '1px solid #ddd',
  borderRadius: '10px',
  background: '#f9f9f9',
  textAlign: 'left',
};

const videoStyle = {
  borderRadius: '10px',
};

const textStyle = {
  color: 'white',
  fontSize: '18px',
};

export default Projetos;
