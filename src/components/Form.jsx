import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    segment: '',
    investment: '',
    termsAccepted: false, // State to track if terms are accepted
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  if (!formData.termsAccepted) {
    swal("You must accept the terms and conditions");
    return;
  }
  const emailParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    state: formData.state,
    segment: formData.segment,
    investment: formData.investment,
  };

  emailjs
    .send(
      'service_wjx70w7', // Replace with your EmailJS Service ID
      'template_in6e389', // Replace with your EmailJS Template ID
      emailParams,
       'u5UYt3ajx7rBS9cYq' // Replace with your EmailJS User ID
    )
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        swal("Your message has been sent successfully!");
        // alert('Your message has been sent successfully!');
      },
      (error) => {
        console.error('FAILED...', error);
        swal('Failed to send the message. Please try again later.');
        // alert('Failed to send the message. Please try again later.');
      }
    );
};

  // const handleSubmit = (e) => {
  //   e.preventDefault();

    
  //   if (!formData.termsAccepted) {
  //     alert('You must accept the terms and conditions');
  //     return;
  //   }
  //   console.log('Form Submitted', formData);
  //   // You can add further logic to submit the form data
  // };

  return (
    <form onSubmit={handleSubmit}  style={{padding:"30px" ,border:"2px solid #fff " ,borderRadius:"5px"}}>
      <div className=''>
        <input  className=' my-2 px-3'
          type="text"
          id="name"
          name="name"
          placeholder='Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <input className=' my-2 px-3'
          type="email"
          id="email"
          name="email"
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <input className=' my-2 px-3'
          type="tel"
          id="phone"
          name="phone"
          placeholder='Phone'
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <select className=' my-2 px-3'
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        >
          <option value=""> State</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>  
          <option value="Arunachal Pradesh">Arunachal Pradesh </option>
          <option value="Assam">Assam </option>
          <option value="Bihar">Bihar </option>
          <option value="Chhattisgarh">Chhattisgarh </option>
          <option value="Goa">Goa </option>
          <option value="Gujarat">Gujarat </option>
          <option value="Haryana">Haryana </option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jharkhand">Jharkhand </option>
          <option value="Karnataka">Karnataka </option>
          <option value="Kerala">Kerala </option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur </option>
          <option value="Meghalaya">Meghalaya </option>
          <option value="Mizoram">Mizoram </option>
          <option value="Nagaland">Nagaland </option>
          <option value="Odisha">Odisha </option>
          <option value="Punjab">Punjab </option>
          <option value="Rajasthan">Rajasthan </option>
          <option value="Sikkim">Sikkim </option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana </option>
          <option value="Tripura">Tripura </option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand </option>
          <option value="West Bengal">West Bengal</option>
        </select>
      </div>

      <div>
        <select className=' my-2 px-3'
          id="segment"
          name="segment"
          value={formData.segment}
          onChange={handleChange}
          required
        >
          <option value="">Segment</option>
          <option value="Technology">Equity Cash / Intraday</option>
          <option value="Healthcare">Option Call / Put</option>
          <option value="Finance">Futures (Derivatives)</option>
          <option value="Education">Index</option>
          {/* Add more segments as needed */}
        </select>
      </div>

      <div>
        <select className=' my-2 px-3'
          id="investment"
          name="investment"
          value={formData.investment}
          onChange={handleChange}
          required
        >
          <option value="">Select Investment Level</option>
          <option value="Above INR.50,000">Above INR.50,000</option>
          <option value="Above INR.1 Lac">Above INR.1 Lac</option>
          <option value="Above INR.3 Lac">Above INR.3 Lac</option>
          <option value="Above INR.5 Lac">Above INR.5 Lac</option>
        </select>
      </div>

      <div className=' mx-4 mt-2 '>
        <label className='d-flex flex-row justify-content-start text-white' >
          <input className='' style={{height:"30px" , width:"30px" , marginRight:"20px"}}
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
          />
          I accept the <a className='text-white text-decoration-none'
           href="/terms-and-conditions" target="_blank" rel="noopener noreferrer"> Terms and Conditions</a>
        </label>
      </div>

      <button className=' my-2 p-3' type="submit" style={{borderRadius:"6px"}}>Contact Us</button>
    </form>
  );
};

export default Form;
