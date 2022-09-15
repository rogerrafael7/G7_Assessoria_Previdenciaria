import { JobData } from './job-data.type'

export interface IJob<Data> {
  execute: (jobMetaData: JobData<Data>) => Promise<void>
}
