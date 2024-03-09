import {Component} from 'react'
import './App.css';
import ContactItem from './components/ContactItem';
import {v4 as uuidv4} from 'uuid'

const initialContactsList = [
  {
    id: uuidv4(),
    name: 'Ram',
    mobileNo: 9999988888,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Pavan',
    mobileNo: 8888866666,
    isFavorite: true,
  },
  {
    id: uuidv4(), 
    name: 'Nikhil',
    mobileNo: 9999955555,
    isFavorite: false,
  },
]

class App extends Component {
  state = {
    contactsList: initialContactsList,
    name: '',
    mobileNo: '',
  }

  onAddContact = event => {
    event.preventDefault()
    const {name, mobileNo, contactsList} = this.state
    const newContact = {
      id:uuidv4(),
      name,
      mobileNo,
      isFavorite: false,
    };

    this.setState(prevState=>({
      contactsList: [...prevState.contactsList,newContact],
      name: '',
      mobileNo: '',
    }))
  }

  onChangeMobileNo = event => {
    this.setState({mobileNo: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  isFavoriteContact = (id) => {
    this.setState(prev=>({
      contactsList: prev.contactsList.map(eachContact=>{
        if(id=== eachContact.id){
          return {...eachContact, isFavorite: !eachContact.isFavorite}
        }
        return eachContact
    })
    
  }))
  }

  onDeleteContact = (delId) =>{
    console.log("u fuck me"+delId)
    this.setState(prev=>({
      contactsList: prev.contactsList.filter(eachContact=>eachContact.id !== delId)
  }))
  }

  render() {
    const {name, mobileNo, contactsList} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Contacts</h1>
          <form className="contact-form-container" onSubmit={this.onAddContact}>
            <input
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="Name"
            />
            <input
              className="input"
              value={mobileNo}
              onChange={this.onChangeMobileNo}
              placeholder="Mobile Number"
            />
            <button type="submit" className="button">
              Add Contact
            </button>
          </form>
          <ul className="contacts-table">
            <li className="table-header">
              <p className="table-header-cell name-column">Name</p>
              <hr className="separator" />
              <p className="table-header-cell">Mobile Number</p>
            </li>
            {contactsList.map(eachContact => (
              <ContactItem key={eachContact.id} contactDetails={eachContact} isFavoriteContact={this.isFavoriteContact}
              onDeleteContact={this.onDeleteContact} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
