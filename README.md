![NETER Logo](https://i.imgur.com/p36jejQ.png)

NETER é um aplicativo de monitoração de rede desenvolvido em Electron. Ele permite obter informações sobre os processos em execução no seu computador e medir a taxa de upload e download utilizada por cada aplicativo. Além disso, o NETER exibe uma lista dos protocolos mais utilizados na rede.

## Recursos

- Monitoramento de processos em execução no computador
- Medição da taxa de upload e download de cada aplicativo
- Exibição da lista de protocolos mais utilizados

## Requisitos do Sistema

Antes de executar o NETER, verifique se o seu computador atende aos seguintes requisitos:

- Node.js (v12 ou superior)
- npm (v6 ou superior)
- Electron (v12 ou superior)
- Python (3.6 ou superior)

## Instalação

1. Faça o clone deste repositório para o seu computador.
2. Navegue até o diretório do projeto.
3. Execute o comando `npm install` para instalar as dependências.
4. Execute o comando `npm start` para iniciar o aplicativo.

## Diferenciais

1. O NETER possui um sistema inteligente de reports on-demand, baseado na utilização de outros usuários que reportam processos que utilizam muita rede ou processos que não são bem vindos rodando em seu sistema.
2. O NETER possui um monitoramento de rede real-time, você acompanha a quantidade de dados sendo trafegados em tempo real.
3. O NETER é bilingue, temos um sistema de tradução de PT-BR para EN-US e futuramente novas linguagens.
4. O NETER tem uma interface amigável e incrível de utilizar.


## Como usar

Após iniciar o aplicativo, você terá acesso às seguintes funcionalidades:

- **Processos em execução:** Exibe uma lista dos processos que estão rodando no seu computador.
- **Medição de taxa de upload e download:** Ao selecionar um processo, o NETER exibirá a taxa de upload e download utilizada por aquele aplicativo.
- **Lista de protocolos mais utilizados:** Mostra os protocolos de rede mais utilizados, com base na atividade registrada pelo NETER.

## Contribuição

Se você deseja contribuir para o desenvolvimento do NETER, siga as etapas abaixo:

1. Faça o fork deste repositório.
2. Crie um branch para sua nova funcionalidade ou correção de bug: `git checkout -b minha-funcionalidade`.
3. Faça suas alterações e commit: `git commit -m "Minha nova funcionalidade"`.
4. Envie seu branch para o repositório remoto: `git push origin minha-funcionalidade`.
5. Envie um Pull Request, explicando as alterações propostas.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
