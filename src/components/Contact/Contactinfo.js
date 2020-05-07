import React from 'react'
import Heading from '../Reusable/Heading'

export default class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.state = {
        status: ""
      };
    }
  
    render() {
      const { status } = this.state;
      return (
        <section className="py-3">
            <div className="col-10 col-sm-8 mx-auto">
            <form 
            onSubmit={this.submitForm}
            action="https://formspree.io/xknqneke"
            method="POST">
            <div className="form-group">
                <input className="form-control my-2" type="email" name="email" id="email" placeholder="Your email ID"/>
            </div>
            <div className="form-group">
                <input className="form-control my-2" type="Name" name="Name" id="Name" placeholder="Enter your Name"/>
            </div>
            <div className="form-group">
                <input className="form-control my-2" type="text" name="phone no." id="phone no." placeholder="Phone no."/>
            </div>
            <div className="form-group">
                <textarea className="form-control my-2" type="text" name="description" id="description" placeholder="Tell us in brief"/>
            </div>
          {status === "SUCCESS" ? <p>Thanks!</p> : <button type="submit" className="btn btn-outline-info btn-block">Submit</button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
        </div>
        </section>
      );

    }
  
    submitForm(ev) {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.setState({ status: "SUCCESS" });
        } else {
          this.setState({ status: "ERROR" });
        }
      };
      xhr.send(data);
    }
  }