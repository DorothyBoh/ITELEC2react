import React, { useState } from 'react';
import './app.css';

function App() {
  const [formData, setFormData] = useState({
    lastname: '',
    firstname: '',
    username: '',
    password: '',
    email: '',
    description: '',
    sport: 'Badminton',
    gender: '',
    languages: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        languages: checked
          ? [...prevData.languages, value]
          : prevData.languages.filter((lang) => lang !== value)
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>My Form</h1>
        <form>
          {['lastname', 'firstname', 'username', 'password', 'email'].map((field) => (
            <div className="form-group" key={field}>
              <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
              <input
                type={field === 'password' ? 'password' : 'text'}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
  
          <div className="form-group">
            <label htmlFor="description">Describe yourself:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Your answer here..."
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="sport">Favorite Sport:</label>
            <select id="sport" name="sport" value={formData.sport} onChange={handleChange}>
              {['Badminton', 'Basketball', 'Football', 'Tennis', 'Swimming'].map((sport) => (
                <option key={sport} value={sport}>{sport}</option>
              ))}
            </select>
          </div>
  
          <div className="form-group">
            <label>Gender:</label>
            <div className="radio-group">
              {['Male', 'Female'].map((gender) => (
                <label key={gender}>
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={handleChange}
                  />
                  {gender}
                </label>
              ))}
            </div>
          </div>
  
          <div className="form-group">
            <label>Languages:</label>
            <div className="checkbox-group">
              {['English', 'Tagalog', 'Bisaya'].map((lang) => (
                <label key={lang}>
                  <input
                    type="checkbox"
                    name="languages"
                    value={lang}
                    checked={formData.languages.includes(lang)}
                    onChange={handleChange}
                  />
                  {lang}
                </label>
              ))}
            </div>
          </div>
  
          {/* Submit button */}
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
  
}

export default App;
