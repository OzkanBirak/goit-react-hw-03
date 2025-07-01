import styles from './SearchBox.module.css'

const SearchBox = ({ value, onFilter }) => {
  const handleChange = (evt) => {
    onFilter(evt.target.value)
  }

  return (
    <div className={styles.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        value={value}
        onChange={handleChange}
        placeholder="Enter name to search..."
      />
    </div>
  )
}

export default SearchBox