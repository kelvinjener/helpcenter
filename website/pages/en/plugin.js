const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');


//BLiP Icon for SVGs
const defs = '/img/defs.svg';
class BlipIcon extends React.Component {
    render() {
        const className = 'blip-icon' + (this.props.className ? (' ' + this.props.className) : '')
        return (<svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className={className}
            width="1em" height="1em"
        >
            <use xlinkHref={`${defs}#${this.props.name}`} />
        </svg>
        );
    }
}


class Detail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>

                {/* Topo */}
                <div>
                    <div className="pages-top-details">
                        <div className="main-details">
                            <div className="categories-details"></div>
                            <p className="title-details"> </p>
                            <a id="linkProfile"><p className="creator-template"></p></a>
                            <p className="subtitle-details"> </p>
                            <div className="buttons-details">
                                <button id="download" className="button-details-download">
                                    <div className="button-content-download">
                                        <BlipIcon name="download" className="icon-button-download"></BlipIcon>
                                        <p className="text-button-download">Download</p>
                                    </div>
                                </button>

                                <button id="test" className="button-details-see">
                                    <div className="button-content-see">
                                        <BlipIcon name="open-eye" className="icon-button-see"></BlipIcon>
                                        <p className="text-button-see">Visualizar</p>
                                    </div>
                                </button>

                            </div>

                        </div>

                        <div className="slideshow-container">
                            <div className="carousel">

                            </div>

                            <div className="dots">

                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal bot */}
                <div id="modalBot" className="modalBot">
                    <div className="modal-content-bot">
                        <span className="closeBot">&times;</span>
                        <div className="iframe-bot" id="iframe"></div>
                    </div>
                </div>

                {/* Modal donwload */}
                <div id="modalDownload" className="modal-beta">
                    <div className="modal-template-content">
                        <div className="modal-template-header">
                            <p className="modal-template-title">Publique esse template diretamente em seu bot</p>
                            <span className="closeDownload" id="closeDownload">&times;</span>
                        </div>
                        <div className="modal-beta-body">
                            <div className="modal-template-text"> <p>Para instalar informe a API-Key do seu bot</p>
                                <div className="tooltip">
                                    <BlipIcon className="template-tooltip" name="blip-attention"></BlipIcon>
                                    <div className="right">
                                        <p>API-KEY é necessária para realizar qualquer requisição na API do BLiP.
                                            Para saber como encontrar seu API-KEY, <a target="_blank" href="https://help.blip.ai/docs/en/api-sdks/como-encontrar-a-api-key-do-meu-bot/">
                                                clique aqui</a></p>
                                        <i></i>
                                    </div>
                                </div>
                            </div>
                            <input type="text"
                                id="botKey"
                                name="botKey"
                                className="input-template-page"
                                placeholder="Cole a sua API-Key">
                            </input>
                            <button id="BPublish" disabled={true} className="button-template-page">Instalar!</button>
                            <p className="modal-template-subtext">Ao clicar em <b>instalar</b>, o fluxo atual do seu bot será substituído.</p>
                            <p className="modal-template-subtext">Alguns templates requerem arquivos extras, confira a sessão <b>Instalação</b></p>
                            <p className="modal-template-subtext">Caso prefira fazer o download, <a href="#" id="download_link" download target="_blank">clique aqui</a></p>
                        </div>
                    </div>
                </div>

                {/* Conteudo */}
                <div className="page-content-details">

                    <div className="tabs-area">
                        <div className="tab">
                            <button id="TabDetails" className="tablinks-active">Detalhes</button>
                            <button id="TabInstall" className="tablinks">Instalação</button>
                            <button id="TabSupport" className="tablinks">Suporte</button>
                        </div>


                        <div id="Details" className="tabcontent">

                        </div>

                        <div id="Install" className="tabcontent">

                        </div>

                        <div id="Support" className="tabcontent">

                        </div>
                    </div>

                    <div className="func-table">
                        <p className="content-title">Funcionalidades</p>
                        <table className="table-func">
                            <tbody>

                            </tbody>
                        </table>
                    </div>

                </div>

                <ScriptDynamically></ScriptDynamically>
                <ScriptCarousel></ScriptCarousel>
                <ScriptTabs></ScriptTabs>
                <ScriptRating></ScriptRating>
            </div>
        );
    }
}

