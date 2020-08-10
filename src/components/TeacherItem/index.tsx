import React from "react";
import "./styles.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/59097467?s=460&u=067e8d972b74b3ca1d44aec33d7517e4342747cf&v=4"
          alt="Maicon Lourenço"
        />
        <div>
          <strong>Maicon Lourenço</strong>
          <span>Engenharia</span>
        </div>
      </header>

      <p>
        Python elementalist
        <br />
        <br />
        Desenvolvedor de inteligência artificial ligada a robótica avançada,
        redes neurais, e comportamento das máquinas em ambientes familiares e
        extremos.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp icon" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
