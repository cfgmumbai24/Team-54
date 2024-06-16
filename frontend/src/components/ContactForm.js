import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulating network request delay
    setTimeout(() => {
      setSuccess('Your suggestion has been submitted successfully!');
      setError(null);
      setName('');
      setEmail('');
      setSuggestion('');
    }, 1000); // 1 second delay to simulate network request

    // If you want to simulate an error, you can uncomment the following lines:
    // setTimeout(() => {
    //   setError('Something went wrong. Please try again later.');
    //   setSuccess(null);
    // }, 1000); // 1 second delay to simulate network request
  };

  return (
    <div className="container mt-5">
      <form className="contact-form mx-auto" onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
        <div className="form-group mb-3">
          <label htmlFor="name" className="form-label">Your Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">Your Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="suggestion" className="form-label">Your Suggestion:</label>
          <textarea
            id="suggestion"
            className="form-control"
            onChange={(e) => setSuggestion(e.target.value)}
            value={suggestion}
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit</button>

        {error && <div className="alert alert-danger mt-3">{error}</div>}
        {success && <div className="alert alert-success mt-3">{success}</div>}
      </form>
    </div>
  );
};

export default ContactForm;