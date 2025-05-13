document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");
  const scrollBtn = document.getElementById("scrollBtn");
  const dataAtualizacaoEl = document.getElementById("data-atualizacao");
  const regrasContainer = document.getElementById("regras-lista");

  // Exibir Modal
  setTimeout(() => {
    modal.classList.add("active");
  }, 500);

  // Fechar Modal ao clicar no X
  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // Fechar Modal ao clicar fora do conteúdo
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  // Exibir botão de subir
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("active");
    } else {
      scrollBtn.classList.remove("active");
    }
  });

  // Subir ao topo
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Data e Hora da última atualização
  const dataAtualizacao = new Date(document.lastModified);
  const dataFormatada = dataAtualizacao.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  dataAtualizacaoEl.textContent = `Última atualização: ${dataFormatada}`;

  /**
   *  Estrutura das Regras:
   *  - Para adicionar novas categorias ou regras, basta seguir o padrão abaixo.
   *  - Você pode usar HTML básico (<b>, <i>, <u>, etc.) nas regras para dar destaque.
   */

  const regras = {
    "Comportamento entre ADMs": [
      "É fundamental que os ADMs se comportem de maneira respeitosa e profissional entre si. Desentendimentos devem ser resolvidos no <b>privado</b> ou em um grupo reservado para ADMs, nunca no grupo principal.",
      "Respeitem sempre a hierarquia e evitem qualquer tipo de conflito dentro do grupo principal, mantendo a imagem do grupo intacta.",
      "Nunca exponham discussões ou desentendimentos em público, especialmente no grupo dos membros. Mantenham as questões internas entre ADMs de forma privada.",
      "Se houver qualquer desentendimento ou discordância significativa, consultem o <b>dono</b> antes de tomar decisões, para garantir que todos estejam alinhados e evitando mal-entendidos.",
    ],
    "Autonomia e Permissões": [
      "É essencial que os ADMs solicitem autorização do <b>dono</b> antes de promover, rebaixar ou remover membros. Não façam alterações no grupo sem a devida permissão.",
      "Mudanças no nome, capa, descrição ou qualquer alteração significativa no grupo só podem ser feitas com a autorização do dono. Lembrem-se de que qualquer decisão importante deve ser tomada com o consentimento de todos os envolvidos.",
      "Antes de tomar decisões importantes, como mudanças na estrutura do grupo, discutam com outros ADMs e busquem um consenso para evitar ações precipitadas ou equivocadas.",
    ],
    "Conflitos com Membros": [
      "Quando lidarem com membros, ajam sempre de forma imparcial e justa, sem deixar que amizades ou preferências pessoais influenciem suas decisões.",
      "Não deixem que qualquer tipo de vínculo de amizade ou proximidade afete a forma como lidam com situações de punição. Mantenham sempre a justiça e o equilíbrio.",
      "Usem o bom senso ao aplicar as regras. Em situações de dúvida, sempre revisem as regras do grupo e tomem decisões baseadas em fatos e não em suposições.",
    ],
    "Gestão do Grupo": [
      "Mensagens importantes e que precisem de atenção de todos os membros devem ser fixadas. Isso garante que todos possam vê-las facilmente, sem perder informações cruciais.",
      "Acompanhem constantemente as mensagens enviadas pelos membros, principalmente para garantir que a ordem seja mantida e que todos se comportem de acordo com as regras.",
      "Evitem piadas internas ou comportamentos que possam gerar atritos dentro do grupo. Mantenham o ambiente do grupo sempre saudável e acolhedor para todos os membros.",
    ],
    "Sistema de Consequências": [
      "O sistema de consequências foi implementado para garantir que todos no grupo sigam as regras. Como ADMs, vocês devem aplicar essas consequências de maneira justa e imparcial.",
      "Se houver brigas ou discussões sérias entre os membros, sejam imparciais ao avaliar a situação, ouvindo ambos os lados e aplicando as punições necessárias de acordo com a gravidade.",
      "Lembrem-se: nem toda confusão ou comentário de desentendimento precisa ser punido. Mantenham a calma e usem o bom senso ao decidir quando e como aplicar as consequências.",
    ],
    "Uso do Bot": [
      "O bot do grupo deve ser usado com responsabilidade. Os comandos a seguir são para facilitar a administração e a organização do grupo, mas seu uso deve ser sempre controlado e em conformidade com as regras do grupo.",
      "Comando para banir: <b>!ban</b> seguido do @membro ou marcando a mensagem a ser banida.",
      "Comando para citar: <b>!cita</b> seguido da mensagem que deve ser citada.",
      "Comando para marcar todos os membros: <b>!marcar</b> e para marcar com o link do WhatsApp: <b>!marcarwa</b>.",
      "Comando para restringir o uso do bot apenas para ADMs: <b>!so_adm 1</b> (1 para ativar, 0 para desativar).",
      "Comando <b>!listanegra</b> seguido do @membro ou +55(ddd)numero, para adicionar um membro na lista negra.",
      "Comando <b>!menuadm</b> para exibir mais informações sobre os comandos.",
      "Se não souberem o que um comando faz, usem <b>!infocmd nome_do_comando</b> para obter mais detalhes.",
    ],
    "Limitação de Marcação e Citação": [
      "Os ADMs devem limitar o uso de marcação (<b>@</b>) a no máximo 6 vezes ao dia, sendo no máximo 2 marcações por turno: manhã, tarde e noite.",
      "A marcação deve ser feita apenas em situações importantes, como anúncios de regras ou avisos urgentes. Marcar em excesso pode irritar os membros e criar um ambiente de desconforto.",
      "A citação de mensagens deve ser feita somente em mensagens realmente importantes, que precisam ser lidas por todos os membros do grupo. Evitem citar mensagens que não têm relevância significativa.",
      "Se o grupo estiver muito parado ou sem interação, os ADMs podem realizar marcações adicionais para incentivar a participação dos membros, mas sempre com moderação.",
    ],
    "Divulgação do Grupo": [
      "Os ADMs devem colaborar ativamente na divulgação do grupo. Um dos meios mais eficazes de fazer isso é divulgar o link do grupo no status do WhatsApp.",
      "Além disso, os ADMs podem citar mensagens relevantes de vez em quando, pedindo que os membros compartilhem o link do grupo com seus amigos ou convidem novos membros.",
      "Incentivem os membros a adicionar amigos ao grupo e a se engajar nas discussões, criando uma comunidade mais ativa e engajada. Isso pode ser feito de maneira amigável e com foco no benefício de todos no grupo.",
    ],
  };

  // Renderizar as Regras
  function renderRegras() {
    regrasContainer.innerHTML = "";

    Object.keys(regras).forEach((categoria) => {
      const categoriaDiv = document.createElement("div");
      categoriaDiv.classList.add("categoria");

      const categoriaTitulo = document.createElement("h3");
      categoriaTitulo.textContent = categoria;
      categoriaDiv.appendChild(categoriaTitulo);

      const lista = document.createElement("ul");

      regras[categoria].forEach((regra) => {
        const li = document.createElement("li");
        li.innerHTML = regra; // Mantém o HTML para formatação (ex: <b>)
        lista.appendChild(li);
      });

      categoriaDiv.appendChild(lista);
      regrasContainer.appendChild(categoriaDiv);
    });
  }

  renderRegras();
});
