import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Col from './Col';

const styles = {
    container:{
        marginTop: 30
    },
    title: {
        marginBottom: 30
    }
}

const PageSection = ({title, children}) => 
    <Row>
        <Col md={12}>
            <div style={styles.container}>
                <h4 style={styles.title}>{title}</h4>
                {children}
            </div>
        </Col>
    </Row>

PageSection.propTypes = {
    title: PropTypes.string.isRequired
};


export default PageSection;