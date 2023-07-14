//Streams

// Writeable => write data sequentially
// Readable => read data sequentially
// Duplex => read & write data sequentially
// Transform => Data can be modified when writing and reading

const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// encoding
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt') // can add encoidng and control size in the following format: ('path', {highWaterMark : 90000,encoding : 'uf-8})

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))