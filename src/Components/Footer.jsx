import React from "react";
import { MDBFooter } from 'mdb-react-ui-kit';

export const Footer = () => {
    return (
        <MDBFooter className="bg-black" color='white'>
            <div className='flex items-center justify-center text-center h-[8vh] w-'>
            &copy; {new Date().getFullYear()}&nbsp;&nbsp;&nbsp;Copyright&nbsp;&nbsp;&nbsp; {' '}
                <a href="https://www.bestwebdev.co.uk" target="_blank" className="hover:text-gray-600">
                    bestwebdev.co.uk
                </a>
            </div>
        </MDBFooter>
    );
}