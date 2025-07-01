import styles from './Contact.module.css'

const Contact = ({ data: { id, name, number }, onDeleteContact }) => {
  return (
    <div className={styles.contact}>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.number}>{number}</p>
      </div>
      <button
        className={styles.deleteBtn}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  )
}

export default Contact