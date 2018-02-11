import React, {Component} from 'react';
import HfSection from '../components/HfSection';
import Row from'../components/Row';
import Col from '../components/Col';
import Navbar from '../components/Navbar';
import PaymentForm from '../components/PaymentForm';
import PurchaseDetails from '../components/PurchaseDetails';
import WarningContainer from '../components/WarningContainer';
import { addPaymentData, setValid } from '../actions/PaymentActions';
import Payment from 'payment';
import { connect } from 'react-redux';

const Home = ({onSubmit, onFail, isCreditCardValid ,payment}) => 
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
          {!isCreditCardValid &&  
            <Row>
              <WarningContainer
                title="Falha ao processar os dados do cartão"
                text={`Verifique se as informações do seu cartão estão corretas(Nome, Número, Data de validade, Código de Segurança.
                    Se o problema persistir você pode usar outro cartão de crédito ou escolher como forma de pagamento o boleto bancario. 
                    Ou então, se preferir, entre em contato com o seu banco ou adiministradora de cartão de crédito e tente realizar a compra novamente"`}
                />
            </Row>
          }
        <Row> 
          <Col md={7}>
            <PaymentForm onSubmit={onSubmit} onFail={onFail}/>
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

const mapStateToProps = (state) => {
  return {
    payment: state.payment.paymentData,
    isCreditCardValid: state.payment.valid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => {
      dispatch(addPaymentData(values));
      dispatch(setValid(Payment.fns.validateCardNumber(values.cardNumber)));
    },
    onFail: () => {
      dispatch(setValid(false))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);