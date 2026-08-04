// Fonte única de verdade para os dados exigidos pelo TSE.
// Preencha aqui — todos os componentes (Header, Footer, páginas legais)
// consomem estes dados, então um único lugar para atualizar.

export const candidato = {
  // 1. Identificação do candidato
  nomeCompleto: 'NOME COMPLETO DO CANDIDATO',
  nomeUrna: 'NOME DE URNA',
  numero: '00000', // preencher após o registro da candidatura
  partido: 'SIGLA DO PARTIDO',
  partidoNomeCompleto: 'Nome completo do partido',
  cargo: 'Cargo disputado (ex: Deputado Estadual, Prefeito...)',
  uf: 'UF',
  municipio: 'Município (se aplicável)',

  // 2. Endereço eletrônico informado à Justiça Eleitoral
  siteOficial: 'https://www.dominio-da-campanha.com.br',

  // 3. CNPJ da campanha
  cnpjCampanha: '00.000.000/0000-00', // gerado automaticamente após o registro

  // 6. Canal de contato
  emailOficial: 'contato@dominio-da-campanha.com.br',
  whatsappOficial: '', // opcional — formato +55 (00) 00000-0000

  // Ano de referência da eleição
  anoEleicao: 2026,
}
