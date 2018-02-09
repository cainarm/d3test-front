import React, {Component} from 'react';
import RoundButton from '../components/RoundButton';
import Row  from './Row';
import Col from './Col';

export default class ButtonSwitch extends Component{
    constructor(props){
        super(props);
        this.state = {
            active : true
        }
    }

    toggle(){
        this.setState({
            active: !this.state.active
        });
        
        this.props.onToggle();
    }

    render(){
        const {firstOption, secondOption} = this.props;

        return (
            <Row {...this.props}>
                <Col md={3}>
                    <RoundButton onClick={this.toggle.bind(this)} active={this.state.active}>{firstOption}</RoundButton>
                </Col>
                <Col md={3}>
                    <RoundButton onClick={this.toggle.bind(this)} active={!this.state.active}>{secondOption}</RoundButton>
                </Col>
            </Row>
        );
    }
};