class ScriptRating extends React.Component {
    render() {
        return (
            <script
                dangerouslySetInnerHTML={{
                    __html: `
        (function(d, t, e, m){
        
        // Async Rating-Widget initialization.
        window.RW_Async_Init = function(){
                    
            RW.init({
            huid: "455562",
            uid: "885b63212d353553845c2fd806312995",
            source: "website",
            options: {
                "boost": {
                    "rate": 4
                },
                "lng": "pt",
                "size": "medium",
                "style": "flat_yellow",
                "isDummy": false
            } 
        });
            RW.render();
        };
            // Append Rating-Widget JavaScript library.
        var rw, s = d.getElementsByTagName(e)[0], id = "rw-js",
            l = d.location, ck = "Y" + t.getFullYear() + 
            "M" + t.getMonth() + "D" + t.getDate(), p = l.protocol,
            f = ((l.search.indexOf("DBG=") > -1) ? "" : ".min"),
            a = ("https:" == p ? "secure." + m + "js/" : "js." + m);
        if (d.getElementById(id)) return;              
        rw = d.createElement(e);
        rw.id = id; rw.async = true; rw.type = "text/javascript";
        rw.src = p + "//" + a + "external" + f + ".js?ck=" + ck;
        s.parentNode.insertBefore(rw, s);
        }(document, new Date(), "script", "rating-widget.com/"));
        `
                }}
            />
        );
    }
}

class ScriptCarousel extends React.Component {
    render() {
        return (
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    var init = true;
                    var slideIndex = 1;
                    var dots = document.getElementsByClassName("dot");
                    
                    showSlides(slideIndex);

                    for (var j = 0; j < dots.length; j++){
                       dots[j].addEventListener('click',
                            function(){
                                showSlides(parseInt(this.id));
                            }, false);
                    }
       
                    function showSlides(n) {
                        var i;
                        var slides = document.getElementsByClassName("mySlides");
                        slideIndex = n;
                                            
                        for (i = 0; i < slides.length; i++) {
                            slides[i].getElementsByTagName('img')[0].className = "img-disabled";
                            
                        }
                            
                        for (i = 0; i < dots.length; i++) {
                            dots[i].className = dots[i].className.replace(" active", "");
                        }
                        if (init == true){
                            slides[slideIndex-1].getElementsByTagName('img')[0].className = "img-inactive";
                            slides[slideIndex].getElementsByTagName('img')[0].className = "img-active";
                            slides[slideIndex+1].getElementsByTagName('img')[0].className = "img-inactive";
                            dots[slideIndex].className += " active";
                            init = false;
                            
                        }
                        else if (init != true){
                            dots[slideIndex].className += " active";
                            slides[slideIndex].getElementsByTagName('img')[0].className = "img-active";
                           
                            if (slides[slideIndex-1]){
                                slides[slideIndex-1].getElementsByTagName('img')[0].className = "img-inactive";
                            }
                            if (slides[slideIndex+1]){
                                slides[slideIndex+1].getElementsByTagName('img')[0].className = "img-inactive";
                            }
                           
                        }
                    }                 

                `
                }}
            />
        );
    }
}

class ScriptTabs extends React.Component {
    render() {
        return (
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    var tabDetails = document.getElementById("TabDetails");
                    tabDetails.disabled = true;
                    document.getElementById("Details").style.display = "block";
                    var tabInstall = document.getElementById("TabInstall");
                    var tabSupport = document.getElementById("TabSupport");

                    tabDetails.onclick = function() {
                        var i, tabcontent, tablinks;
                        tabcontent = document.getElementsByClassName("tabcontent");
                        for (i = 0; i < tabcontent.length; i++) {
                            tabcontent[i].style.display = "none";
                        }

                        tablinks = document.getElementsByClassName("tablinks");
                        for (i = 0; i < tablinks.length; i++) {
                            tablinks[i].className = tablinks[i].className.replace(" active", "");
                        }

                        document.getElementById("Details").style.display = "block";
                        tabDetails.className += "-active";
                        tabDetails.disabled = true;
                        tabInstall.disabled = false;
                        tabInstall.className = "tablinks";
                        tabSupport.disabled = false;
                        tabSupport.className = "tablinks";
                    }

                    tabInstall.onclick = function() {
                        var i, tabcontent, tablinks;
                        tabcontent = document.getElementsByClassName("tabcontent");
                        for (i = 0; i < tabcontent.length; i++) {
                            tabcontent[i].style.display = "none";
                        }

                        tablinks = document.getElementsByClassName("tablinks");
                        for (i = 0; i < tablinks.length; i++) {
                            tablinks[i].className = tablinks[i].className.replace(" active", "");
                        }

                        document.getElementById("Install").style.display = "block";
                        tabInstall.className += "-active";
                        tabInstall.disabled = true;
                        tabDetails.disabled = false;
                        tabDetails.className = "tablinks";
                        tabSupport.disabled = false;
                        tabSupport.className = "tablinks";
                    }

                    tabSupport.onclick = function() {
                        var i, tabcontent, tablinks;
                        tabcontent = document.getElementsByClassName("tabcontent");
                        for (i = 0; i < tabcontent.length; i++) {
                            tabcontent[i].style.display = "none";
                        }

                        tablinks = document.getElementsByClassName("tablinks");
                        for (i = 0; i < tablinks.length; i++) {
                            tablinks[i].className = tablinks[i].className.replace(" active", "");
                        }

                        document.getElementById("Support").style.display = "block";
                        tabSupport.className += "-active";
                        tabSupport.disabled = true;
                        tabDetails.disabled = false;
                        tabDetails.className = "tablinks";
                        tabInstall.disabled = false;
                        tabInstall.className = "tablinks";
                    }

                `
                }}
            />
        );
    }
}

