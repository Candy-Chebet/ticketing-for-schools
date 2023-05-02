import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function TicketBookingComponent() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const onSubmit = async (data) => {
    setIsFormSubmitted(true);
    try {
      await axios.post('http://localhost:3001/api/student-tickets', data);
      setIsFormSubmitted(false);
      setIsSuccess(true);
      setIsFailure(false);
    } catch (error) {
      setIsFormSubmitted(false);
      setIsSuccess(false);
      setIsFailure(true);
    }
  };

  return (
    <div className=''>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <div class="mb-3">
          <label htmlFor="problem">Problem: </label>
          <input type="text" id="problem" {...register("problem", { required: true })} />
          {errors.problem && <span>This field is required</span>}
        </div>
        <div class="mb-3">
          <label htmlFor="description">Description: </label>
          <input type="text" id="description" {...register("description", { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <div class="mb-3">
                
          <label htmlFor="prioritylevel">Priority Level:</label>
          <input
            type="number"
            id="prioritylevel"
            {...register("prioritylevel", { required: true, min: 0, max: 5 })}
          />
          {errors.prioritylevel && (
            <span>This field is required and should be a number between 0 and 5</span>
          )}
        </div>


        <div>
          <label htmlFor="onoffcampus">onOffCampus:</label>
          <input type="text" id="onoffcampus" {...register("onoffcampus", { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {isFormSubmitted && <p>Sending data...</p>}
      {isSuccess && <p>Form submitted successfully!</p>}
      {isFailure && <p>Form submission failed. Please try again later.</p>}
    </div>
    );
}

export default TicketBookingComponent;
