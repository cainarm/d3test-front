import React, {Component} from 'react';
import RoundButton from './RoundButton';
import ButtonSwitch from './ButtonSwitch';
import PageSection from './PageSection';
import { RoundTextField, RoundSelectField } from './RoundInputs';
import {required} from '../utils/validator';
import { fillZero } from '../utils/numeric';
import Card from 'react-credit-cards';
import PropTypes from 'prop-types';
import 'jquery-mask-plugin';
import Col from './Col';
import Row from './Row';

const styles = {
  securityCode: {width: 190},
  forceFlexRow: {display: 'flex', flexDirection: 'row'},
  creditCard: {marginLeft: 10, marginBottom: 30, float: 'left'}, 
  cardValidityInput: { width: 100, marginRight: 4},
  formButtonsContainer : {marginTop: 30},
  triangle: {marginLeft: -20, marginRight: 20},
  formButtonLeft: {float: 'left'},
  formButtonRight: {float: 'right'}
}


class PaymentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            chargingAddress: false,
            submitted: false,
            focused: 'number',
            formData: {
               cardNumber: "",
               cardMonth: "",
               cardYear: "",
               securityCode: "000", 
               cardName: "",
            }
        };
    }

    componentDidMount() {
        this.$zip = $(this.zip);
        this.$cardNumber = $(this.creditCard); 
        
        this.$zip.mask('00000-000');
        this.$cardNumber.mask('0000-0000-0000-0000');
    }

    componentWillUnmount() {
        this.$zip.unmask();
        this.$cardNumber.unmask();
    }

    toggle(){
        this.setState({
            chargingAddress: !this.state.chargingAddress
        });
    }

    highlightFields(){
        this.setState({
            submitted: true
        })

        console.log(this.zipCode);
    }
    
    onChange(e){
        const state = this.state
        state.formData[e.target.name] = e.target.value;   
        
        this.setState(state);
    }

    onCVCBlur(){
        this.setState({
            focused: 'name'
        });
    }

    onCVCFocus(){
        this.setState({
            focused: 'cvc'
        });
    }

    submit(e){
        e.preventDefault();
        this.props.onSubmit(this.state.formData);
    }

    render(){    
        return (
            <div>
                <h3>Pagamento</h3>
                    
                <PageSection
                    title="Endereço de entrega"
                > 
                    <ButtonSwitch 
                        firstOption="É o mesmo da entrega"
                        secondOption="É diferente da entrega"
                        onToggle = {this.toggle.bind(this)}
                    />
                </PageSection>
                <form onSubmit={this.submit.bind(this)}>
                    <PageSection
                        title="Qual o seu CEP de cobrança ?"
                    > 
                        <Col md={6}>
                            <RoundTextField 
                                className={this.state.submitted && 'submitted'} 
                                onChange={this.onChange.bind(this)}
                                setRef={el => this.zip = el}
                                name="zipCode" 
                                label="CEP"
                                required
                            />
                        </Col>
                    </PageSection>
                    {this.state.chargingAddress &&
                        <PageSection
                            title="Confirme seu endereço de cobrança"
                        > 
                            <Row>
                                <Col md={7}>
                                    <RoundTextField 
                                        name="publicPlace" 
                                        label="Logradouro"
                                        onChange={this.onChange.bind(this)}
                                        className={this.state.submitted && 'submitted'} 
                                    />
                                </Col>
                                <Col md={5}>
                                    <RoundTextField 
                                        label="Número" 
                                        name="number"
                                        onChange={this.onChange.bind(this)}
                                        className={this.state.submitted && 'submitted'} 
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={9}>
                                    <RoundTextField 
                                        label="Complemento" 
                                        name="complement"
                                        onChange={this.onChange.bind(this)}
                                        className={this.state.submitted && 'submitted'} 
                                    />
                                </Col>
                                <Col md={3}>
                                    <RoundSelectField
                                        className={this.state.submitted && 'submitted'} 
                                        onChange={this.onChange.bind(this)}
                                        label="UF" 
                                        name="uf" 
                                        data={[{
                                            value: 1, text: 'SP'
                                        }]}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <RoundSelectField
                                        className={this.state.submitted && 'submitted'}  
                                        onChange={this.onChange.bind(this)}
                                        label="Cidade" 
                                        name="city"
                                        data={[{
                                            value: 1, 
                                            text: "São Paulo"
                                        }]}
                                    />
                                </Col>
                            </Row>
                        </PageSection>
                    }
                    <PageSection
                        title="Dados do cartão"
                    >
                        <Row> 
                            <div style={styles.creditCard}>
                                <Card
                                    number={this.state.formData.cardNumber.replace(/-/g, "")}
                                    name={this.state.formData.cardName}
                                    expiry={`${fillZero(this.state.formData.cardMonth)}/${this.state.formData.cardYear}`}
                                    cvc={this.state.formData.securityCode}
                                    focused={this.state.focused}
                                />    
                            </div>
                        </Row>
                         <Row>
                            <Col md={5}>
                                <RoundTextField 
                                    className={this.state.submitted && 'submitted'} 
                                    onChange={this.onChange.bind(this)}
                                    label="Número" 
                                    setRef={ccn => this.creditCard = ccn}
                                    name="cardNumber"  
                                    required                              
                                />
                            </Col>
                            <Col md={7}>
                                <RoundTextField 
                                    label="Nome completo" 
                                    className={this.state.submitted && 'submitted'}
                                    onChange={this.onChange.bind(this)}
                                    name="cardName" 
                                    required
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={5} style={styles.forceFlexRow}>
                                <RoundSelectField 
                                    className={this.state.submitted && 'submitted'}
                                    onChange={this.onChange.bind(this)} 
                                    label="Validade" 
                                    name="cardMonth"
                                    style={styles.cardValidityInput}
                                    required
                                    data={
                                        Array(12)
                                        .fill()
                                        .map((item, index) => {
                                            return {value: index + 1, text: index + 1}
                                        })
                                    }
                                />
                                <RoundSelectField  
                                    className={this.state.submitted && 'submitted'} 
                                    onChange={this.onChange.bind(this)}
                                    name="cardYear"
                                    style={styles.cardValidityInput}
                                    required
                                    data={
                                        Array(20)
                                        .fill()
                                        .map((item, index) => {
                                            return {value: index + 18, text: index + 18}
                                        })
                                    }
                                />
                            </Col>
                            <Col md={7}>
                                <RoundTextField 
                                    className={this.state.submitted && 'submitted'} 
                                    onChange={this.onChange.bind(this)}
                                    onBlur={this.onCVCBlur.bind(this)}
                                    onFocus={this.onCVCFocus.bind(this)}
                                    label="Código de segurança" 
                                    name="securityCode" 
                                    style={styles.securityCode}
                                    required
                                />  
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection
                        title="Valor e parcelamento"
                    > 
                        <Row>
                            <Col md={7}>
                                <RoundSelectField
                                    className={this.state.submitted && 'submitted'} 
                                    onChange={this.onChange.bind(this)}
                                    name="installment"
                                    data={[
                                        {value: 1, text: "1 x R$660" },
                                        {value: 1, text: "2 x R$330" },
                                        {value: 1, text: "3 x R$220" },
                                        {value: 4, text: "4 x R$165" },
                                        {value: 5, text: "5 x R$132" }
                                    ]}
                                />
                            </Col>
                        </Row>
                    </PageSection>
                    
                    <div style={styles.formButtonsContainer}> 
                        <RoundButton>
                            <div className="triangle"  style={styles.triangle}/> 
                            Voltar
                        </RoundButton>
                        <RoundButton type="submit" active  onClick={this.highlightFields.bind(this)} style={styles.formButtonRight}>
                            Finalizar compra
                        </RoundButton>
                    </div>
                </form>
            </div>        
        )
    }
}

PaymentForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default PaymentForm;