# Prompt Bench

**LAB//ABERTO #007** — ambiente open source para versionar, comparar e avaliar prompts e respostas de IA sem depender de uma API paga.

## Por que existe

Comparar prompts apenas “no feeling” produz decisões difíceis de reproduzir. O Prompt Bench transforma esse processo em experimento: versões ficam registradas, respostas são avaliadas lado a lado e critérios explícitos geram um score comparável.

## MVP

- criação de experimentos;
- versionamento imutável de prompts;
- comparação de duas respostas lado a lado;
- critérios padrão: clareza, precisão e aderência;
- notas de 0 a 5 com score final de 0 a 100;
- indicação automática de vencedor ou empate;
- anotações de contexto;
- persistência no `localStorage`;
- exportação e importação do workspace em JSON;
- nenhuma chave de API obrigatória;
- nenhuma transmissão de prompts ou respostas no MVP.

## Executar

Requer Node.js 20+.

```bash
npm start
```

Abra `http://localhost:3000`.

## Testes

```bash
npm run check
npm test
```

## Docker

```bash
docker compose up --build
```

## Privacidade

Os experimentos ficam apenas no navegador atual, em `localStorage`. O servidor apenas entrega os arquivos estáticos e expõe `/api/health`.

Não use o projeto como cofre de segredos. Dados sensíveis continuam sendo dados sensíveis mesmo quando a interface tem um gradiente bonito.

## Estrutura

```text
public/          interface e lógica do navegador
src/core.js      regras puras e testáveis de experimento
server.js        servidor HTTP mínimo
test/            testes automatizados
docs/            roadmap
.github/         CI
```

## Roadmap

Consulte [`docs/ROADMAP.md`](docs/ROADMAP.md).

## Contribuição

Consulte [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Independência

Projeto pessoal e independente para fins educacionais e contribuição com a comunidade. Não contém código, dados, processos ou propriedade intelectual de empregadores ou clientes do autor.

## Licença

MIT.
