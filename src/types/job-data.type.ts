import { IJob } from './job.interface'

export interface JobData<Data> {
  id: number,
  Job: new() => IJob<Data>,
  descricao: string,
  schedule: string, // irá executar de tempos em tempos
  dataMaximaDeConclusao?: Date,
  data: Data
}
