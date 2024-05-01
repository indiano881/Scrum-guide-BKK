import styles from './Form.module.css'

const Form = () => {
    return (
        <form>
          <label for="name">Name</label>
          <input id='name' type="text" placeholder='Insert your name...'/>
          <label for="name">Phone</label>
          <input id='name' type="text" placeholder='Insert your phone...'/>
        </form>
    )
};

export default Form
