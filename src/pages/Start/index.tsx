import { Link } from 'react-router-dom'

export function Start() {
  return (
    <div>
      <h1>Start</h1>
      <Link to="exam">制限時間なし</Link>
      <Link to="exam">制限時間あり</Link>
    </div>
  )
}

export default Start
