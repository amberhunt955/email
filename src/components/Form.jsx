function Form() {
  return (
    <form>
        <label>Your Name: <input type="text" name="user_name" autocomplete="off" required /></label>

        <label>Your Email: <input type="email" name="user_email" autocomplete="off" required /></label>

        <label>Message: <textarea name="message" rows="12" cols="50" autocomplete="off" required /></label>
        
        <button>Send</button>
    </form>
  );
}

export default Form;
