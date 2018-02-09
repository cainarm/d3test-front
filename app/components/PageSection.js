import React from 'react';

const styles = {
    container:{
        marginTop: 30
    },
    title: {
        marginBottom: 30
    }
}

const PageSection = ({title, children}) => 
    <div style={styles.container}>
        <h4 style={styles.title}>{title}</h4>
        {children}
    </div>

export default PageSection;