import Email from './Email'

function Emails({emails, toggleRead, toggleStar}) {
    
    return (
        <ul>
          {emails.map((email, index) => (
            <Email key={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar} />
          ))}
        </ul>
    )
}

export default Emails