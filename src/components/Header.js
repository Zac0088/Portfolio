import React from 'react';
import NavTabs from '../components/NavTabs'

export default function Header(props) {
    const {currentPage, handlePageChange } = props;
    const headerStyles = {
        backgroundColor: 'lightgray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '20px'
    };
    const h1Styles = {
        margin: 0,
        fontsize: '24px',
        alignSelf: 'flex-start'
    }
    return (
        <div style={headerStyles}>
            <h1 style= {h1Styles} >Portfolio of Zachary Smart</h1>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
    );
}