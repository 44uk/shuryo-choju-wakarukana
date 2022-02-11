import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    PictureContainer
} from '../../containers'

import { useAnswer } from '../../hooks/AnswerProvider'

import DATA from '../../resources/data'

export function Exam() {
  const [ reveal, setReveal ] = useState(false)
  const [ index, setIndex ] = useState(0)
  const navigate = useNavigate()
  const { add, clear, list } = useAnswer()

  const data = DATA[index]

  function nextOrFinish() {
    if(index >= DATA.length - 1) {
      navigate('/result')
      return
    }
    setIndex(prev => prev + 1)
  }

  function correct() {
    add({ id: data.id, correct: true })
    nextOrFinish()
  }

  function incorrect() {
    add({ id: data.id, correct: false })
    nextOrFinish()
  }

  const pic = useMemo(() => { return (
    <PictureContainer
      timeout={3}
      reveal={false}
      src={data.src}
      name={data.name}
      huntable={data.huntable}
      onChangeReveal={v => setReveal(v)}
    />
  )}, [data.src])

  useEffect(() => {
    clear()
  }, [])

  return (
    <div>
      <h1>Exam { index + 1 }</h1>
      { pic }
      { reveal && <>
        <button onClick={correct}>せいかい？</button>
        <button onClick={incorrect}>まちがい？</button>
      </>}
    </div>
  )
}

export default Exam
