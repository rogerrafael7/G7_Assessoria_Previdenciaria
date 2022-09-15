import { starter } from '../starter-jobs'
import {
  DesenvolverHistoria745Job,
  ImportacaoDeArquivosDeFundosJob,
  ImportacaoDeDadosDaBaseLegadaJob,
  ImportacaoDeDadosJob,
} from '../jobs'
import dayjs from 'dayjs'
import { JobData } from '../types/job-data.type'
import { StarterException } from '../exceptions/starter.exception'

describe('starter', () => {
  it('Deve CONSEGUIR executar o starter usando jobs corretamente configurados', async () => {
    await starter([
      {
        id: 1,
        Job: ImportacaoDeArquivosDeFundosJob,
        descricao: 'Importação de arquivos de fundos',
        dataMaximaDeConclusao: dayjs('2021-02-04 12:00:00', 'YYY-MM-DD HH:mm:ss').toDate(),
        schedule: '* * */8 * *', // 8 horas
        data: null,
      },
      {
        id: 2,
        Job: ImportacaoDeDadosDaBaseLegadaJob,
        descricao: 'Importação de dados da Base Legada',
        dataMaximaDeConclusao: dayjs('2021-02-04 12:00:00', 'YYY-MM-DD HH:mm:ss').toDate(),
        schedule: '* * */4 * *', // 4 horas
        data: null,
      },
    ])
  })

  it('Deve FALHAR para executar o starter usando jobs que não possui schedule', async () => {
    try {
      await starter([
        {
          id: 1,
          Job: ImportacaoDeArquivosDeFundosJob,
          descricao: 'Importação de arquivos de fundos',
          dataMaximaDeConclusao: dayjs('2021-02-04 12:00:00', 'YYY-MM-DD HH:mm:ss').toDate(),
        } as JobData<any>,
        {
          id: 2,
          Job: ImportacaoDeDadosDaBaseLegadaJob,
          descricao: 'Importação de dados da Base Legada',
          dataMaximaDeConclusao: dayjs('2021-02-04 12:00:00', 'YYY-MM-DD HH:mm:ss').toDate(),
        } as JobData<any>,
      ])
      expect(true).toBeFalsy()
    } catch (error) {
      expect(true).toBeTruthy()
      expect(error instanceof StarterException).toBeTruthy()
      expect(error.message).toBe('Job: 1, não possui schedule')
    }
  })

  it('Deve FALHAR para executar o starter usando um job que não possui schedule', async () => {
    try {
      await starter([
        {
          id: 1,
          Job: ImportacaoDeArquivosDeFundosJob,
          descricao: 'Importação de arquivos de fundos',
          dataMaximaDeConclusao: dayjs('2021-02-04 12:00:00', 'YYY-MM-DD HH:mm:ss').toDate(),
          schedule: '* * */8 * *', // 8 horas
          data: null,
        },
        {
          id: 2,
          Job: ImportacaoDeDadosDaBaseLegadaJob,
          descricao: 'Importação de dados da Base Legada',
          dataMaximaDeConclusao: dayjs('2021-02-04 12:00:00', 'YYY-MM-DD HH:mm:ss').toDate(),
          schedule: '* * */4 * *', // 4 horas
          data: null,
        },
        {
          id: 3,
          Job: ImportacaoDeDadosJob,
          descricao: 'Importação de dados',
          dataMaximaDeConclusao: dayjs('2021-02-02 12:00:00', 'YYY-MM-DD HH:mm:ss').toDate(),
          schedule: '* * */6 * *', // 6 horas
          data: null,
        },
        {
          id: 4,
          Job: DesenvolverHistoria745Job,
          descricao: 'Desenvolver historia 745',
          dataMaximaDeConclusao: dayjs('2021-02-02 12:00:00', 'YYY-MM-DD HH:mm:ss').toDate(),
        } as JobData<any>,
      ])
      expect(true).toBeFalsy()
    } catch (error) {
      expect(true).toBeTruthy()
      expect(error instanceof StarterException).toBeTruthy()
      expect(error.message).toBe('Job: 4, não possui schedule')
    }
  })
})
