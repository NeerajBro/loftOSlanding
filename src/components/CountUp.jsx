import CountUpImport from 'react-countup'

// Vite ESM interop: default export is nested under .default
const CountUp = CountUpImport.default ?? CountUpImport

export default CountUp
