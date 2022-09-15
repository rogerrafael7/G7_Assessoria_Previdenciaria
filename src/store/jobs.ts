import dayjs from 'dayjs'
import {
  DesenvolverHistoria745Job, DesenvolverHistoria745Payload,
  GerarQrcodeJob, GerarQrcodePayload,
  ImportacaoDeArquivosDeFundosJob,
  ImportacaoDeDadosDaBaseLegadaJob,
  ImportacaoDeDadosDeIntegracaoJob,
  ImportacaoDeDadosJob,
} from '../jobs'
import { JobData } from '../types/job-data.type'

export const jobs = [
  {
    id: 1,
    Job: ImportacaoDeArquivosDeFundosJob,
    descricao: 'Importação de arquivos de fundos',
    dataMaximaDeConclusao: dayjs('2021-02-04 12:00:00', 'YYY-MM-DD HH:mm:ss').toDate(),
    schedule: '* * */8 * *', // 8 horas,
  } as JobData<any>,
  {
    id: 2,
    Job: ImportacaoDeDadosDaBaseLegadaJob,
    descricao: 'Importação de dados da Base Legada',
    dataMaximaDeConclusao: dayjs('2021-02-04 12:00:00', 'YYY-MM-DD HH:mm:ss').toDate(),
    schedule: '* * */4 * *', // 4 horas
  } as JobData<any>,
  {
    id: 3,
    Job: ImportacaoDeDadosJob,
    descricao: 'Importação de dados',
    dataMaximaDeConclusao: dayjs('2021-02-02 12:00:00', 'YYY-MM-DD HH:mm:ss').toDate(),
    schedule: '* * */6 * *', // 6 horas
  } as JobData<any>,
  {
    id: 4,
    Job: DesenvolverHistoria745Job,
    descricao: 'Desenvolver historia 745',
    dataMaximaDeConclusao: dayjs('2021-02-02 12:00:00', 'YYY-MM-DD HH:mm:ss').toDate(),
    schedule: '* * */2 * *', // 2 horas
    data: { clienteId: 1 },
  } as JobData<DesenvolverHistoria745Payload>,
  {
    id: 5,
    Job: GerarQrcodeJob,
    descricao: 'Gerar QRCode',
    dataMaximaDeConclusao: dayjs('2020-02-15 12:00:00', 'YYY-MM-DD HH:mm:ss').toDate(),
    schedule: '* * */6 * *', // 6 horas
  } as JobData<GerarQrcodePayload>,
  {
    id: 6,
    Job: ImportacaoDeDadosDeIntegracaoJob,
    descricao: 'Importação de dados de integração',
    dataMaximaDeConclusao: dayjs('2020-02-15 12:00:00', 'YYY-MM-DD HH:mm:ss').toDate(),
    schedule: '* * */8 * *', // 8 horas
  } as JobData<any>,
]
