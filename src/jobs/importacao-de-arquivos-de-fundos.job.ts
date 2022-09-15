import { IJob } from '../types/job.interface'
import { JobData } from '../types/job-data.type'

export class ImportacaoDeArquivosDeFundosJob implements IJob<any> {
  async execute (jobData: JobData<any>): Promise<void> {
    console.log('Exec: ImportacaoDeArquivosDeFundosJob', jobData)
  }
}
