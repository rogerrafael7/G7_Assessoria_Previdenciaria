import { IJob } from '../types/job.interface'
import { JobData } from '../types/job-data.type'
import { JobException } from '../exceptions/job.exception'

export interface GerarQrcodePayload {
  idPdf: number
}

export class GerarQrcodeJob implements IJob<GerarQrcodePayload> {
  async execute (jobData: JobData<GerarQrcodePayload>): Promise<void> {
    if (!jobData?.data?.idPdf) {
      throw new JobException('idPdf não informado')
    }
    console.log('Exec: GerarQrcodeJob', jobData)
  }
}
