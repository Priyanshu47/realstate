import React from 'react'
import { styled } from 'styled-components'

export const EnquiryForm = () => {
  return (
    <div className="container-fluid bg-slate-200">
      <div className="row inquiry-banner p-5">
        <div className="col col-lg-8 col-md-8 col-12 py-24 max-sm:py-2">
          <span className="">
            <h1 className="lg:text-5xl text-xl font-bold text-orange-500">
              Design Custom Real Estate Inquiry Forms
            </h1>
            <p className="text-orange-500 py-4">
              Design custom lead capture forms that integrate with the Houzez
              CRM
            </p>
          </span>
        </div>
        <div className="bg-white rounded col col-lg-4 col-md-4 col-12 p-5 form-bg shadow-lg">          
          
            <input
                type="text"
                className="form-control mt-3"
                placeholder="Name"
                required
            />            
          <input
            type="email"
            className="form-control mt-3"
            placeholder="Email Address"
            required
          />
          <input
            type="phone"
            className="form-control mt-3"
            placeholder="Contact Number"
            required
          />
         
          <input
            type="submit"
            className="w-full py-2 bg-sky-500 rounded mt-2 text-white hover:bg-sky-600"
          />
          </div>
        </div>
      </div>

  )
}

const EnguiryWrapper = styled.div`
.inquiry-banner{
    height: auto;
	// background-image: url('./Images/inquiry.jpg');
	background-size: 100% 100%;
}
`