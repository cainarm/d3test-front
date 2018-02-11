import React from 'react';


const PurchaseDetails = props => 
    <div className="purchaseDetails">
        <h3>Detalhes da Compra</h3>
        <div className="price">
            <h2>R$ 660,0 </h2>
            <h4>em até 5x</h4>
        </div>
        <div className="purchaseDetailsList">
            <a><b>Você tera direito a:</b></a>
            <a><b>5</b> Peças de vestuario para você correr melhor</a>
            <a><b>5</b> Acessórios para ajudar no seu desempenho</a>
            <a>Acompanhamento necessário de profissionais de treino</a>
            <a>Apoio com dicas de nutrição</a>
            <a>Acesso exclusivo ao conteudo do APP <b> EXP </b></a>
        </div>
    </div>

export default PurchaseDetails;