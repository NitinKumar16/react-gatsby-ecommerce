import React from 'react';
import Heading from './Heading';
import {Link} from 'gatsby';

export default function infoblock({heading}) {
    return (
        <section className="bg-abttheme my-5 py-4">
            <div className="container">
                <Heading title={heading}/>
                <div classname="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                        Rule behold air over greater one first. 
                        Us seas it isn't for creeping creature given beginning likeness our first herb very their blessed saw. 
                        Air had fruitful you meat of. The. 
                        Were created days their replenish grass moved male gathered is under, 
                        all waters night after. Be have saying. 
                        From created he all, created. May, in years living made given.
                        Rule behold air over greater one first. 
                        Us seas it isn't for creeping creature given beginning likeness our first herb very their blessed saw. 
                        Air had fruitful you meat of. The. 
                        Were created days their replenish grass moved male gathered is under, 
                        all waters night after. Be have saying. 
                        From created he all, created. May, in years living made given.
                        </p>
                        <Link to="/services">
                            <button className="btn-warning  btn-lg">{heading}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
