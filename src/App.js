import { Fragment, useState } from 'react'
import extractNumbers from 'extract-numbers'
import CsvReader from './components/CsvReader'
import CsvDownloader from './components/CsvDownloader'



let filteredData = []

function App() {
  const [data, setData] = useState([])


  const handleDataSet = csv => setData(csv)



  console.log('Data: ', data)


  // ! Pulling required data and sorting them into columns and rows.
  data[0]?.forEach((val, i) => {
    if (val === 'ISIN' || val === 'CFICode' || val === 'Venue' || val === 'AlgoParams') {
      data.slice(1).forEach(arr => filteredData.push({
        column: val,
        rows: arr[i],
      }))
    }
  })



  // ! Pulling out the columns and rows I require for my download
  // data[0]?.forEach((val, i) => {
  //   if (val === 'ISIN' || val === 'CFICode' || val === 'Venue' || val === 'AlgoParams') {
  //     data.slice(1).forEach(arr => {
  //       const obj = {}
  //       obj[val] = arr[i]
  //       filteredData.push(obj)
  //     })
  //   }
  // })

  filteredData =  filteredData.map(val => val.column === 'AlgoParams' ? { ...val, column: 'ContractSize', rows: +extractNumbers(val.rows.split(';').filter(pm => pm.includes('PriceMultiplier'))[0])[0] } : val)

  console.log(filteredData)


  return (
    <Fragment>
      <h2>Upload CSV Below</h2>
      <CsvReader handleDataSet={handleDataSet} />

      <h4>Download CSV File</h4>
      <CsvDownloader data={filteredData} />
    </Fragment>
  )
}

export default App
