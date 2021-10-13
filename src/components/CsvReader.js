/* eslint-disable no-unused-vars */
import { CSVReader } from 'react-papaparse'

export default function CsvReader({ handleDataSet }) {


  const handleOnDrop = (data) => {
    handleDataSet(data.slice(1, data.length - 1).map(item => item.data))
  }

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }

  const handleOnRemoveFile = (data) => {
    console.log('---------------------------')
    console.log(data)
    console.log('---------------------------')
  }

  return (
    <div>
      <CSVReader
        onDrop={handleOnDrop}
        onError={handleOnError}
        addRemoveButton
        removeButtonColor='#659cef'
        onRemoveFile={handleOnRemoveFile}
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader>
    </div>
  )
}
