export const jobs = [
  {
    name: "BrandBook",
    slogan: "Crie marcas memoráveis e aplique-as nos seus materiais de marketing!",
    desc: `
    <h1>O que será entregue no BrandBook?</h1>
    <ul>
      <li>Defesa e processo criativo
        <ul>
          <li>Entenda as ideias por trás dos nossos logotipos! E vamos te provar que vale a pena investir no nosso trabalho.</li>
        </ul>
      </li>
      <li>Simbologia
        <ul>
          <li>A principal função da simbogia é a lembrança de marca. Com a nossa expertise em logos, vamos desenvolver excelentes símbolos com técnicas de desenho, geometria e psicologia da forma.</li>
        </ul>
      </li>
      <li>Tipografia
        <ul>
          <li>Um dos membros mais importantes de uma identidade visual é a tipografia. A forma da fonte da sua marca não pode ser escolhido aleatóriamente! Uma boa tipografia deve se adequar a linguagem da sua empresa, além de deixar a estética dos seus textos com uma aparência mais bonita!</li>
        </ul>
      </li>
      <li>Cores
        <ul>
          <li>Indiscutivelmente, as cores da sua marca são essenciais para definir certos conceitos do seu logotipo. Elas podem causar emoções, opiniões e principalmente facilitar o entendimento do seu nicho!</li>
        </ul>
      </li>
      <li>Aplicações na marca em contextos reais</li>
    </ul>`,
    price: 899.00,
  },
  {
    name: "Printed Pack",
    slogan: "Crie materiais gráficos para seu escritório ou para seu ponto de venda!",
    desc: 
    `
    <h1>O que será entregue no Printed pack?</h1>
    <ul>
      <li>Impressos de pequena tiragem
        <ul>
          <li>Cartões de visita, adesivos, canetas, bonés entre outros brindes</li>
        </ul>
      </li>
      <li>Embalagens
        <ul>
          <li>Rótulos, embalagens de alimentos, envelopes e pastas</li>
        </ul>
      </li>
      <li>Editoriais
        <ul>
          <li>Catálogos, cardápios, livros e ebooks</li>
        </ul>
      </li>
      <li>Impressos de grande tiragem
        <ul>
          <li>Outdoors, banners, cartazes e adesivos para veículos</li>
        </ul>
      </li>
    </ul>`
    ,
    price: 599.00,
  },
  {
    name: "Web Pack",
    slogan: "Crie seu site institucional ou uma página de vendas!",
    desc: 
    `
    <h1>O que será entregue no Web pack?</h1>
    <ul>
      <li>Sites estáticos</li>
      <li>Ecommerces</li>
      <li>Landing pages (páginas de conversão)</li>
    </ul>
    `
    ,
    price: 699.00,
  },
  {
    name: "Media Pack",
    slogan: "Faça seu feed ter mais engajamento e converta mais clientes com criativos de conversão!",
    desc: 
    `
    <h1>O que será entregue no Media pack?</h1>
    <ul>
      <li>Planejamento de postagens orgânicas</li>
      <li>Planejamento de postagens para tráfego pago</li>
      <li>Configuração de perfil</li>
    </ul>
    `
    ,
    price: 399.00,
  },
  {
    name: "Visual Pack",
    slogan: "Crie vídeos ou animações profissionais para apresentar seu produtos!",
    desc: 
    `
    <h1>O que será entregue no Visual pack?</h1>
    <ul>
      <li>Criação de vídeos institucionais</li>
      <li>Motions animados</li>
    </ul>
    `
    ,
    price: 299.00,
  },
];

export const forms = [
  {
    name: "brandbook",
    form: `
            
  <form id="brandbook_form" action="">
    <label for="q1">Qual é o nome da sua marca?</label><input type="text">
    <label for="q2">Qual é o segmento da sua empresa?</label><input type="text">
    <label for="q3">Para quais públicos você quer se comunicar?</label><input type="text">
    <label for="q4">Se seu negócio for local, onde fica localizado?</label><input type="text">
    <label for="q5">Qual seu ticket médio?</label><input type="text">
    <label for="q6">Você tem alguma ideia inicial de como deveria ser sua marca?</label><input type="text">
    <label for="q7">Você tem alguma referência estética de algum concorrente ou empresa de outros segmentos?</label><input type="text">
    <label for="q8">Quais as suas preferências de cores?</label><input type="text">
    <label for="q9">Você tem algum estilo tipográfico em mente?</label><input type="text">
    <button type="submit">Enviar</button>
  </form>
        `,
  },
  {
    name: "printed_pack",
    form: `
            
  <form id="printed_pack_form" action="">
    <label for="q1">Descreva em detalhes, como você gostaria que o material gráfico fosse feito. Se quiser, fale sobre
        referências que tem em mente.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  },
  {
    name: "web_pack",
    form: `
            
  <form id="web_pack_form" action="">
    <label for="q1">Descreva em detalhes, como você gostaria que o site ou landing page fosse feito. Se quiser, fale sobre
        referências que tem em mente.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  },
  {
    name: "media_pack",
    form: `
            
  <form id="media_pack_form" action="">
    <label for="q1">Descreva em detalhes, como você gostaria que as artes fossem feitas. Se quiser, fale sobre
        referências que tem em mente.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  },
  {
    name: "visual_pack",
    form: `
            
  <form id="visual_pack_form" action="">
    <label for="q1">Descreva em detalhes, como você gostaria que o material gráfico fosse feito. Se quiser, fale sobre
        referências que tem em mente.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  },
];
