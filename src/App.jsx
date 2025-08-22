import { useState, useEffect } from 'react'
import './App.css'
import PostList from './components/PostList'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
      .catch(error => {
        setError(error.message)
        setLoading(false)
      })
  }, [])

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="app-container">
      <h1>Zohort - Search </h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search posts by title..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {loading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <PostList posts={posts} searchTerm={searchTerm} />
      )}
    </div>
  )
}

export default App
