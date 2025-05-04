@echo off
REM — vai para o drive e pasta do seu projeto. Ajuste o caminho se for diferente:
cd /d "C:\Users\BARAO\Desktop\APLICATIVOS DE SST\METRICLY40"

REM — instala as dependências do Storybook (ignore avisos de peer-deps)
npm install

REM — inicia o Storybook na porta 6006
npm run storybook

pause
