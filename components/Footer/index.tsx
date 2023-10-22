import React from "react";

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-[#00b8f2] text-white font-text-md-bold">
      <div className="container mx-auto py-8">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <h2 className="text-lg font-bold">WEWork - Instituto PROA</h2>
            <address>
              <p>Av. Brigadeiro Faria Lima, 4.055</p>
              <p>4° andar - Itaim Bibi</p>
              <p>04538-133 São Paulo - SP</p>
              <p>contato@proa.org.br</p>
            </address>
          </div>
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <h2 className="text-lg text-[#1c3380]">NEWSROOM</h2>
            <ul>
              <li>Fotos</li>
              <li>Logos</li>
              <li>Manual de marca</li>
            </ul>
          </div>
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <h2 className="text-lg text-[#1c3380]">MAPA DO SITE</h2>
            <p className="text-white font-bold">PRECISA SER ATUALIZADO</p>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-lg text-[#1c3380]">Newsletter</h2>
            <p>
              Quer saber sobre tudo que acontece no PROA?
              <br />
              Inscreva-se na nossa newsletter!
            </p>
            <div className="bg-[#00b8f2] rounded-md border border-solid border-[#ffffff] flex mt-4">
              <input
                type="email"
                id="email"
                className="font-bold text-white p-2 bg-[#00b8f2] rounded-md m-2"
                placeholder="E-mail"
              />
              <button className="font-bold text-[#00b8f2] p-2 bg-white rounded-md">
                INSCREVER
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;