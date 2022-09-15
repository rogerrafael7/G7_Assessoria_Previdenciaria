import { IJob } from '../types/job.interface'
import { JobData } from '../types/job-data.type'
import { JobException } from '../exceptions/job.exception'

export interface DesenvolverHistoria745Payload {
  clienteId: number
}

export class DesenvolverHistoria745Job implements IJob<DesenvolverHistoria745Payload> {
  async execute (jobData: JobData<DesenvolverHistoria745Payload>): Promise<void> {
    if (!jobData?.data?.clienteId) {
      throw new JobException('ClienteId não informado')
    }
    console.log('Exec: DesenvolverHistoria745Job', jobData)
  }
}
