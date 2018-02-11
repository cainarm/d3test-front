import React, {Component} from 'react';
import HfSection from './HfSection';
import Row from'./Row';
import Col from './Col';
import Navbar from './Navbar';
import PaymentForm from './PaymentForm';
import PurchaseDetails from './PurchaseDetails';
import WarningContainer from './WarningContainer';

class Home extends Component{
  render(){
    return (
      <div>
        <header>
          <HfSection
            leftText="EXP_"
            rightText="Karol com 5K_"
          />
        </header>
        
        <div className="text-center">
          <h1 style={{fontWeight: 'bold'}}>Cadastro</h1>
        </div>

        <Navbar 
          numbers={4}
          active={4}
        />
        <div className="content">
          <Row>
            <WarningContainer
              title="Falha ao processar os dados do cartão"
              text={`Verifique se as informações do seu cartão estão corretas(Nome, Número, Data de validade, Código de Segurança.
              Se o problema persistir você pode usar outro cartão de crédito ou escolher como forma de pagamento o boleto bancario. 
              Ou então, se preferir, entre em contato com o seu banco ou adiministradora de cartão de crédito e tente realizar a compra novamente"`}
            />
          </Row>
          <Row> 
            <Col md={7}>
              <PaymentForm onSubmit={values => console.log(values)}/>
            </Col>
            <Col md={5}>
              <PurchaseDetails />
            </Col>
          </Row>
        </div>
        <footer>
          <HfSection
            leftText="EXP_"
            rightText="Karol com 5K_"
            reverse
          />
        </footer>
      </div>
    );
  }
}


export default Home;