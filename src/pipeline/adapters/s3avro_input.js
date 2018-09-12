import promisify from 'util.promisify'
import avro from 'avro-js'
import AWS from 'aws-sdk'

export const S3 = new AWS.S3()

export default class S3AvroInput {
  constructor(opts) {
    this.params = {
      Bucket: opts.bucket,
      Key: opts.key,
    }
  }

  async read(pipelineData) {
    await this.loadFile()

    let decoder = new avro.streams.BlockDecoder()

    let records = this.avroFileStream.pipe(decoder)
      .on('data', function (record) {
        console.log(record)
      })

    return pipelineData
  }

  async loadFile() {
    let avroFile = await S3.getObject(this.params).promise()
    this.avroFileStream = await avroFile.createReadStream()
  }
}

