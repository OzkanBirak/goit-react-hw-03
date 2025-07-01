import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import styles from './ContactForm.module.css'

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Minimum 3 characters required')
    .max(50, 'Maximum 50 characters allowed')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Minimum 3 characters required')
    .max(50, 'Maximum 50 characters allowed')
    .required('Number is required'),
})

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values)
    actions.resetForm()
  }

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>

        <div className={styles.field}>
          <label htmlFor="number">Number</label>
          <Field type="text" name="number" id="number" />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </div>

        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  )
}

export default ContactForm