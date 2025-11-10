Feature: Operar a calculadora web
  Para facilitar contas rápidas no navegador
  Como pessoa usuária
  Eu quero ver o resultado correto no visor virtual

  Scenario Outline: Executar operações básicas
    Given que a calculadora web foi carregada
    When eu digito "<sequencia>"
    Then eu vejo "<resultado>" no visor

    Examples:
      | sequencia | resultado |
      | 1+2=      | 3         |
      | 7-5=      | 2         |
      | 9*3=      | 27        |
      | 8/2=      | 4         |
