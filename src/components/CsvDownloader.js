import { CSVDownloader } from 'react-papaparse'



export default function CsvDownloader({ data }) {
  return (
    <div>
      <CSVDownloader
        data={data}
        type="button"
        filename={'filename'}
        bom={true}
      >
        Download
      </CSVDownloader>
    </div>
  )
}
