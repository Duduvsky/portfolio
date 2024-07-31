import React from 'react';

const Gallery = () => {

  const images = [
    '/assets/Desktop_Biscoitos.PNG',
    '/assets/Desktop.PNG',
    '/assets/Tela_Cadastro_Confirmando_as_senhas.PNG',
    '/assets/Pagina_de_Cadastramento.PNG'
  ]

  return (
    <section style={sectionStyle} id='gallery'>
      <h2>My Gallery</h2>
      <div style={galleryStyle}>
      {images.map((src, index) => (
        <div key={index} className="image-container">
          <img src={src} alt={`${index + 1}`} style={imgStyle} />
        </div>
      ))}
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '2rem',
  textAlign: 'center',
};

const galleryStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
};

const imgStyle = {
  width: '100%',
  maxWidth: '550px',
  height: 'auto',
};


export default Gallery;
