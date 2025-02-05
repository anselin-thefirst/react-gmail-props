// import PropTypes from "prop-types";
import Email from './Email';

function Emails(props) {
    const {filteredEmails, toggleRead, toggleStar} = props;

    return (
        <main className="emails">
            <ul>
          {filteredEmails.map((email, index) => (
            <Email key={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar} />
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