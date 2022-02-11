import { Link } from 'react-router-dom'
import { useAnswer } from '../../hooks/AnswerProvider'

export function Result() {
  const { list } = useAnswer()
  console.debug(list)

  return (
    <div>
      <h1>Result</h1>
      { list.map(answer => <div>
        { answer.id }
        { answer.correct ? 'true' : 'false' }
      </div>) }

      <Link to="/exam">ReTry</Link>
    </div>
  )
}

export default Result
