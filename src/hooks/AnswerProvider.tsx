import { useContext, useState, createContext, ReactNode } from 'react'

interface Answer {
  id: number
  correct: boolean
}

const AnswerContext = createContext<{
  list: Answer[],
  add: (a: Answer) => void,
  clear: () => void,
}>({
  list: [],
  add: (a) => {},
  clear: () => {},
})

interface Props {
  children?: ReactNode
}

export function AnswerProvider({ children }: Props) {
  const [ answers, setAnswers ] = useState<Answer[]>([])

  function add(answer: Answer) {
    setAnswers(prev => prev.concat(answer))
  }

  function clear() {
    setAnswers([])
  }

  const value = {
    list: answers,
    add,
    clear
  }

  return (
    <AnswerContext.Provider value={value}>
      { children }
    </AnswerContext.Provider>
  )
}

export function useAnswer() {
  const answerContext = useContext(AnswerContext)
  if(answerContext === null) throw new Error("Need to wrap by RepositoryProvider")
  return answerContext
}
