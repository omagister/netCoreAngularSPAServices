# Angular e .NET Core no mesmo deploy

Esta é uma SPA (Single Page Application), construída com:

* ASP.NET Core e C# para o back-end no servidor
* Angular e TypeScript para o front-end no cliente
* Bootstrap para o layout e o estilo
Para ajudar a entender:

* Angular CLI integrado. Em tempo de desenvovimento, não é necessário rodar ng serve. Isto acontece automaticamente em segundo plano, então os recursos de front-end são carregados na página, que é atualizada quando algum arquivo é modificado.
* Build eficiente em produção. Em produção, os tempos de execução em desenvolvimento são desativado, e o dotnet publish configura automaticamente a chamada ao ng build para produzir os arquivos minificados em javascript.

O subdiretório ClientApp é uma aplicação Angular CLI. Se abrir o terminal para este subdiretório, poderá rodar qualquer comando ng , ou use npm para instalar novos pacotes.