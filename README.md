Atividade 

"""
Usando HTML / CSS / BOOTSTRAP: 

Criar um protótipo da primeira versão do site; 

Criar as páginas: Home, Destino, Promoções, Contato e as demais páginas de acordo com seu modelo de negócio. Usando HTML, CSS e BOOTSTRAP; 

As páginas devem ser responsivas ou adaptáveis. 

Fazer as formatações de acordo com a paleta de cores escolhida. 

"""
<p align="center">
<img src="https://raw.githubusercontent.com/GabpsX/atividade_pratica_do-modulo_2/main/fotos/1.png" alt="" width="50%"/> 
</p>
<hr>
<p align="center">
<img src="https://raw.githubusercontent.com/GabpsX/atividade_pratica_do-modulo_2/main/fotos/2.png" alt="" width="50%"/> 
</p>
<hr>
<p align="center">
<img src="https://raw.githubusercontent.com/GabpsX/atividade_pratica_do-modulo_2/main/fotos/3.jpeg" alt="" width="50%"/> 
</p>
<hr>

	Algoritmo AgenciaDeViagens
	
	Função Cadastrar_Clientes(cliente_data: vetor)
		// solicitar dados (nome, idade, etc)
		// armazenar os dados 
	Fim Função
	
	Função Cadastro_Destino(destino: vetor)
		// solicitar dados (local, preço, etc)
		//armazenar os dados 
	Fim Função
	
	Função Consulta_Clientes(bdcliente: vetor)
		// percorrer o vetor bdcliente e retornar os dados de cada cliente
	Fim Função
	
	Função Consulta_Clientes(bddestino: vetor)
		// percorrer o vetor bddestino e retornar os dados de cada destino
	Fim Função
	
	Função Sistema
	    Definir clientes como Vetor de Cliente vazio
	    Definir destinos como Vetor de Destino vazio
	    Definir opcao como inteiro
	
	    Repetir
	        // Exibir o menu
	        Escrever("1 - Cadastro de Cliente")
	        Escrever("2 - Cadastro de Destino")
	        Escrever("3 - Consultar Clientes")
	        Escrever("4 - Consultar Destinos")
	        Escrever("5 - Sair")
	        Ler(opcao)
	
	        Escolha opcao
	            Caso 1:
			//cadastra um cliente
	                Cadastrar_Clientes(clientes)
	            Caso 2:
			//cadastra um destino
	                Cadastro_Destino(destinos)
	            Caso 3:
	                //consulta os clientes cadastrados no sistema
	                Consulta_Clientes(clientes)
	            Caso 4:
	                //consulta os destinos cadastrados no sistema
	                Consulta_Clientes(destinos)
	            Caso 5:
	               //sai do loop
	                Escrever("Saindo do programa.")
	            Caso Contrario:
	                //tratamento de exceção
	                Escrever("Opção inválida.")
	        Fim Escolha
	
	    Enquanto opcao != 5

	Fim Função
