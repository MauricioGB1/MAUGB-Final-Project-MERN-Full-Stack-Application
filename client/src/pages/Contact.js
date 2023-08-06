import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';
import { BsTelephone } from 'react-icons/bs';


const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='ContactForm' >
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} className="col-12 m-3" noValidate >
                {/* Row 1 of form */}
                <div className='row formRow'>
                  {/* About us section */}
                  <br></br>
                  <br></br>
                  <h1>About Us</h1>
                  <br></br>
                  <br></br>
                  <p>We are a new code developer, project management and architectural design firm committed to delivering according to the highest quality standards.
We deliver designs that inspire, connect, and perform. Our portfolio covers multiple ranges of applications in architectural design construction and project management.</p>
                  <img src="/../../../images/image5.jpg" alt=""></img>
                  <br></br>
                  {/* Contact */}
                  <h1>Contact Us</h1>
                  <br></br>
                  <br></br>
                  <p>We are an interdisciplinary global design firm expanding to the technological and digital side. Our team of architects, coding programmers , project management and designers will provide the smart, quality, innovation solutions that meet all regulations and building construction standards.</p>

                  <p></p>
                  {/* Enquiry  */}
                  <p>Contact us at (+1) 800 614 212 3457 <BsTelephone style={{ color: 'blue', fontSize: '30px' }} />Our team of professionals will be in Contact with you to assist you and provide detailed information of our portfolio and services.</p>

                  <br></br>

                  <p>We believe that design should build trust between our collaborators, our clients and those who inhabit the places we design. We aim to inspire and empower the people and communities who encounter our work. To preserve and respect our natural resources, we create places that conserve and improve our planet.</p>

                  <p> We aim to inspire and empower the people and communities who encounter our work. To preserve and respect our natural resources, we create places that conserve and improve our planet.</p>
                  <br></br>

                  <p>If you would like to contact us and receive professional service support, please fill out and submit the form below. </p>
                  <br></br>
                  <h3>Contact Form</h3>
                  <br></br>
                  <h5>Please complete the necessary information in this form and provide a valid email address.</h5>
                  {/*Form Input Area  */}
                  <div className='col-5'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter your name'
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <br></br>
                  <div className='col-5'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col-10'>
                    <br></br>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: {
                          value: true,
                          message: 'Please enter a subject'
                        },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col-10'>
                    <br></br>
                    <textarea
                      rows={6}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>
                <br></br>
                <button className='submit-btn' disabled={disabled} type='submit'>
                  Submit
                </button>
                <br></br>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;