import { GerarQrcodeJob } from '../jobs'
import { JobData } from '../types/job-data.type'
import { JobException } from '../exceptions/job.exception'

describe('desenvolver-historia-745.job', () => {
  it('Deve executar o job DesenvolverHistoria745Job', async () => {
    const job = new GerarQrcodeJob()
    await job.execute({
      id: 4,
      Job: GerarQrcodeJob,
      descricao: '...',
      dataMaximaDeConclusao: new Date(),
      schedule: '* * */2 * *',
      data: {
        idPdf: 1,
      },
    })
    expect(true).toBeTruthy()
  })
  it('Deve falhar se não passar data', async () => {
    const job = new GerarQrcodeJob()
    try {
      await job.execute({} as JobData<any>)
      expect(true).toBeFalsy()
    } catch (error) {
      expect(true).toBeTruthy()
      expect(error instanceof JobException).toBeTruthy()
      expect(error.message).toBe('idPdf não informado')
    }
  })
})
