import PouchDB from 'pouchdb'

export const FETCH_LIST = 'data/status/FETCH_LIST'

let db = new PouchDB('http://localhost:5984/micro-status')

const DATA = [
  { _id: '1', text: 'Lorum Ipsum', time: '2017-03-21T13:37:03' },
  { _id: '2', text: 'doro sit atem', time: '2017-03-21T12:11:05' }
]

export const fetchList = () => {
  return {
    type: FETCH_LIST,
    payload: db.allDocs({include_docs: true})
      .then(( result ) => result.rows.map((row) => row.doc))
  }
}
