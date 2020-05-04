import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function Dualinfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-abttheme">
            <div className="container">
                <Heading title={heading}/>
                <div className="row text-black">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                        Rule behold air over greater one first. 
                        Us seas it isn't for creeping creature given beginning likeness our first herb very their blessed saw. 
                        Air had fruitful you meat of. The.
                        Were created days their replenish grass moved male gathered is under, 
                        all waters night after. Be have saying. 
                        From created he all, created. May, in years living made given.
                        Rule behold air over greater one first. 
                        Us seas it isn't for creeping creature given beginning likeness our first herb very their blessed saw. 
                        Air had fruitful you meat of. The. 
                        From created he all, created. May, in years living made given.
                        Rule behold air over greater one first. 
                        Us seas it isn't for creeping creature given beginning likeness our first herb very their blessed saw. 
                        Air had fruitful you meat of. The.  
                        Were created days their replenish grass moved male gathered is under, 
                        all waters night after. Be have saying. 
                        From created he all, created. May, in years living made given.
                        Rule behold air over greater one first. 
                        Us seas it isn't for creeping creature given beginning likeness our first herb very their blessed saw. 
                        Air had fruitful you meat of. The. 
                        </p>
                    </div>
                    <div className="col-4">
                            <div className="card">
                            <img className="card-img-top"
                            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60/"
                            alt="Card image"/>
                            <div className="card-body ">
                            <h5 className="card-title text-primary">Just click photos</h5>
                            <p className="card-text">
                            Some quick example text to build on the card title and make up the 
                            bulk of the card's content.
                            Some quick example text to build on the card title and make up the 
                            Some quick example text to build on the card title and make up the 
                            Some quick example text to build on the card title and make up the 
                            </p>
                            <Link to="/about"> 
                                <button className="btn-warning btn-lg btn-block">{heading}
                                </button>
                            </Link>
                    </div>
                  </div>
                    </div>
                </div>
            </div>     
        </section>
    )
}
