import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './App.css';
import perfil from './assets/perfil.jpeg'

function App() {
  return (
    <div className="wrapper">
      <div className="profile-card js-profile-card">
        <div className="profile-card__img">
          <img src={perfil} alt="perfil" />
        </div>
        <div className="profile-card__cnt js-profile-cnt">
          <div className="profile-card__name">Bruno de Souza Bezerra</div>
          <div className="profile-card__txt">
            Desenvolvedor <strong>Python</strong>
            <p>Atualmente cursando Bacharelado em Sistemas de Informação pela
              Universidade Federal do Rio Grande do Norte - UFRN (2017-2021). Tecnólogo
				      em Gestão da Tecnologia da Informação pela UNIP (2012-2015).
				      Tenho experiência com Python, API Rest, Desenvolvimento Android,
				      IoT, Banco de Dados, e agora, me metendo com React e React Native.</p>
          </div>
          <div class="profile-card-social">
            <a href="https://github.com/Kmiokande" className="profile-card-social__item">
              <SocialIcon network="github" bgColor="#000" />
            </a>
            <a href="https://www.linkedin.com/in/brunodesouzabezerra/" className="profile-card-social__item">
              <SocialIcon network="linkedin" />
            </a>
            <a href="https://medium.com/@brunodesouzabezerra" className="profile-card-social__item">
              <SocialIcon network="medium" bgColor="#000" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
