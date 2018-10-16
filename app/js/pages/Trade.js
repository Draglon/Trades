import React from 'react';
 
class Trade extends React.Component{
    render(){
        return (
            <main className='main'>
                <section className=''>
                    <div className='wrapper'>
                        <h2>Торги</h2>
                        <div className=''>
                            <label>BTC/USD</label><span className='low'>Low:</span> 6544.51 USD / <span className='high'>High:</span> 7339.8 USD <span className='text-blue'>0.63%</span>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
module.exports = Trade;