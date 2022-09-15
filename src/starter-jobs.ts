import * as store from './store'
import cron from 'node-cron'
import { JobData } from './types/job-data.type'
import { StarterException } from './exceptions/starter.exception'

export const starter = async (jobs:JobData<any>[] = store.jobs || []) => {
  for (const job of jobs) {
    const executor = new job.Job()
    console.log(`Construindo job: ${job.descricao}, Id: ${job.id}`)

    if (!job.schedule) {
      throw new StarterException(`Job: ${job.id}, não possui schedule`)
    }

    const task = cron.schedule(job.schedule, async () => {
      try {
        if (job.dataMaximaDeConclusao) {
          const currentDate = new Date()
          if (currentDate > job.dataMaximaDeConclusao) {
            task.stop()
            return
          }
        }
        console.log(`Executando job: ${job.id}`)
        await executor.execute(job)
      } catch (error) {
        console.error(`Job: ${job.id} falhou em sua execução`, error)
      }
    })
    console.log(`Job: "${job.id}" construído com sucesso`)
  }
}
