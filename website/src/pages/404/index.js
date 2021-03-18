import React from 'react';
import Footer from '../../components/Footer'
import Common from '../Common'

function NotFound() {
    return (
        <div className="notfound">
            <Common />
            <div >
                <div className="content container px-4 mx-auto" style={{ height:500, width:500, padding: 50}}>
                    <img src="/images/404.svg" alt="404" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default NotFound;