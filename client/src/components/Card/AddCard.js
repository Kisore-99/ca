import React, {useState} from 'react'

 export default function AddCard() {
   const [inputs, setInputs]= useState({});
   const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      alert('The information is stored in db');
    }
  }
  const handleInputChange = (e) => {
    e.persist();
    setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
  }
    return (
        <form onSubmit={handleSubmit}>
            <div class="form-group row">
              <div class="col-sm-10">
                <input type="email" class="form-control" id="cardnum" placeholder="email" onChange= {handleInputChange} value= {inputs.email}/>
              </div>
            </div>

            <div class="form-group row">
              <div class="col-sm-10">
                <input type="number" class="form-control" id="cardnum" placeholder="Card Number" onChange= {handleInputChange} value= {inputs.card_number}/>
              </div>
            </div>

            <div class="form-group row">
              <div class="col-sm-10">
                <input type="text" class="form-control" id="cardnum" placeholder="CVV" onChange= {handleInputChange} value= {inputs.cvv}/>
              </div>
            </div>

            <div class="form-group row">
              <div class="col-sm-10">
                <input type="text" class="form-control" id="cvv" placeholder="Card Holder Name" onChange= {handleInputChange} value= {inputs.card_holder_name}/>
              </div>
            </div>
          
          
          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary" >Submit</button>
            </div>
          </div>
  </form>
    )
}