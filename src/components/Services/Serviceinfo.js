import React from 'react'
import { Link } from 'gatsby'

export default function Serviceinfo() {
    return (
    <section className="my-lg-3 mx-auto col-sm-12">
    <div class="card-deck">
    <div class="card">
    <img class="card-img-top" 
    src="https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Minimalistic design</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
    </div>
    <div class="card">
    <img class="card-img-top" 
    src="https://images.unsplash.com/photo-1558959356-4b2c36036b8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
    alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Active assistance team</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
    </div>
    <div class="card">
    <img class="card-img-top" 
    src="https://images.unsplash.com/photo-1587037243183-242fbee8b5df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60100px180/" 
    alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Latest cources</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
    </div>
    </div>
    
    <div class="card bg-dark text-white my-lg-5">
    <img class="card-img" 
    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60/100px270/#55595c:#373a3c/text:Card image" 
    alt="Card image"/>
    <div class="card-img-overlay">
    <h5 class="headline2">Expertise assistant on every step</h5>
    <p class="card-text text-shadow: 2px 5px rgba(0, 0, 0, 0.603) ">
    This is a wider card with supporting text below as a natural lead-in to additional content.
    This content is a little bit longer.
    This is a wider card with supporting text below as a natural lead-in to additional content. 
    This content is a little bit 
    This is a wider card with supporting text below as a natural lead-in to additional content. 
    This content is a little bit longer
    This is a wider card with supporting text below as a natural lead-in to additional content.
    This content is a little bit longer.
    This is a wider card with supporting text below as a natural lead-in to additional content. 
    This content is a little bit 
    This is a wider card with supporting text below as a natural lead-in to additional content. 
    This content is a little bit longer</p>
    <p class="card-text">Last updated 3 mins ago</p>
    </div>
    </div>

    <div class="card my-lg-5">
    <h5 class="card-header">Do you want to reach us?</h5>
    <div class="card-body">
      <h5 class="card-title">You are always welcome to reach us!</h5>
      <p class="card-text">We fell happy to help.</p>
      <Link to="/contact" class="btn btn-primary">Contact us</Link>
    </div>
  </div>
    </section>
    )
}
