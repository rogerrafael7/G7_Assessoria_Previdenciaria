import { IJob } from '../types/job.interface'
import { JobData } from '../types/job-data.type'

export class ImportacaoDeDadosDeIntegracaoJob implements IJob<any> {
  async execute (jobData: JobData<any>): Promise<void> {
    console.log('Exec: ImportacaoDeDadosDeIntegracaoJob', jobData)
  }
}
