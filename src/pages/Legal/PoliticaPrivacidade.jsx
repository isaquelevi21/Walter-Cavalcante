import { candidato } from '../../data/candidato.js'

// Item 4 (OBRIGATÓRIO): Política de Privacidade — exigida sempre que o site
// coletar dados pessoais (formulário de contato, cadastro de apoiador,
// newsletter, WhatsApp etc.)
//
// Estrutura mínima recomendada pela LGPD, a preencher com o time jurídico
// da campanha antes de publicar:
//   1. Quais dados são coletados
//   2. Finalidade da coleta
//   3. Base legal (consentimento, cumprimento de obrigação, etc.)
//   4. Tempo de armazenamento
//   5. Direitos do titular (acesso, correção, exclusão, portabilidade...)
//   6. Canal para exercer esses direitos

export default function PoliticaPrivacidade() {
  return (
    <section className="pagina-legal">
      <h1>Política de Privacidade</h1>
      <p>Última atualização: [DATA]</p>

      <h2>1. Quais dados coletamos</h2>
      <p>[TODO: descrever — ex: nome, e-mail, telefone, WhatsApp, dados de navegação/cookies]</p>

      <h2>2. Finalidade da coleta</h2>
      <p>[TODO: descrever — ex: envio de informações da campanha, contato com apoiadores]</p>

      <h2>3. Base legal</h2>
      <p>[TODO: ex: consentimento do titular, nos termos do art. 7º, I, da LGPD]</p>

      <h2>4. Tempo de armazenamento</h2>
      <p>[TODO: definir prazo, ex: até o fim do processo eleitoral + prazo legal de guarda]</p>

      <h2>5. Direitos do titular</h2>
      <p>[TODO: acesso, correção, exclusão, portabilidade e revogação do consentimento]</p>

      <h2>6. Como exercer seus direitos</h2>
      <p>
        Entre em contato pelo e-mail{' '}
        <a href={`mailto:${candidato.emailOficial}`}>{candidato.emailOficial}</a>.
      </p>
    </section>
  )
}
