import DATA from '../resources/data'

interface Query {
  cat?: string
  huntable?: boolean
}

export function useDataList(query?: Query) {
  let data = DATA
  if(query?.huntable) {
    data = data.filter(d => d.huntable === query.huntable)
  }
  if(query?.cat) {
    data = data.filter(d => d.cat === query.cat)
  }
  return {
    data,
    length: data.length,
  }
}

