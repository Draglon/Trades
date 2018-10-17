import React from 'react';
 
class Trade extends React.Component{
    render(){
        return (
            <main className='main'>
                <section className='section trading'>
                    <div className='wrapper'>
                        <h2 className='trading__title'>Торги</h2>
                        <div className='main-ticket'>
                            <label className='main-ticket__pair'>BTC/USD</label><span className='text-negative'>Low:</span> 6544.51 USD / <span className='text-positive'>High:</span> 7339.8 USD <span className='text-positive'>0.63%</span>
                        </div>

                        <div className=''>
                            <div className=''>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}
module.exports = Trade;