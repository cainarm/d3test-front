import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
                <Col md={4}>
                    <RoundButton onClick={this.toggle.bind(this)} active={this.state.active}>{firstOption}</RoundButton>
                </Col>
                <Col md={4}>
                    <RoundButton onClick={this.toggle.bind(this)} active={!this.state.active}>{secondOption}</RoundButton>
                </Col>
            </Row>
        );
    }
};

ButtonSwitch.propTypes = {
    firstOption: PropTypes.string.isRequired,
    secondOption: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired
}