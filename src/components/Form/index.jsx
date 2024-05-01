import styles from './Form.module.css'

const Form = () => {
    return (
        <form action="mailto: scrum-bkk@gmail.com" method="POST" enctype="text/plain">
          <label for="name" minlength="3" required>Name</label>
          <input id='name' type="text" placeholder='Insert your name...'/>
          <label for="name" minlength="6">Phone</label>
          <input id='name' type="text" placeholder='Insert your phone...'/>
          <label for="message"></label>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Please write your message here..." required></textarea>
          <button>Send message</button>
        </form>
    )
};

export default Form