class ScriptDynamically extends React.Component {
    render() {
        return (
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    const urlParams = new URLSearchParams(window.location.search);
                    const myParam = urlParams.get('Id');

                    var data = {
                    "templates": [
                            {
                            "id": "broadcast",
                            "title": "Gerenciamento de Broadcast",
                            "subtitle": "Crie e gerencie listas de distribuição e contatos",
                            "categories": [
                                {
                                "category": "Broadcast"
                                },
                                {
                                "subcategory": "CRM"
                                },
                                {
                                "subcategory": "Growth"
                                }
                            ],
                            "json": "{ 
                                    "broadcast-plugin":{ 
                                    "name":"Broadcast Plugin",
                                    "url":"https://blip-broadcast-plugin.netlify.com/"
                                    }
                                }",
                            "images": [
                                {
                                "url": "/templates/concessionaria-carros/Exemplo01.png"
                                },
                                {
                                "url": "/templates/concessionaria-carros/Exemplo04.png"
                                },
                                {
                                "url": "/templates/concessionaria-carros/Exemplo02.png"
                                },
                                {
                                "url": "/templates/concessionaria-carros/Exemplo03.png"
                                },
                                
                                {
                                "url": "/templates/concessionaria-carros/Exemplo05.png"
                                },
                                
                            ],
                            "tabs": {
                                "details": '<p class="content-title">Compatível com:</p> \\
                                <div class="compatible-channels"> \\
                                    <img class="compatible-channels-img" src="/img/illustrations/whatsapp-logo.svg"></img> \\
                                    <img class="compatible-channels-img" src="/img/illustrations/workplace-logo.svg"></img> \\
                                    <img class="compatible-channels-img" src="/img/illustrations/messenger-logo.svg"></img> \\
                                    <img class="compatible-channels-img" src="/img/illustrations/telegram-logo.svg"></img> \\
                                    <img class="compatible-channels-img" src="/img/illustrations/blipchat-logo.svg"></img> \\
                                </div> \\
                                <p class="content-text">Esse chatbot foi feito para ajudar Concessionárias de Carros a divulgarem e oferecem informações sobre seus produtos, \\
                                    obter dados dos clientes e oferecer atendimento humano em um bot preparado para funcionar com a maioria dos canais, \\
                                    incluindo o WhatsApp.\\
                                \\
                                <p class="content-title">O que pode ser feito?</p> \\
                                <ul> \\
                                    <li class="content-list-text">Exibir seus produtos</li> \\
                                    <li class="content-list-text">Prover informações sobre os produtos</li> \\
                                    <li class="content-list-text">Salvar dados dos contatos</li> \\
                                    <li class="content-list-text">Atendimento humano.</li> \\
                                </ul>',  
    
    
                                "install": '<p class="content-title">Como instalar?</p>\\
                                <ul>\\
                                    <li class="content-list-text">Crie um bot e copie a API-Key dele.</li> \\
                                    <ul>\\
                                        <li class="content-list-text"><a href="https://help.blip.ai/docs/en/api-sdks/como-encontrar-a-api-key-do-meu-bot/">Clique aqui para descobrir como encontrar sua API-Key</a></li><br>\\
                                        </ul>\\
                                    <li class="content-list-text">Informe sua API-Key e clique em <b>Instalar</b></li> \\
                                    <li class="content-list-text">Caso prefira, baixe o fluxo e o importe no seu bot</li>\\
                                        <ul>\\
                                        <li class="content-list-text"><a href="https://help.blip.ai/docs/builder/importando-o-fluxo-de-um-bot-no-builder/">Clique aqui para aprender como importar um fluxo no Builder</a></li><br>\\
                                        </ul>\\
                                    <li class="content-list-text">Faça as modificações conforme sua necessidade.</li>\\
                                    <li class="content-list-text">Conecte seu canal de atendimento humano (ex.: BLiP Desk)</li>\\
                                        <ul>\\
                                            <li class="content-list-text"><a href="https://help.blip.ai/docs/helpdesk/blipdesk/como-ativar-blip-desk-canal/">Como ativar o BLiP Desk como canal de atendimento</a></li>\\
                                        </ul>',
    
                                "support": '<p class="content-title">Suporte</p> \\
                                <p class="content-text"> Este modelo de Chatbot é gratuito e tem como objetivo ajudar os usuários a compreenderem \\
                                    e aprenderem sobre algumas funcionalidades do BLiP.</p>\\
                                    \\
                                    <p class="content-text"> A equipe do BLiP e da Take não prestam suporte a este modelo.</p>\\
                                <p class="content-text"> <b> Ficou com alguma dúvida ou gostaria de dicas e sugestões de uso deste template? Deixe seu comentário abaixo. </b></p>',
                            },
                            "table": [
                                {
                                "func": "✓ Multicanal"
                                },
                                {
                                "func": "✓ Imagens"
                                },
                                {
                                "func": "✓ Formatação de texto"
                                },
                                {
                                "func": "✓ Atendimento Humano"
                                },
                                {
                                "func": "✓ Salvar contatos"
                                }
                            ]
                            },                
                     {
                        "id": "broadcast-whatsapp",
                        "title": "Envio de mensagens ativas no WhatsApp",
                        "subtitle": "Gerencie seus messages templates e suas listas de distribuição",
                        "categories": [
                            {
                            "category": "WhatsApp"
                            },
                            {
                            "subcategory": "Broadcast"
                            },
                            {
                            "subcategory": "Message Template"
                            }
                        ],
                        json": "{"broadcast-whatsapp":{"name":"Broadcast - WhatsApp", "url": "https://blip-plugin-broadcast.cs.blip.ai/ "}}",
                        "images": [
                            {
                            "url": "/templates/petshop-agendamento/Exemplo01.png"
                            },
                            {
                            "url": "/templates/petshop-agendamento/Exemplo02.png"
                            },
                            {
                            "url": "/templates/petshop-agendamento/Exemplo03.png"
                            },
                            {
                            "url": "/templates/petshop-agendamento/Exemplo04.png"
                            }
                        ],
                        "tabs": {
                            "details": '<p class="content-title">Compatível com:</p> \\
                            <div class="compatible-channels"> \\
                                <img class="compatible-channels-img" src="/img/illustrations/messenger-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/workplace-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/blipchat-logo.svg"></img> \\
                            </div> \\
                            <p class="content-text">Esse chatbot foi feito para ajudar Petshops a oferecerem seus serviços e uma maneira de agendá-los, \\
                                integrando automaticamente com o Google Calendar.</p> \\
                            \\
                            <p class="content-title">O que pode ser feito?</p> \\
                            <ul> \\
                                <li class="content-list-text">Exibir seus serviços</li> \\
                                <li class="content-list-text">Prover informações sobre o Petshop</li> \\
                                <li class="content-list-text">Fornecer ao cliente opção de marcar um horário em sua agenda automaticamente,\\
                                    de acordo com seus horários livres.</li> \\
                                <li class="content-list-text">Coletar informações do cliente.</li> \\
                            </ul> \\
                                \\
                            <p class="content-title">Pré Requisitos</p> \\
                            <ul> \\
                                <li class="content-list-text">Uma conta do Google</li> \\
                                <li class="content-list-text">Uma agenda no Google Calendar</li> \\
                                <li class="content-list-text">Um projeto no Google Cloud Platform</li> \\
                                <li class="content-list-text">Dar permissão para que o bot acesse, edite e escreva em sua agenda.</li> \\
                            </ul>',  


                            "install": '<p class="content-title">Como instalar?</p>\\
                            <p class="content-text">Para começar a utilizar o bot, é preciso configurar sua conta no Google, \\
                                fazer a autenticação e informar para qual agenda os eventos serão enviados. </p> \\
                                \\
                                <ol> \\
                                <li class="content-list-text">Crie um bot e copie a API-Key dele.</li> \\
                                    <ul>\\
                                        <li class="content-list-text"><a href="https://help.blip.ai/docs/en/api-sdks/como-encontrar-a-api-key-do-meu-bot/">Clique aqui para descobrir como encontrar sua API-Key</a></li><br>\\
                                        </ul>\\
                                    <li class="content-list-text">Informe sua API-Key e clique em <b>Instalar</b></li> \\
                                    <li class="content-list-text">Caso prefira, baixe o fluxo e o importe no seu bot</li>\\
                                        <ul>\\
                                        <li class="content-list-text"><a href="https://help.blip.ai/docs/builder/importando-o-fluxo-de-um-bot-no-builder/">Clique aqui para aprender como importar um fluxo no Builder</a></li><br>\\
                                        </ul>\\
                                    <li class="content-list-text">Crie uma conta no Google</li> \\
                                    <li class="content-list-text">Nessa conta, crie uma Agenda no <a href="https://calendar.google.com/">Google Calendar</a>, e pegue o seu ID \\
                                        <ul> \\
                                            <li>Acesse a agenda, clique em <b>Opções</b></li> \\
                                            <img src="/templates/petshop-agendamento/calendar_config.png"></img> \\
                                            <li>Procure pelo <b>Id da Agenda</b> e copie-o </li> \\
                                        </ul> \\
                                    </li> \\
                                    <li class="content-list-text" >No bot, crie uma variável de configuração chamada <b>calendarId</b> e coloque como valor o Id da Agenda que você acabou de copiar. </li>\\
                                    <li class="content-list-text">Crie um projeto no <a href="https://console.cloud.google.com/">Google Cloud Platform</a></li>\\
                                    <li class="content-list-text">Com o projeto criado, acesse a área <b>APIs e Serviços</b> e clique em <b>Credenciais</b>. </li>\\
                                    <img src="/templates/petshop-agendamento/credenciais.png"></img>\\
                                    <li class="content-list-text">Selecione "Criar credenciais" e crie uma <b>Chave de Api</b>. Copie o valor informado.</li>\\
                                    <li class="content-list-text">Crie uma variável de configuração chamada <b>apiKey</b> e coloque o valor copiado no passo 8.</li>\\
                                    <li class="content-list-text">Selecione "Criar credenciais" novamente, desta vez optando por criar um Id do cliente Oauth\\
                                        <ul>\\
                                            <li>Selecione <b>Aplicativo Web</b></li>\\
                                            <li>Informe um nome</li>\\
                                        </ul>\\
                                    <li class="content-list-text">Ao final, copie o <b>Id do cliente</b> e a <b>chave secreta do cliente</b></li>\\
                                    <li class="content-list-text">Entre no <a href="https://developers.google.com/oauthplayground/">OAuth 2.0 Playground</a></li>\\
                                    <li class="content-list-text">Procure por <b>Calendar API V3</b> na lista de APIs. \\
                                            Selecione todos os escopos disponíveis para ela e clique em <b>Authorize APIs</b>  \\
                                    </li>\\
                                    <li class="content-list-text">Será solicitado que você faça <i>login</i> e dê permissão.</li>\\
                                    <li class="content-list-text">Ainda no Playground, abra o menu de configurações e selecione a opção <b>Use your own OAuth credentials.</b> \\
                                        Nos campos correspondentes, informe o <b>Id do cliente</b> e a <b>chave secreta do cliente</b>.</li>\\
                                    <li class="content-list-text">Clique em <b>Exchange authorization code for tokens</b> para gerar os valores de <i>Refresh Token</i>.</li>\\
                                    <li class="content-list-text">Copie os valores de <b>Refresh Token</b> e <b>Access Token</b> e salve.</li>\\
                                    <li class="content-list-text">No seu bot, crie uma <b>Ação global de entrada</b> uma requisição HTTP.</li>\\
                                    <li class="content-list-text">Preencha as informações conforme abaixo:</li>\\
                                    <div style="background-color:#f6f8fa">\\
                                        <b>Método</b>: POST<br>\\
                                        <b>URL</b>: https://accounts.google.com/o/oauth2/token\\
                                    </div>\\
                                    <li class="content-list-text">O corpo da requisição deverá ser como a seguir, onde você deverá informar os valores salvos.</li>\\
                                    <div style="background-color:#f6f8fa">\\
                                        {<br>\\
                                            &nbsp;&nbsp;&nbsp;&nbsp;"client_secret": "YOUR_CLIENT_SECRET"<br> \\
                                            &nbsp;&nbsp;&nbsp;&nbsp;"grant_type": "refresh_token"<br>\\
                                            &nbsp;&nbsp;&nbsp;&nbsp;"refresh_token": "YOUR_REFRESH_TOKEN"<br>\\
                                            &nbsp;&nbsp;&nbsp;&nbsp;"client_id": "YOUR_CLIENT_ID"<br>\\
                                        }<br>\\
                                    </div>\\
                                    <li class="content-list-text">Crie uma variável de configuração chamada <b>timeOffset</b> e informe a diferença entre seu fuso-horário e UTC-0.\\
                                        <i>Para o horário de Brasília, informe <b>-3.</i></li>\\
                                    <li class="content-list-text">Crie duas variáveis de configuração:\\
                                        <ul>\\
                                            <li><b>openHour</b> informando a hora que seu petshop abre (apenas a hora, no formato HH)</li>\\
                                            <li><b>closeHour</b> informando a hora que seu petshop fecha.</li>\\
                                        </ul>\\
                                    <img src="/templates/petshop-agendamento/variaveis_config.png"></img>\\
                                </ol>',

                            "support": '<p class="content-title">Suporte</p> \\
                            <p class="content-text"> Este modelo de Chatbot é gratuito e tem como objetivo ajudar os usuários a compreenderem \\
                                e aprenderem sobre algumas funcionalidades do BLiP.</p>\\
                                \\
                                <p class="content-text"> A equipe do BLiP e da Take não prestam suporte a este modelo.</p>\\
                                <p class="content-text"> <b> Ficou com alguma dúvida ou gostaria de dicas e sugestões de uso deste template? Deixe seu comentário abaixo. </b></p>',
                        },
                        "table": [
                            {
                            "func": "✓ Integração: Google Calendar"
                            },
                            {
                            "func": "✓ Carrossel"
                            },
                            {
                            "func": "✓ Menu"
                            },
                            {
                            "func": "✓ Conteúdo Dinâmico"
                            },
                            {
                            "func": "✓ Ações Globais"
                            },
                            {
                            "func": "✓ Variáveis de Configuração"
                            },
                            {
                            "func": "✓ Atendimento Humano"
                            },
                            {
                            "func": "✓ Script Javascript"
                            }
                        ]
                        }
                    ]
                    };
                    var template;
                    for(var k = 0; k < data.templates.length; k++){
                        if(data.templates[k].id == myParam){
                            template = data.templates[k];
                            break;
                        }
                    }

                    if (template){
                        var categories_details = document.getElementsByClassName('categories-details')[0];
                        
                        template.categories.forEach(function (category, index) {
                                if (Object.keys(category).toString() == "category"){
                                    var element = document.createElement("button");
                                    element.setAttribute("class", "category-details");
                                    element.innerHTML = Object.values(category).toString();
                                    categories_details.appendChild(element);
                                }else{
                                    var element = document.createElement("button");
                                    element.setAttribute("class", "subcategory-details");
                                    element.innerHTML = Object.values(category).toString();
                                    categories_details.appendChild(element);
                                }
                            });
                        
                        var title_details = document.getElementsByClassName('title-details')[0];
                        title_details.innerHTML = template.title.toString();

                        var creator = document.getElementsByClassName('creator-template')[0];
                            if(template.creator_profile){
                                var linkProfile = document.getElementById('linkProfile');
                                linkProfile.href = template.creator_profile;
                                linkProfile.target = "_blank";
                            }
                        creator.innerHTML = template.creator.toString();

                        var subtitle = document.getElementsByClassName('subtitle-details')[0];
                        subtitle.innerHTML = template.subtitle.toString();

                        function readTextFile(file, callback) {
                            var rawFile = new XMLHttpRequest();
                            rawFile.overrideMimeType("application/json");
                            rawFile.open("GET", file, true);
                            rawFile.onreadystatechange = function() {
                                if (rawFile.readyState === 4 && rawFile.status == "200") {
                                    callback(rawFile.responseText);
                                }
                            }
                            rawFile.send(null);
                        };

                        
                        var download = document.getElementById('download');
                        var modalDownload = document.getElementById("modalDownload");
                        var modalCloseDonwload = document.getElementById("closeDownload");
                        download.onclick = function(){
                            modalDownload.style.display = "block";
                        };

                        var Bpublish = document.getElementById("BPublish");
                        var aKey = document.getElementById("botKey");
                        Bpublish.onclick = function() {
                            readTextFile(template.download_uri.toString(), function(json_file){
                                axios.post('https://http.msging.net/commands', {
                                "id": "0094447a-2581-4597-be6a-a5dff33af156",
                                "method": "set",
                                "uri": "/buckets/blip_portal:builder_working_flow",
                                "type": "application/json", 
                                "resource": JSON.parse(json_file)
                                }, {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Access-Control-Allow-Origin' : '*',
                                    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                                    'X-Requested-With': 'XMLHttpRequest',
                                    'Authorization': aKey.value.toString()
                                }
                                })
                                .then(function (response) {
                                    ga('send', 'event', 'Template install', template.title.toString(), 'Template');
                                })
                                .catch(function (error) {
                                    console.log(error.response);
                                });    
                            });
                            
                        };

                        
                        var linkBot = document.getElementsByClassName('iframe-bot')[0];
                        linkBot.src = template.link_bot.toString();

                        var carousel = document.getElementsByClassName("carousel")[0];
                        var dots = document.getElementsByClassName("dots")[0];
                        template.images.forEach(function(image, index) {
                            var div = document.createElement("div");
                            div.setAttribute("class", "mySlides fade");
                                
                                var img = document.createElement("img");
                                img.src = image.url.toString();
                            div.appendChild(img);
                            carousel.appendChild(div);

                            var dot = document.createElement("span");
                            dot.setAttribute("class", "dot");
                            dot.setAttribute("id", index);
                            dots.appendChild(dot);

                        });

                        var table = document.getElementsByTagName('table')[0];
                        table.setAttribute("class", "table-func");
                        template.table.forEach(function(row, index){
                            var tr = document.createElement("tr");
                            tr.setAttribute("class", "tr-details");
                                var td = document.createElement("td");
                                td.setAttribute("class", "td-details");
                                    var content = document.createElement("div");
                                    content.setAttribute("class", "td-details-content");
                                        var text = document.createTextNode(row.func.toString());
                                    content.appendChild(text);
                                td.appendChild(content);
                            tr.appendChild(td);
                        table.appendChild(tr);
                        });


                        var details = document.getElementById("Details");
                        details.innerHTML = template.tabs.details;
                        
                        var feedbacks = document.createElement("div");
                        feedbacks.setAttribute("class", "template-feedback");
                                var feedback_text = document.createElement("p");
                                feedback_text.innerHTML = "Como você avalia este template?";
                        feedbacks.appendChild(feedback_text);
                                var feedback_rating = document.createElement("div");
                                feedback_rating.setAttribute("class", "rw-ui-container");
                                feedback_rating.setAttribute("data-title", template.title.toString());
                        feedbacks.appendChild(feedback_rating);

                        details.appendChild(feedbacks);

                            var a = document.createElement("a");
                            a.setAttribute("class", "docs-prev button");
                            Object.assign(a.style, {"margin-top": "87px", "margin-bottom": "80px", "text-align": "center", "height": "38px" ,"width": "30%", "min-width": "fit-content", "border-radius": "8px"});
                            a.href = "/templates";
                                var span = document.createElement("span");
                                span.setAttribute("class", "function-name-prevnext");
                                span.innerHTML = "< Ver todos os templates";
                                span.style.fontWeight = "bold";
                            a.appendChild(span);
                        details.appendChild(a);


                        var install = document.getElementById("Install");
                        install.innerHTML = template.tabs.install;
                        var b = document.createElement("a");
                            b.setAttribute("class", "docs-prev button");
                            Object.assign(b.style, {"margin-top": "87px", "margin-bottom": "80px", "text-align": "center", "height": "38px" ,"width": "30%", "min-width": "fit-content", "border-radius": "8px"});
                            b.href = "/templates";
                                var span = document.createElement("span");
                                span.setAttribute("class", "function-name-prevnext");
                                span.innerHTML = "< Ver todos os templates";
                                span.style.fontWeight = "bold";
                            b.appendChild(span);
                        install.appendChild(b);


                    DiscourseEmbed = { discourseUrl: 'https://forum.blip.ai/',
                    topicId: template.topicId };

                    (function() {
                        var d = document.createElement('script'); d.type = 'text/javascript'; d.async = true;
                        d.src = DiscourseEmbed.discourseUrl + 'javascripts/embed.js';
                        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(d);
                    })();

                        var support = document.getElementById("Support");
                        support.innerHTML = template.tabs.support;
                        var d = document.createElement("div");
                        d.setAttribute("id", "discourse-comments");
                        support.appendChild(d);
                        var c = document.createElement("a");
                            c.setAttribute("class", "docs-prev button");
                            Object.assign(c.style, {"margin-top": "87px", "margin-bottom": "80px", "text-align": "center", "height": "38px" ,"width": "30%", "min-width": "fit-content","border-radius": "8px"});
                            c.href = "/templates";
                                var span = document.createElement("span");
                                span.setAttribute("class", "function-name-prevnext");
                                span.innerHTML = "< Ver todos os templates";
                                span.style.fontWeight = "bold";
                            c.appendChild(span);
                        support.appendChild(c);
                    }
                    else{
                        alert("404: PÁGINA NÃO ENCONTRADA!"); 
                        window.location.href = "/templates";
                    }
                    
