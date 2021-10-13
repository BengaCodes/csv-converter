import { Fragment, useState } from 'react'
import CsvReader from './components/CsvReader'

function App() {
  const [data, setData] = useState([])


  const handleDataSet = csv => setData(csv)



  console.log('Data: ', data)


  return (
    <Fragment>
      <h2>Upload CSV Below</h2>
      <CsvReader handleDataSet={handleDataSet} />
    </Fragment>
  )
}

export default App
