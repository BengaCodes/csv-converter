import { Fragment, useState } from 'react'
import extractNumbers from 'extract-numbers'
import CsvReader from './components/CsvReader'



let filteredColumns = []

function App() {
  const [data, setData] = useState([])


  const handleDataSet = csv => setData(csv)



  console.log('Data: ', data)


  // ! Pulling out the columns and rows I require for my download
  data[0]?.forEach((val, i) => {
    if (val === 'ISIN' || val === 'CFICode' || val === 'Venue' || val === 'AlgoParams') {
      data.slice(1).forEach(arr => {
        const obj = {}
        obj[val] = arr[i]
        filteredColumns.push(obj)
      })
    }
  })

  filteredColumns =  filteredColumns.map(val => val.column === 'AlgoParams' ? { ...val, column: 'ContractSize', rows: +extractNumbers(val.rows.split(';').filter(pm => pm.includes('PriceMultiplier'))[0])[0] } : val)

  console.log(filteredColumns)


  return (
    <Fragment>
      <h2>Upload CSV Below</h2>
      <CsvReader handleDataSet={handleDataSet} />
    </Fragment>
  )
}

export default App
