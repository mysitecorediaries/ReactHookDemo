 import React,{useState} from 'react';


function SignupForm() {

  const initialFormState = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const [formData, setFormData] = useState(initialFormState);
   const [errors, setErrors] = useState({});
   const [success, setSuccess] = useState("");

  

const validateForm = () => {
    let errors = {};  
    // Add validation logic here
    if (!formData.fullName || formData.fullName.length < 3) {
      errors.fullName = "Full Name is required and should be at least 3 characters long";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is required and should be valid";
    }
    if (!formData.password || formData.password.length < 6) {
      errors.password = "Password is required and should be at least 6 characters long";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
}

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors =validateForm();
    if(Object.keys(validationErrors).length === 0){
      setSuccess("Form submitted successfully");
      console.log("Form Data:", formData);   
      setFormData(initialFormState);
      setErrors({});

    } else {
      setErrors(validationErrors);
      setSuccess("");
      console.log("Validation errors:", validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
       <h1>Sign Up Form</h1>
    <div>
     <input type="text" className={errors.fullName ? "error" : ""} placeholder="Full Name" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
    {errors.fullName && <p style={{color: 'red'}}>{errors.fullName}</p>}
    </div>
    <div>
     <input type="email" className={errors.email ? "error" : ""} placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />  
    {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
    </div>
    <div>
     <input type="password" className={errors.password ? "error" : ""} placeholder="Password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />  
   {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
    </div>
    <div><input type="password" className={errors.confirmPassword ? "error" : ""} placeholder="Confirm Password" value={formData.confirmPassword} onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} />  
    {errors.confirmPassword && <p style={{color: 'red'}}>{errors.confirmPassword}</p>}
    </div>
    <button type="submit">Sign Up</button>
    {success && <p style={{color: 'green'}}>{success}</p>}
  </form>
  
  );
}
export default SignupForm;   