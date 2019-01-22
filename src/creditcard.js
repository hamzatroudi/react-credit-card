import React, { Component } from 'react';
import Puce from './puce.jpg';
import Master from './cardlogo.jpg';

class CreditCard extends Component {
    render() { 
        return ( 
            <div className='credi-card-container'>
                  <h1 className="titlecard">CREDIT CARD</h1>
                  <img src={Puce} className="img1"/>
                  
                  <p className="numcarte">7253   3256   7895   1245</p>
                <div className="part">
                   <div className="part1">
                       <p className="p3">5422</p>
                   </div>
                    <div className="part2">
                            <div>
                                <p className="p4">VALID <br/>THRU</p>
                            </div>
                        <div className="part3">
                             <div><p className="p1">MONTH/YEAR</p></div>
                              <div className="p55"><p className="p5">11/50</p></div>
                        </div>
                  
                    </div>
                    <div className="part4">
                    <img src={Master} className="img2" />
                    </div>
                  
                </div>
                  <p className="p6">CARDHOLDER</p>
                  
                  
                    
            </div>
         );
    }
}
 
export default CreditCard;