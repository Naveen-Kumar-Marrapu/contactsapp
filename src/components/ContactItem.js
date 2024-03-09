import './index.css'
const ContactItem = props => {
  const {contactDetails, isFavoriteContact,onDeleteContact}= props
  const {id, name, mobileNo, isFavorite} = contactDetails

  let starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

  const onClickStar = () => {
    isFavoriteContact(id)
  }
  const onClickDelete=()=>{
    console.log(id)
    onDeleteContact(id)
  }
  const deleteUrl="https://res.cloudinary.com/djw5hlnnw/image/upload/v1709970451/delete_gdkuqh.svg"

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{mobileNo}</p>
        <button type="button" className="favorite-icon-container">
          <img
            src={starImgUrl}
            className="favorite-icon"
            alt="star"
            onClick={()=>onClickStar()}
          />
        </button>
        <button  type="button" className="favorite-icon-container"
        onClick={()=>onClickDelete()}
        >
        <img
            src={deleteUrl}
            className="favorite-icon"
            alt="delete"
            
          />
        </button>
      </div>
    </li>
  )
}

export default ContactItem