                    var chat;
                    var modalBot = document.getElementById("modalBot");
                    var btn = document.getElementsByClassName('button-details-see')[0];
                    var span = document.getElementsByClassName('closeBot')[0];
                    btn.onclick = function(){

                        ga('send', 'event', 'Template test', template.title.toString(), 'Template');

                        modalBot.style.display = "block";
                        chat = new BlipChat()
                        .withAppKey(template.link_bot)
                        .withButton({"color":"#2CC3D5","icon":""})
                        .withTarget("iframe")
                        .build();
                    }

                    span.onclick = function() { 
                        modalBot.style.display = "none";
                        chat.destroy();
                    }

                    window.onclick = function(event) {
                        if (event.target == modalBot) {
                            modalBot.style.display = "none";
                            chat.destroy();
                        }
                        if (event.target == modalDownload) {
                            modalDownload.style.display = "none";
                        }
                    };

                    modalCloseDonwload.onclick = function(){
                        modalDownload.style.display = "none";
                    };

                    document.getElementById("botKey").addEventListener("keyup", function() {
                        var nameInput = document.getElementById('botKey').value;
                        if (nameInput != "") {
                            document.getElementById('BPublish').removeAttribute("disabled");
                        } else {
                            document.getElementById('BPublish').setAttribute("disabled", null);
                        }
                    });
                    
                `
                }}
            />
        );
    }
}

Detail.title = 'Template';
module.exports = Detail; 