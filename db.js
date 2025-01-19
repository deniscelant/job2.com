export const jobs = [
  {
    id: "brand",
    name: "BrandBook",
    slogan: "Crie marcas memoráveis e aplique-as nos seus materiais de marketing!",
    icon: "fa-solid fa-book",
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
    id: "print",
    name: "Printed Pack",
    icon: "fa-solid fa-map",
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
    id: "web",
    name: "Web Pack",
    icon: "fa-solid fa-desktop",
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
    id: "media",
    name: "Media Pack",
    icon: "fa-solid fa-paper-plane",
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
    id: "visual",
    icon: "fa-solid fa-video",
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
    name: "BrandBook",
    form: `
            
  <form id="printed_pack_form" action="">
    <label for="q1">Descreva em detalhes, como você gostaria que o seu brandbook fosse feito. Se quiser, fale sobre
        referências que tem em mente.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  },
  {
    name: "Printed Pack",
    form: `
            
  <form id="printed_pack_form" action="">
    <label for="q1">Descreva em detalhes, como você gostaria que o material gráfico fosse feito. Se quiser, fale sobre
        referências que tem em mente.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  },
  {
    name: "Web Pack",
    form: `
            
  <form id="web_pack_form" action="">
    <label for="q1">Descreva em detalhes, como você gostaria que o site ou landing page fosse feito. Se quiser, fale sobre
        referências que tem em mente.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  },
  {
    name: "Media Pack",
    form: `
            
  <form id="media_pack_form" action="">
    <label for="q1">Descreva em detalhes, como você gostaria que as artes fossem feitas. Se quiser, fale sobre
        referências que tem em mente.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  },
  {
    name: "Visual Pack",
    form: `
            
  <form id="visual_pack_form" action="">
    <label for="q1">Descreva em detalhes, como você gostaria que o material gráfico fosse feito. Se quiser, fale sobre
        referências que tem em mente.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  },
];

export const extra_jobs = [
  {
    name: "logo",
    form: `
            
  <form id="extra_job_logo_form" action="">
    <label for="q1">Forneça mais detalhes para esse job.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  
  },
  {
    name: "Arte para feed/story",
    form: `
            
  <form id="extra_job_arte_media_form" action="">
    <label for="q1">Forneça mais detalhes para esse job.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  
  },
  {
    name: "Vídeo ou motion",
    form: `
            
  <form id="extra_job_video_motion_form" action="">
    <label for="q1">Forneça mais detalhes para esse job.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  
  },
  {
    name: "Cartão de visita",
    form: `
            
  <form id="extra_job_cartao_visita_form" action="">
    <label for="q1">Forneça mais detalhes para esse job.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  
  },
  {
    name: "Panfleto",
    form: `
            
  <form id="extra_job_panfleto_form" action="">
    <label for="q1">Forneça mais detalhes para esse job.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  
  },
  {
    name: "Folder sanfonado",
    form: `
            
  <form id="extra_job_folder_form" action="">
    <label for="q1">Forneça mais detalhes para esse job.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  
  },
  {
    name: "Papel timbrado",
    form: `
            
  <form id="extra_job_timbrado_form" action="">
    <label for="q1">Forneça mais detalhes para esse job.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  
  },
  {
    name: "Pasta para documentos",
    form: `
            
  <form id="extra_job_pasta_form" action="">
    <label for="q1">Forneça mais detalhes para esse job.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  
  },
  {
    name: "Envelope",
    form: `
            
  <form id="extra_job_envelope_form" action="">
    <label for="q1">Forneça mais detalhes para esse job.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  
  },
  {
    name: "Rótulo",
    form: `
            
  <form id="extra_job_rotulo_form" action="">
    <label for="q1">Forneça mais detalhes para esse job.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  
  },
  {
    name: "Caderno/Agenda",
    form: `
            
  <form id="extra_job_caderno_agenda_form" action="">
    <label for="q1">Forneça mais detalhes para esse job.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  
  },
  {
    name: "Embalagens",
    form: `
            
  <form id="extra_job_embalagens_form" action="">
    <label for="q1">Forneça mais detalhes para esse job.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  
  },
  {
    name: "Banner digital",
    form: `
            
  <form id="extra_job_banner_digital_form" action="">
    <label for="q1">Forneça mais detalhes para esse job.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  
  },
  {
    name: "eBook",
    form: `
            
  <form id="extra_job_ebook_form" action="">
    <label for="q1">Forneça mais detalhes para esse job.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  
  },
  {
    name: "Catálogo/Cardápio",
    form: `
            
  <form id="extra_job_catalog_cardapio_form" action="">
    <label for="q1">Forneça mais detalhes para esse job.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  
  },
  {
    name: "Adesivo",
    form: `
            
  <form id="extra_job_adesivo_form" action="">
    <label for="q1">Forneça mais detalhes para esse job.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  
  },
  {
    name: "Oudoor",
    form: `
            
  <form id="extra_job_outdoor_form" action="">
    <label for="q1">Forneça mais detalhes para esse job.</label><textarea></textarea>
    <button type="submit">Enviar</button>
  </form>
        `,
  
  },
]

export const portfolio = [
  "portfolio/BC-Apresentação-SaqueRápido-AC030724-12.png",
  "portfolio/brand7&Co_apresentação_redesign_celantdg-12.png",
  "portfolio/Camisa-Polo-Masculino-01.png",
  "portfolio/capa-alfagaming copiar 2.png",
  "portfolio/DND-RedesSociais-Maio-Card-01-AC250424.png",
  "portfolio/DND-RedesSociais-Maio-Card-03-AC250424.png",
  "portfolio/job Zanom_14.png",
  "portfolio/job Zanom_16.png",
  "portfolio/Manual de marca Moldar pré-moldados_Mockup 01.png",
]