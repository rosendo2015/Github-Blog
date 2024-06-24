import { Route, Routes } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { DefaultLayout } from './layouts/DefaultLayouts'
import { DetailsPost } from './pages/DetailsPost'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/detailsPost/:id" element={<DetailsPost />} />
      </Route>
    </Routes>
  )
}
