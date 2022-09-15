import { IJob } from '../types/job.interface'
import { JobData } from '../types/job-data.type'

export class ImportacaoDeDadosDaBaseLegadaJob implements IJob<any> {
  async execute (jobData: JobData<any>): Promise<void> {
    console.log('Exec: ImportacaoDeDadosDaBaseLegadaJob', jobData)
  }
}
