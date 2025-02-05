// import PropTypes from "prop-types";
import Email from './Email';

function Emails(props) {
    const {filteredEmails, toggleRead, toggleStar, showEmail} = props;

    return (
        <main className="emails">
            <ul>
          {filteredEmails.map((email, index) => (
            <li key={index} onClick={() => showEmail(email)}>
                <Email email={email} toggleRead={toggleRead} toggleStar={toggleStar} />
            </li>
          ))}
        </ul>
        </main>
    )
}

export default Emails

/* Emails.propTypes = {
    emails: PropTypes. ,
    toggleRead: Proptypes. ,
    toggleStar: PropTypes. 
}*/