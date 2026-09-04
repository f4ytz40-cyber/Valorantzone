# VALORANT ZONE — Site para GitHub Pages

Site estático (HTML/CSS/JS) pronto para GitHub Pages.

## 1. Personalize antes de publicar
Abra `config.js` e troque:

```js
window.VZ_CONFIG = {
  serverName: "VALORANT ZONE",
  discordInvite: "https://discord.gg/SEU-CONVITE",
  contactEmail: "contato@seuemail.com",
  instagram: "",
  tiktok: ""
};
```

Troque principalmente o convite do Discord e o e-mail.

## 2. Arquivos principais
- `index.html`: página inicial
- `privacy.html`: política de privacidade
- `terms.html`: termos de uso
- `contact.html`: contato
- `styles.css`: visual
- `script.js`: interações
- `config.js`: convite/e-mail fáceis de editar
- `assets/`: imagens dos VIPs + favicon

## 3. Publicar no GitHub Pages
1. Crie um repositório no GitHub, por exemplo `valorant-zone-site`.
2. Faça upload de **todos os arquivos e pastas deste diretório**, mantendo `index.html` na raiz.
3. No repositório, abra `Settings` → `Pages`.
4. Em `Build and deployment`, escolha `Deploy from a branch`.
5. Selecione a branch `main` e a pasta `/ (root)`.
6. Clique em `Save` e aguarde a publicação.

A URL de um site de projeto costuma ficar assim:
`https://SEU-USUARIO.github.io/valorant-zone-site/`

## Aviso
Não coloque tokens, senhas, `.env`, Access Token do Mercado Pago, chave da Riot/Henrik ou credenciais do bot neste repositório.
