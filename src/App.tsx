import { Routes, Route } from 'react-router'
import {Layout} from './components/Layout'
import {HomePage} from './pages/HomePage'
import {PostsPage} from './pages/PostsPage'
import { PostPage } from './pages/PostPage'
import {ContactPage} from './pages/ContactPage'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}