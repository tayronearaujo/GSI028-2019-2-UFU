# GSI028-2019-2-UFU / Trabalho de sistemas distribuídos

## Descrição do projeto 
  * Como um amante de jogos a idéa é criar um mini game PVP (Jogador contra jogador) multiplayer , em que cada jogador devera criar uma conta e fazer loguin pelo site para jogar, após logados os jogadores se conectaram em salas de batalha e se enfrentarão em uma partida. Ao iniciar cada jogador recebe 100 pontos de vida que pode ser perdidos sofrendo dano de ataques do inimigo. Cada ataque não defendido o jogador sofre 20 de dano, para ataques defendidos o jogador não sofrerá dano. O jogo termina quando 1 jogador estiver com 0 pontos de vida!
  
## Componentes:

* Jogadores (Acessando pelo navegador web)
* Servidor
* Banco de dados sql


## Testes 

* Teste de recuperação de falhas: Valida se a seção está sendo devidamente armazenada.
* Teste de concorrência / performance: Verifica a quantida de salas de batalha / jogadores que o servidor suporta.
* Testes Unitários: verifica se a lógica de dano e gameplay está sendo executada corretamente.
