import { Routes, Route } from 'react-router-dom'
import { AnswerProvider } from './hooks/AnswerProvider'

import {
  About,
  Exam,
  Layout,
  Result,
  Start,
} from './pages'

function App() {
  return (
  <AnswerProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Start />} />
        <Route path="about" element={<About />} />
        <Route path="exam" element={<Exam />} />
        <Route path="result" element={<Result />} />
        <Route path="*" element={<About />} />
      </Route>
    </Routes>
  </AnswerProvider>
  )
}

export default App
