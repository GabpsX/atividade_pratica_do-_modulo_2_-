//cria dinamicamente os itens

class ListarItens {
     constructor() {
         this.voosData = [
             {
                 nome_cidade: "Aracaju",
                 preco_voo: "R$500",
                 imagem: "src/img/aracaju.jpg"
             },
             {
                 nome_cidade: "Foz do Iguaçu",
                 preco_voo: "R$600",
                 imagem: "src/img/foz-do-iguacu.jpg"
             },
             {
                nome_cidade: "Recife",
                preco_voo: "R$600",
                imagem: "src/img/recife.jpg"
            },
            {
                nome_cidade: "Rio de Janeiro",
                preco_voo: "R$600",
                imagem: "src/img/riodejaneiro.jpg"
            },
            {
                nome_cidade: "São Paulo",
                preco_voo: "R$600",
                imagem: "src/img/saopaulo.jpg"
            },
            {
                nome_cidade: "Florianopolis",
                preco_voo: "R$600",
                imagem: "src/img/florianopolis.jpg"
            },
            {
                nome_cidade: "Pernambuco",
                preco_voo: "R$600",
                imagem: "src/img/pernambuco.jpg"
            },
            {
                nome_cidade: "Curitiba",
                preco_voo: "$600",
                imagem: "src/img/curitiba.jpg"
            }
            
         ];

         this.promoData = [
            {
                titulo: "Voos para Nova Iorque",
                descricao: "Descubra os encantos da cidade que nunca dorme com nossas ofertas especiais. Aproveite uma passagem ida e volta por apenas R$1.200!",
                imagem: "src/img/novaiorque.jpg"
            },
            {
                titulo: "Voos para Argentina",
                descricao: "Aventure-se em terras argentinas com nossas ofertas para escapadas relaxantes. Garanta sua passagem ida e volta por apenas R$800!",
                imagem: "src/img/argentina.jpg"
            },
            {
                titulo: "Voos para Vancouver",
                descricao: "Explore a bela cidade de Vancouver com nossas ofertas imperdíveis. Pacotes de passagem ida e volta a partir de R$950!",
                imagem: "src/img/vancouver.jpg"
            }
        ];
        
     }

     getOfertasJSON() {
         return this.voosData;
     }

     mostrarOfertas() {
         const ofertasContainer = document.querySelector('.ofertas');
         
         this.voosData.forEach(oferta => {
             const ofertaElement = document.createElement('div');
            
             ofertaElement.classList.add('oferta');

             const imagemElement = document.createElement('div'); 
             imagemElement.classList.add('imagem-amostra');
             imagemElement.style.height = "220px";
             imagemElement.style.borderRadius ="10px";
             imagemElement.style.backgroundSize = "cover";
             imagemElement.style.backgroundRepeat = "no-repeat";
             imagemElement.style.backgroundImage = `url(${oferta.imagem})`;
             imagemElement.alt = oferta.nome_cidade;
             


             const nomeCidadeElement = document.createElement('h3');
             nomeCidadeElement.textContent = oferta.nome_cidade;

             const precoVooElement = document.createElement('p');
             precoVooElement.textContent = `A partir de: ${oferta.preco_voo}`;
             ofertaElement.appendChild(imagemElement);
             ofertaElement.appendChild(nomeCidadeElement);
             ofertaElement.appendChild(precoVooElement);
             ofertasContainer.appendChild(ofertaElement);


         });
     }



     criarPromoElement(promocao) {
        const promoElement = document.createElement('div');
        promoElement.classList.add('oferta');

        const imagemElement = document.createElement('div');
        imagemElement.classList.add('imagem-amostra');
        imagemElement.style.height = "220px";
        imagemElement.style.borderRadius ="10px";
        imagemElement.style.backgroundSize = "cover";
        imagemElement.style.backgroundRepeat = "no-repeat";
        imagemElement.style.backgroundImage = `url(${promocao.imagem})`;

        const tituloElement = document.createElement('h3');
        tituloElement.textContent = promocao.titulo;

        const descricaoElement = document.createElement('p');
        descricaoElement.textContent = promocao.descricao;

        promoElement.appendChild(imagemElement);
        promoElement.appendChild(tituloElement);
        promoElement.appendChild(descricaoElement);

        return promoElement;
    }

    mostrarPromocoes() {
        const promocoesContainer = document.querySelector('.ofertas');

        this.promoData.forEach(promocao => {
            const promoElement = this.criarPromoElement(promocao);
            promocoesContainer.appendChild(promoElement);
        });
    }
 }

