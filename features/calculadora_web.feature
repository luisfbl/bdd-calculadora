# language: pt
Funcionalidade: Operar a calculadora web
  Para facilitar contas rápidas no navegador
  Como pessoa usuária
  Eu quero ver o resultado correto no visor virtual

  Esquema do Cenário: Executar operações básicas
    Dado que a calculadora web foi carregada
    Quando eu digito "<sequencia>"
    Então eu vejo "<resultado>" no visor

    Exemplos:
      | sequencia | resultado |
      | 1+2=      | 3         |
      | 7-5=      | 2         |
      | 9*3=      | 27        |
      | 8/2=      | 4         |
