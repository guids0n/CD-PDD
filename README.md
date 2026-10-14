# Roteiro da Demonstração Prática de CD

> **Integrantes:** Eduardo e Guidson  
> **Tempo estimado:** 10 a 12 minutos

---

## Antes de começar: checklist

- [ ] VS Code aberto na pasta `calculadora-cd`.
- [ ] Navegador aberto com três abas: GitHub do repositório na aba **Actions**, painel do Vercel e URL da aplicação no ar.
- [ ] `utils/calculadora.js` com a lógica errada: divide por 2 em vez de 4.
- [ ] `.github/workflows/deploy.yml` com a linha `environment: production-approval`.

---

## Fase 1: O escudo (simulando a falha)

**Objetivo:** mostrar o pipeline barrando um código quebrado.

1. **Eduardo:** explica que o código atual tem um erro na regra de negócio: a média está dividindo por 2 em vez de 4. Com as notas 10, 8, 6 e 4, o programa retorna 9 em vez de 7.
2. **Guidson:** abre o terminal no VS Code e faz o commit simulando um desenvolvedor desatento:

   ```bash
   git add .
   git commit -m "feat: adiciona calculo de media"
   git push origin main
   ```

3. **Ação conjunta:** mudem para a aba do GitHub Actions.
4. **Eduardo e Guidson:** mostrem o job de testes falhando (vermelho).
5. **Fala:** “Como o teste falhou, o pipeline foi abortado. O CD funcionou como um escudo e impediu que esse erro chegasse à produção no Vercel.”

---

## Fase 2: Continuous Delivery (entrega contínua)

**Objetivo:** mostrar o código passando, mas aguardando aprovação manual.

1. **Guidson:** volta ao VS Code e abre `utils/calculadora.js`.
2. **Ação:** apaga a linha errada e descomenta a correta. O código deve ficar assim:

   ```javascript
    export function calcularMedia(n1, n2, n3, n4) {
       return (n1 + n2 + n3 + n4) / 4;
   }
   ```

3. **Guidson:** faz o commit da correção:

   ```bash
   git add .
   git commit -m "fix: corrige divisor da media para 4"
   git push origin main
   ```

4. **Ação conjunta:** voltem ao GitHub Actions. O teste deve passar (verde) e o build vai rodar.
5. **Atenção:** o pipeline vai pausar e ficar amarelo, aguardando aprovação.
6. **Eduardo:** “Este é o cenário de Continuous Delivery. O pacote está pronto, mas exige uma autorização do negócio.”
7. **Guidson:** clica em **Review deployments**, seleciona o ambiente e aprova.
8. **Finalização da fase:** mostrem o deploy concluindo e a aplicação no Vercel funcionando corretamente com as quatro notas.

---

## Fase 3: Continuous Deployment (implantação contínua)

**Objetivo:** remover a trava e mostrar o fluxo 100% autônomo.

1. **Guidson:** no VS Code, abre `.github/workflows/deploy.yml`.
2. **Ação 1:** apaga a linha `environment: production-approval`.
3. **Ação 2:** abre `app/page.js` e muda o título de **“Calculadora de Média”** para **“Calculadora de Média (Automática)”**.
4. **Guidson:** faz o último commit:

   ```bash
   git add .
   git commit -m "feat: muda para deploy automatico"
   git push origin main
   ```

5. **Ação conjunta:** voltem ao GitHub Actions.
6. **Eduardo:** “Agora removemos a trava humana. Este é o Continuous Deployment. Se passar nos testes, vai direto ao usuário.”
7. **Finalização:** mostrem o pipeline passando direto, sem pausas. Atualizem a página do Vercel e mostrem o título novo no ar.

## Encerramento

Agradeçam e abram para dúvidas.
