import { useState } from "react";

function  RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  
  function validate() {
    const newErrors = {};

    if(!FormData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate()

     if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // simulate API call
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User registered:", data);
      });

    setFormData({
      username: "",
      email: "",
      password: "",
    });
    
  }
  
  return(
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <label htmlFor="username">User Name</label>
        <input
         type="text" 
         name="username" 
         id="username"
         value={formData.username}
         onChange={handleChange}
         />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
         type="email" 
         name="email" 
         id="email" 
         placeholder="example@gmail.com"
         value={formData.email}
         onChange={handleChange}
          />
        {errors.email && <p>{errors.email}</p>}
      </div>
       <div>
        <label htmlFor="password">Password</label>
        <input
         type="password" 
         name="password" 
         id="password"
         value={formData.password}
         onChange={handleChange}
          />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  )
}

export default RegistrationForm;