const express = require('express');
const cors = require('cors');
const dotenv =  require ('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Permitir CORS
app.use(cors());
app.use(express.json());

// Endpoint para retornar as questões em formato JSON
app.get('/api/questions', (req, res) => {
    const questions = [
        {
            "id": 1,
            "pergunta": "Qual serviço da AWS permite automatizar o provisionamento de recursos?",
            "alternativas": [
                "AWS Lambda",
                "AWS CloudFormation",
                "AWS EC2",
                "AWS S3"
            ],
            "respostaCorreta": 1,
            "comentario": "O AWS CloudFormation permite criar e gerenciar recursos de infraestrutura por meio de templates, automatizando o processo de provisionamento."
        },
        {
            "id": 2,
            "pergunta": "Qual é o principal benefício do Amazon RDS?",
            "alternativas": [
                "Escalabilidade manual",
                "Gerenciamento automatizado de backups",
                "Controle total sobre a infraestrutura de hardware",
                "Reinicialização de instâncias a cada 24 horas"
            ],
            "respostaCorreta": 1,
            "comentario": "O Amazon RDS fornece gerenciamento automatizado de backups, escalabilidade e manutenção, facilitando a administração de bancos de dados."
        },
        {
            "id": 3,
            "pergunta": "O que é a AWS IAM?",
            "alternativas": [
                "Serviço de backup automatizado",
                "Gerenciamento de identidades e permissões",
                "Sistema de monitoramento de logs",
                "Armazenamento de dados em alta disponibilidade"
            ],
            "respostaCorreta": 1,
            "comentario": "O AWS IAM (Identity and Access Management) permite gerenciar usuários e permissões de acesso aos serviços da AWS."
        },
        {
            "id": 4,
            "pergunta": "O que é o Amazon S3?",
            "alternativas": [
                "Serviço de armazenamento de objetos",
                "Banco de dados relacional",
                "Serviço de filas de mensagens",
                "Serviço de computação em nuvem"
            ],
            "respostaCorreta": 0,
            "comentario": "O Amazon S3 (Simple Storage Service) é um serviço de armazenamento de objetos altamente escalável e durável."
        },
        {
            "id": 5,
            "pergunta": "Qual serviço da AWS é usado para monitoramento de recursos e geração de alertas?",
            "alternativas": [
                "Amazon CloudWatch",
                "AWS Lambda",
                "AWS S3",
                "Amazon RDS"
            ],
            "respostaCorreta": 0,
            "comentario": "O Amazon CloudWatch é usado para monitorar recursos AWS e configurar alarmes para notificar sobre eventos e métricas."
        },
        {
            "id": 6,
            "pergunta": "Qual é o principal benefício do Amazon EC2?",
            "alternativas": [
                "Escalabilidade automática",
                "Armazenamento de objetos",
                "Backup de instâncias",
                "Gerenciamento de filas de mensagens"
            ],
            "respostaCorreta": 0,
            "comentario": "O Amazon EC2 permite a criação e gerenciamento de servidores virtuais escaláveis na nuvem, com capacidade de escalar automaticamente."
        },
        {
            "id": 7,
            "pergunta": "Qual é o serviço AWS ideal para provisionamento de servidores sem se preocupar com infraestrutura?",
            "alternativas": [
                "Amazon EC2",
                "AWS Lambda",
                "AWS CloudFormation",
                "Amazon S3"
            ],
            "respostaCorreta": 1,
            "comentario": "O AWS Lambda permite executar código sem a necessidade de gerenciar servidores, apenas pagando pela execução."
        },
        {
            "id": 8,
            "pergunta": "Qual serviço é utilizado para gerenciar e monitorar logs na AWS?",
            "alternativas": [
                "Amazon CloudWatch Logs",
                "Amazon RDS",
                "AWS Lambda",
                "Amazon S3"
            ],
            "respostaCorreta": 0,
            "comentario": "O Amazon CloudWatch Logs permite a coleta e monitoramento de logs de diferentes serviços da AWS."
        },
        {
            "id": 9,
            "pergunta": "Qual é o principal uso do Amazon VPC?",
            "alternativas": [
                "Gerenciar rede privada",
                "Armazenar dados",
                "Gerenciar backups",
                "Monitorar instâncias"
            ],
            "respostaCorreta": 0,
            "comentario": "O Amazon VPC permite criar redes privadas na AWS, com controle total sobre o ambiente de rede."
        },
        {
            "id": 10,
            "pergunta": "O que é o Amazon CloudFront?",
            "alternativas": [
                "Rede de entrega de conteúdo (CDN)",
                "Serviço de monitoramento",
                "Banco de dados gerenciado",
                "Sistema de backup"
            ],
            "respostaCorreta": 0,
            "comentario": "O Amazon CloudFront é uma rede de entrega de conteúdo (CDN) que acelera a distribuição de conteúdo, reduzindo latência."
        },
        {
            "id": 11,
            "pergunta": "Qual é o serviço AWS utilizado para orquestrar containers?",
            "alternativas": [
                "Amazon ECS",
                "AWS Lambda",
                "Amazon S3",
                "AWS Fargate"
            ],
            "respostaCorreta": 0,
            "comentario": "O Amazon ECS (Elastic Container Service) permite executar e gerenciar containers Docker na AWS."
        },
        {
            "id": 12,
            "pergunta": "Qual é a principal característica do AWS Elastic Beanstalk?",
            "alternativas": [
                "Gerenciamento de filas de mensagens",
                "Gerenciamento de containers Docker",
                "Provisão automática de servidores",
                "Gerenciamento de instâncias EC2"
            ],
            "respostaCorreta": 2,
            "comentario": "O AWS Elastic Beanstalk facilita o deploy de aplicativos web sem gerenciar a infraestrutura subjacente."
        },
        {
            "id": 13,
            "pergunta": "O que é o Amazon DynamoDB?",
            "alternativas": [
                "Banco de dados NoSQL gerenciado",
                "Serviço de armazenamento de arquivos",
                "Serviço de backup de instâncias",
                "Banco de dados relacional"
            ],
            "respostaCorreta": 0,
            "comentario": "O Amazon DynamoDB é um banco de dados NoSQL totalmente gerenciado, escalável e de alta performance."
        },
        {
            "id": 14,
            "pergunta": "O que é o AWS Lambda?",
            "alternativas": [
                "Serviço de computação sem servidor",
                "Banco de dados relacional",
                "Armazenamento de dados",
                "Serviço de mensageria"
            ],
            "respostaCorreta": 0,
            "comentario": "O AWS Lambda permite executar código sem provisionar ou gerenciar servidores, com pagamento por execução."
        },
        {
            "id": 15,
            "pergunta": "Qual serviço AWS é utilizado para análise em tempo real de dados em streaming?",
            "alternativas": [
                "Amazon Kinesis",
                "AWS Lambda",
                "Amazon S3",
                "Amazon RDS"
            ],
            "respostaCorreta": 0,
            "comentario": "O Amazon Kinesis é utilizado para ingerir, processar e analisar grandes volumes de dados em tempo real."
        },
        {
            "id": 16,
            "pergunta": "Qual serviço AWS pode ser usado para criar backups automáticos de instâncias EC2?",
            "alternativas": [
                "Amazon EC2 Backup",
                "AWS Backup",
                "Amazon RDS",
                "Amazon S3"
            ],
            "respostaCorreta": 1,
            "comentario": "O AWS Backup permite automatizar o processo de backup para diversos serviços da AWS, incluindo EC2."
        },
        {
            "id": 17,
            "pergunta": "Qual é a principal função do Amazon Route 53?",
            "alternativas": [
                "Gerenciar DNS e roteamento de tráfego",
                "Armazenar dados",
                "Monitorar instâncias EC2",
                "Gerenciar segurança de redes"
            ],
            "respostaCorreta": 0,
            "comentario": "O Amazon Route 53 é um serviço de DNS gerenciado que também permite roteamento de tráfego e verificação de saúde."
        },
        {
            "id": 18,
            "pergunta": "Qual serviço AWS permite enviar notificações para usuários?",
            "alternativas": [
                "Amazon SNS",
                "Amazon SES",
                "AWS Lambda",
                "Amazon SQS"
            ],
            "respostaCorreta": 0,
            "comentario": "O Amazon SNS (Simple Notification Service) permite enviar notificações via SMS, e-mail, entre outros."
        },
        {
            "id": 19,
            "pergunta": "Qual serviço AWS é usado para orquestrar funções Lambda em workflows complexos?",
            "alternativas": [
                "Amazon SQS",
                "AWS Step Functions",
                "Amazon CloudWatch",
                "AWS Lambda"
            ],
            "respostaCorreta": 1,
            "comentario": "O AWS Step Functions permite orquestrar funções Lambda e outros serviços AWS em workflows complexos."
        },
        {
            "id": 20,
            "pergunta": "Qual serviço AWS oferece armazenamento de arquivos compartilhado para instâncias EC2?",
            "alternativas": [
                "Amazon S3",
                "Amazon EFS",
                "Amazon SQS",
                "Amazon RDS"
            ],
            "respostaCorreta": 1,
            "comentario": "O Amazon EFS (Elastic File System) oferece armazenamento de arquivos compartilhado e escalável para instâncias EC2."
        },
        {
            "id": 21,
            "pergunta": "O que é o Amazon Redshift?",
            "alternativas": [
                "Banco de dados relacional",
                "Serviço de data warehouse",
                "Serviço de análise em tempo real",
                "Armazenamento de objetos"
            ],
            "respostaCorreta": 1,
            "comentario": "O Amazon Redshift é um serviço de data warehouse que permite realizar consultas e análise de grandes volumes de dados."
        },
        {
            "id": 22,
            "pergunta": "O que é o AWS Elastic Load Balancing (ELB)?",
            "alternativas": [
                "Distribuição de tráfego entre instâncias EC2",
                "Armazenamento de dados",
                "Gerenciamento de backups",
                "Execução de funções Lambda"
            ],
            "respostaCorreta": 0,
            "comentario": "O AWS Elastic Load Balancing distribui automaticamente o tráfego de entrada entre várias instâncias EC2."
        },
        {
            "id": 23,
            "pergunta": "Qual serviço AWS permite a criação de redes privadas dentro da nuvem?",
            "alternativas": [
                "Amazon VPC",
                "AWS EC2",
                "AWS Lambda",
                "Amazon CloudFront"
            ],
            "respostaCorreta": 0,
            "comentario": "O Amazon VPC permite criar redes privadas isoladas dentro da AWS."
        },
        {
            "id": 24,
            "pergunta": "Qual é o serviço AWS utilizado para armazenar dados de objetos em nuvem?",
            "alternativas": [
                "Amazon S3",
                "Amazon EFS",
                "Amazon RDS",
                "Amazon Glacier"
            ],
            "respostaCorreta": 0,
            "comentario": "O Amazon S3 é um serviço de armazenamento de objetos escalável, durável e de baixo custo."
        },
        {
            "id": 25,
            "pergunta": "Qual serviço AWS oferece armazenamento de arquivos para backup e arquivamento?",
            "alternativas": [
                "Amazon S3 Glacier",
                "Amazon S3",
                "Amazon EFS",
                "Amazon RDS"
            ],
            "respostaCorreta": 0,
            "comentario": "O Amazon S3 Glacier oferece armazenamento de baixo custo para backup e arquivamento de longo prazo."
        },
        {
            "id": 26,
            "pergunta": "O setor automotivo agora está desenvolvendo um Unmanned Ground Vehicle (UGV – Veículo terrestre não tripulado) específico para ser usado pelas forças armadas, que fornece alertas ao operador referentes a condições perigosas, perda de conexão ou danos ao veículo. Eles sabem que precisarão se alinhar às diretrizes 800-171 do National Institute of Standards and Technology (NIST) a respeito do nível de segurança do veículo para proteger sua localização a todo momento. O aplicativo usado por cada UGV será hospedado em sua própria nuvem privada virtual (VPC) e executado em uma sub-rede privada. Que tipo de conexão de rede deve ser usada para permitir que os aplicativos UGV compartilhem dados com segurança entre si?",
            "alternativas": [
                "Hosts dedicados",
                "AWS Direct Connect",
                "Internet gateway",
                "Peering de VPC"
            ],
            "respostaCorreta": 4,
            "comentario": "Peering de VPC permite comunicação privada entre VPCs, atendendo à necessidade de segurança entre os aplicativos UGV."
        },
        {
            "id": 27,
            "pergunta": "O setor automotivo agora está desenvolvendo um Unmanned Ground Vehicle (UGV – Veículo terrestre não tripulado) específico para ser usado pelas forças armadas, que fornece alertas ao operador referentes a condições perigosas, perda de conexão ou danos ao veículo. Eles sabem que precisarão se alinhar às diretrizes 800-171 do National Institute of Standards and Technology (NIST) a respeito do nível de segurança do veículo para proteger sua localização a todo momento. O aplicativo usado por cada UGV será hospedado em sua própria nuvem privada virtual (VPC) e executado em uma sub-rede privada. O operador informou que o aplicativo não consegue enviar tráfego de saída após manutenção recente no sistema do computador. Você já validou que o aplicativo tem permissões de acesso para transferência de dados. Qual etapa de solução de problemas deve ser considerada? Selecione duas respostas.",
            "alternativas": [
                "Confirmar se as listas de controle de acesso à rede (ACLs de rede) fornecem acesso aos protocolos IP e às portas de serviço.",
                "Determinar se a conexão direta com o endpoint está causando atrasos adicionais.",
                "Verificar se o par de chaves correto está sendo usado para criptografia e descriptografia de dados com Secure Sockets Layer (SSL).",
                "Revisar o log do Amazon CloudWatch para determinar se os locais de borda não estão mais armazenando os dados em cache.",
                "Validar as permissões do security group para as portas de serviço e os endereços IP de origem/destino."
            ],
            "respostaCorreta": [0, 4],
            "comentario": "Validar as ACLs e as permissões de segurança do grupo é essencial para garantir que o tráfego de saída esteja autorizado e os dados possam ser transferidos corretamente."
        },
        {
            "id": 28,
            "pergunta": "O setor automotivo agora está desenvolvendo um Unmanned Ground Vehicle (UGV – Veículo terrestre não tripulado) específico para ser usado pelas forças armadas, que fornece alertas ao operador referentes a condições perigosas, perda de conexão ou danos ao veículo. Eles sabem que precisarão se alinhar às diretrizes 800-171 do National Institute of Standards and Technology (NIST) a respeito do nível de segurança do veículo para proteger sua localização a todo momento. O aplicativo usado por cada UGV será hospedado em sua própria nuvem privada virtual (VPC) e executado em uma sub-rede privada. O operador deseja visualizar os logs produzidos pelo aplicativo no Amazon CloudWatch Logs. Que tipo de solução de conectividade deve ser usada para enviar os dados de log do aplicativo para o CloudWatch Logs sem passar pela internet?",
            "alternativas": [
                "Endpoint de VPC da interface",
                "AWS VPN CloudHub",
                "Gateway do endpoint de VPC",
                "Instância NAT"
            ],
            "respostaCorreta": 0,
            "comentario": "O Endpoint de VPC da interface permite que os logs sejam enviados de maneira privada e segura para o Amazon CloudWatch, sem transitar pela internet."
        },
        {
            "id": 29,
            "pergunta": "A empresa de energia local instalou recentemente uma nova rede elétrica na comunidade. A empresa está trabalhando com o governo local para adquirir financiamento para uma segunda rede de energia, mas precisa apresentar dados que mostrem as reduções de custos e como isso se traduz em maiores janelas de tempo de consumo. Esses dados devem ser mantidos por um período mínimo de 10 anos caso haja uma auditoria ou para consulta de uma entidade governamental. A empresa de energia deseja envolver a comunidade e obter apoio, pois o consumo de energia individual e comunitário é refletido nos dados. A empresa de energia determinou que acessará os dados no final de cada trimestre, mas o CEO quer ter a possibilidade de acessar esses dados a qualquer momento, sem esperar. Que solução de armazenamento ofereceria o melhor suporte a esse caso de uso?",
            "alternativas": [
                "Amazon Elastic Block Store (Amazon EBS)",
                "Amazon Glacier",
                "Amazon Simple Storage Service (Amazon S3)",
                "Amazon S3 STANDARD Infrequent Access (IA)",
                "Amazon S3 Reduced Redundancy Storage (Amazon S3-RRS)"
            ],
            "respostaCorreta": 3,
            "comentario": "Amazon S3 STANDARD Infrequent Access (IA) é uma solução ideal para dados acessados com baixa frequência, proporcionando durabilidade e escalabilidade, mas com um custo mais baixo para armazenamento de longo prazo."
        },
        {
            "id": 30,
            "pergunta": "A empresa de energia local instalou recentemente uma nova rede elétrica na comunidade. A empresa está trabalhando com o governo local para adquirir financiamento para uma segunda rede de energia, mas precisa apresentar dados que mostrem as reduções de custos e como isso se traduz em maiores janelas de tempo de consumo. Esses dados devem ser mantidos por um período mínimo de 10 anos caso haja uma auditoria ou para consulta de uma entidade governamental. A empresa de energia deseja envolver a comunidade e obter apoio, pois o consumo de energia individual e comunitário é refletido nos dados. O diretor financeiro da empresa perguntou por que há um aumento repentino no custo de usar o Amazon Simple Storage Service (Amazon S3). Outro departamento observou que há uma resposta de desaceleração HTTP 503 para quaisquer solicitações PUT ou DELETE. Qual pode ser o problema?",
            "alternativas": [
                "O Amazon EC2 Auto Scaling não foi ativado.",
                "A configuração de compartilhamento de recursos de origem cruzada (CORS) não foi ativada.",
                "Elastic Load Balancing (ELB) não foi ativado.",
                "O versionamento foi ativado."
            ],
            "respostaCorreta": 3,
            "comentario": "Quando o versionamento é ativado no Amazon S3, cada objeto armazenado tem múltiplas versões, o que pode aumentar os custos e causar desaceleração em operações PUT ou DELETE."
        },
        {
            "id": 31,
            "pergunta": "A empresa de energia local instalou recentemente uma nova rede elétrica na comunidade. A empresa está trabalhando com o governo local para adquirir financiamento para uma segunda rede de energia, mas precisa apresentar dados que mostrem as reduções de custos e como isso se traduz em maiores janelas de tempo de consumo. Esses dados devem ser mantidos por um período mínimo de 10 anos caso haja uma auditoria ou para consulta de uma entidade governamental. A empresa de energia deseja envolver a comunidade e obter apoio, pois o consumo de energia individual e comunitário é refletido nos dados. O AWS Storage Gateway encontrou uma falha, o que está fazendo com que as operações de leitura e gravação falhem. Após a inspeção, você determina que o disco de cache ainda está acessível e utilizável. Que passo deve ser dado para reconfigurar o gateway e retomar a funcionalidade rapidamente?",
            "alternativas": [
                "Criar um novo gateway.",
                "Excluir o disco do gateway.",
                "Montar os discos de cache em uma unidade efêmera.",
                "Reconectar o gateway.",
                "Encerrar o gateway."
            ],
            "respostaCorreta": 3,
            "comentario": "Reconectar o gateway irá restaurar a funcionalidade, aproveitando o disco de cache acessível e evitando a necessidade de criar ou excluir um gateway."
        },
        {
            "id": 32,
            "pergunta": "Um hospital local está se preparando para uma auditoria e precisa mostrar que está em conformidade com os requisitos da HIPAA. Isso inclui segurança, gerenciamento do ciclo de vida de dados e conformidade. No passado, eles enfrentaram problemas com um funcionário que tinha acessado os registros de pacientes que não eram relevantes para as suas tarefas de trabalho imediatas. A CEO do hospital quer garantir que a mitigação desse problema tenha sido resolvida e tenha feito com que a equipe de SysOps empregue vários serviços de monitoramento e segurança da AWS. O gerente de departamento do SysOps decidiu usar tags para classificar grupos de logs com o Amazon CloudWatch Logs. O diretor financeiro vê a marcação como um benefício adicional que os ajudará a obter uma visão detalhada dos custos em todo o hospital. Quais instruções descrevem uma restrição de tag? Selecione três respostas.",
            "alternativas": [
                "As chaves e os valores diferenciam maiúsculas de minúsculas em uma tag.",
                "O número máximo de tags por grupo é 20.",
                "As chaves de tag podem começar com aws.",
                "Comprimento da chave de tag entre 1 e 128 caracteres Unicode.",
                "Comprimento máximo do valor da tag de 256 caracteres Unicode."
            ],
            "respostaCorreta": [0, 3, 4],
            "comentario": "As chaves e valores de tags no AWS são sensíveis a maiúsculas/minúsculas, e o comprimento da chave e do valor segue os limites estabelecidos pela AWS."
        },
        {
            "id": 33,
            "pergunta": "Um hospital local está se preparando para uma auditoria e precisa mostrar que está em conformidade com os requisitos da HIPAA. Isso inclui segurança, gerenciamento do ciclo de vida de dados e conformidade. No passado, eles enfrentaram problemas com um funcionário que tinha acessado os registros de pacientes que não eram relevantes para as suas tarefas de trabalho imediatas. A CEO do hospital quer garantir que a mitigação desse problema tenha sido resolvida e tenha feito com que a equipe de SysOps empregue vários serviços de monitoramento e segurança da AWS. Um engenheiro de suporte está tentando recuperar arquivos de log do AWS CloudTrail. Qual extensão de arquivo está associada a esse tipo de arquivo de log?",
            "alternativas": [
                ".aws",
                ".gz",
                ".log",
                ".png"
            ],
            "respostaCorreta": 1,
            "comentario": "Os arquivos de log do AWS CloudTrail são compactados e possuem a extensão .gz."
        },
        {
            "id": 34,
            "pergunta": "Um hospital local está se preparando para uma auditoria e precisa mostrar que está em conformidade com os requisitos da HIPAA. Isso inclui segurança, gerenciamento do ciclo de vida de dados e conformidade. No passado, eles enfrentaram problemas com um funcionário que tinha acessado os registros de pacientes que não eram relevantes para as suas tarefas de trabalho imediatas. A CEO do hospital quer garantir que a mitigação desse problema tenha sido resolvida e tenha feito com que a equipe de SysOps empregue vários serviços de monitoramento e segurança da AWS. O engenheiro de suporte foi notificado de que o AWS Config não está agregando dados de uma organização dentro do hospital. Depois de uma investigação, foi constatado que o AWS Config não consegue acessar os detalhes da organização devido a uma função inválida do AWS Identity and Access Management (IAM). Quais etapas corretivas devem ser seguidas com base neste problema?",
            "alternativas": [
                "Ativar todos os recursos do AWS Organizations.",
                "Ativar o AWS Config na conta de origem.",
                "Integrar o AWS Config e o AWS Organizations por meio de uma interface de programação de aplicativo (API).",
                "Selecionar ou criar uma função do IAM válida.",
                "Aguardar o atraso da agregação de dados."
            ],
            "respostaCorreta": 3,
            "comentario": "A correção do problema envolve a criação ou seleção de uma função IAM válida que permita o acesso do AWS Config aos dados da organização."
        },
        {
            "id": 35,
            "pergunta": "Um hospital local está se preparando para uma auditoria e precisa mostrar que está em conformidade com os requisitos da HIPAA. Isso inclui segurança, gerenciamento do ciclo de vida de dados e conformidade. No passado, eles enfrentaram problemas com um funcionário que tinha acessado os registros de pacientes que não eram relevantes para as suas tarefas de trabalho imediatas. A CEO do hospital quer garantir que a mitigação desse problema tenha sido resolvida e tenha feito com que a equipe de SysOps empregue vários serviços de monitoramento e segurança da AWS. Uma engenheira de suporte está analisando as métricas do Amazon CloudWatch. Que métrica fornecerá a ela informações sobre o número de bytes gravados em todos os volumes de armazenamento de instância disponíveis para uma instância?",
            "alternativas": [
                "DiskReadBytes",
                "DiskWriteBytes",
                "DiskReadOps",
                "DiskWriteOps"
            ],
            "respostaCorreta": 1,
            "comentario": "A métrica DiskWriteBytes fornece informações sobre o número de bytes gravados em todos os volumes de armazenamento de uma instância."
        },
        {
            "id": 36,
            "pergunta": "Um hospital local está se preparando para uma auditoria e precisa mostrar que está em conformidade com os requisitos da HIPAA. Isso inclui segurança, gerenciamento do ciclo de vida de dados e conformidade. No passado, eles enfrentaram problemas com um funcionário que tinha acessado os registros de pacientes que não eram relevantes para as suas tarefas de trabalho imediatas. A CEO do hospital quer garantir que a mitigação desse problema tenha sido resolvida e tenha feito com que a equipe de SysOps empregue vários serviços de monitoramento e segurança da AWS. O engenheiro de suporte está considerando os limites flexíveis e rígidos da configuração atual e tentando determinar quais recursos podem ser modificados. Quais recursos têm limites flexíveis? Selecione duas respostas.",
            "alternativas": [
              "Actions (Ações)",
              "DescribeAlarms (DescreverAlarmes)",
              "ListMetrics (MétricasdeLista)",
              "Metric Data (Dados Métricos)",
              "Period (Período)"
            ],
            "respostaCorreta": [2, 3],
            "comentario": "Recursos como 'DescribeAlarms' e 'ListMetrics' têm limites flexíveis que podem ser ajustados, ao contrário de recursos com limites rígidos."
          },
          {
            "id": 37,
            "pergunta": "Um hospital local está se preparando para uma auditoria e precisa mostrar que está em conformidade com os requisitos da HIPAA. Isso inclui segurança, gerenciamento do ciclo de vida de dados e conformidade. No passado, eles enfrentaram problemas com um funcionário que tinha acessado os registros de pacientes que não eram relevantes para as suas tarefas de trabalho imediatas. A CEO do hospital quer garantir que a mitigação desse problema tenha sido resolvida e tenha feito com que a equipe de SysOps empregue vários serviços de monitoramento e segurança da AWS. Quais declarações descrevem as únicas responsabilidades de segurança do hospital (cliente) que podem ser apoiadas por evidências do monitoramento? Selecione três respostas.",
            "alternativas": [
              "Dados armazenados pelo cliente",
              "Hardware e software no nível do hipervisor ou abaixo",
              "Logins de rede",
              "Gerenciamento de patches no nível da infraestrutura",
              "Acesso a recursos"
            ],
            "respostaCorreta": [0, 2, 4],
            "comentario": "O cliente é responsável pela segurança dos dados armazenados, pelas credenciais de login e pelo controle de acesso aos recursos."
          },
          {
            "id": 38,
            "pergunta": "Uma organização sem fins lucrativos tem vários comitês que têm contas individuais. Eles buscam maneiras de reduzir custos, além de garantir que as despesas sejam melhor utilizadas em todos os comitês e descobriram que contas individuais não funcionam mais. Como recebem doações, eles querem garantir que possam fornecer detalhes de uso e de despesas aos doadores quando solicitado. A organização sem fins lucrativos usa o AWS Organizations para estabelecer controles de autenticação e acesso. O diretor financeiro foi configurado como um usuário do IAM com permissões completas no AWS Organizations. O diretor financeiro agora está tentando fazer uma solicitação ao AWS Organizations e continua recebendo uma mensagem de “acesso negado”. Ele ligou para você ajudá-lo a solucionar o problema. Quais etapas de solução de problemas devem ser consideradas? Selecione duas respostas.",
            "alternativas": [
              "Verificar se o diretor financeiro tem credenciais válidas.",
              "Certificar-se de que o período de espera adequado foi concluído e, em seguida, fazer com que o diretor financeiro repita a solicitação.",
              "Instruir o diretor financeiro a efetuar logout e iniciar sessão novamente utilizando credenciais de raiz para efetuar a solicitação.",
              "Validar se o diretor financeiro assinou corretamente sua solicitação.",
              "Verificar se o diretor financeiro tem as permissões para chamar a ação e o recurso solicitado."
            ],
            "respostaCorreta": [0, 4],
            "comentario": "Verifique se as credenciais do diretor financeiro são válidas e se ele tem as permissões apropriadas para realizar a ação no AWS Organizations."
          },
          {
            "id": 39,
            "pergunta": "Uma organização sem fins lucrativos tem vários comitês que têm contas individuais. Eles buscam maneiras de reduzir custos, além de garantir que as despesas sejam melhor utilizadas em todos os comitês e descobriram que contas individuais não funcionam mais. Como recebem doações, eles querem garantir que possam fornecer detalhes de uso e de despesas aos doadores quando solicitado. O especialista em suporte criou uma política do AWS Identity and Access Management (IAM) para um novo funcionário. Qual tag do IAM e chave de condição de tag associada devem ser aplicadas para controlar a capacidade do novo funcionário de concluir tarefas específicas com base em sua identidade?",
            "alternativas": [
              "aws:PrincipalTag/key-name",
              "aws:RequestTag/key-name",
              "aws:TagKeys",
              "iam:ResourceTag/key-name",
              "tagManager=true"
            ],
            "respostaCorreta": 0,
            "comentario": "A chave de condição de tag 'aws:PrincipalTag/key-name' pode ser usada para controlar permissões no IAM com base em tags associadas ao principal (usuário)."
          },
          {
            "id": 40,
            "pergunta": "Uma organização sem fins lucrativos tem vários comitês que têm contas individuais. Eles buscam maneiras de reduzir custos, além de garantir que as despesas sejam melhor utilizadas em todos os comitês e descobriram que contas individuais não funcionam mais. Como recebem doações, eles querem garantir que possam fornecer detalhes de uso e de despesas aos doadores quando solicitado. O diretor perguntou sobre o AWS Trusted Advisor. Qual declaração você fornece em relação ao seu propósito e função?",
            "alternativas": [
              "Um serviço de suporte ao cliente que fornece monitoramento e segurança de performance na nuvem.",
              "Um firewall que protege aplicativos web de ataques. Essa proteção é baseada em regras configuradas em condições definidas.",
              "Um serviço que permitirá que certificados SSL/TLS sejam provisionados, gerenciados e implantados com outros serviços da AWS baseados na nuvem.",
              "Um serviço que fornece avaliações de segurança automatizadas para, no fim das contas, melhorar a segurança e a conformidade de um aplicativo implantado na AWS.",
              "Um serviço de detecção de ameaças para contas e cargas de trabalho da AWS. Ele monitora continuamente comportamentos mal-intencionados ou não autorizados."
            ],
            "respostaCorreta": 0,
            "comentario": "O AWS Trusted Advisor é um serviço que fornece recomendações para melhorar a segurança, o desempenho e a eficiência de custos nos recursos da AWS."
          },
          {
            "id": 41,
            "pergunta": "Uma organização sem fins lucrativos tem vários comitês que têm contas individuais. Eles buscam maneiras de reduzir custos, além de garantir que as despesas sejam melhor utilizadas em todos os comitês e descobriram que contas individuais não funcionam mais. Como recebem doações, eles querem garantir que possam fornecer detalhes de uso e de despesas aos doadores quando solicitado. Qual política do AWS Identity and Access Management (IAM) é compatível com condições baseadas em tags?",
            "alternativas": [
              "Capacidade de alocar custos a um usuário.",
              "Limitar chamadas da interface de programação de aplicativos (API) do Amazon Elastic Compute Cloud (Amazon EC2) somente para ambientes de desenvolvimento.",
              "Organizar recursos por grupo.",
              "Executar scripts automatizados de início/parada somente durante o horário comercial."
            ],
            "respostaCorreta": 1,
            "comentario": "A política 'Limitar chamadas da interface de programação de aplicativos (API) do Amazon EC2 somente para ambientes de desenvolvimento' pode ser aplicada com base em tags para restringir o acesso."
          },
          {
            "id": 42,
            "pergunta": "Uma organização sem fins lucrativos tem vários comitês que têm contas individuais. Eles buscam maneiras de reduzir custos, além de garantir que as despesas sejam melhor utilizadas em todos os comitês e descobriram que contas individuais não funcionam mais. Como recebem doações, eles querem garantir que possam fornecer detalhes de uso e de despesas aos doadores quando solicitado. Seu gerente solicitou que você crie agrupamentos de tags relevantes para a empresa a fim de organizar recursos. A organização sem fins lucrativos quer garantir que os recursos estejam sendo usados da maneira mais econômica e segura. Quais tags seriam benéficas para automação? Selecione duas respostas.",
            "alternativas": [
              "Confidencialidade",
              "Centro de custo/unidade de negócios",
              "Data/hora",
              "Aceitação/recusa",
              "Version (Versão)"
            ],
            "respostaCorreta": [2, 3],
            "comentario": "Tags como 'Data/hora' e 'Aceitação/recusa' são úteis para monitoramento e automação, permitindo controle sobre os recursos baseados em tempo e decisões."
          },
          {
            "id": 43,
            "pergunta": "Uma empresa global de viagens anunciou uma reestruturação na empresa para reinvestir os lucros em tecnologia voltada para o cliente. O orçamento de TI foi realocado em 20% para o próximo ano; portanto, a equipe será forçada a fazer padronizações e eficiências com o novo orçamento até que a nova tecnologia gere lucros maiores. A empresa de viagens está planejando implantar um novo aplicativo. Qual é a melhor abordagem para garantir que a nova tecnologia gere o valor esperado para o negócio?",
            "alternativas": [
              "Desenvolver o aplicativo rapidamente para minimizar os custos de desenvolvimento.",
              "Alinhar os objetivos do aplicativo com as metas estratégicas da empresa e medir os resultados esperados.",
              "Investir em tecnologias emergentes sem considerar o impacto no cliente para inovar mais rapidamente.",
              "Reduzir o escopo do aplicativo para atender ao novo orçamento, mesmo que comprometa a experiência do usuário."
            ],
            "respostaCorreta": 1,
            "comentario": "A alternativa correta é alinhar os objetivos do aplicativo com as metas estratégicas da empresa e medir os resultados esperados. Como o orçamento está mais restrito e o objetivo é impulsionar o crescimento futuro, é fundamental garantir que cada investimento em tecnologia esteja diretamente conectado aos objetivos de negócio e agregue valor real. Desenvolver rapidamente ou reduzir o escopo sem considerar o impacto pode comprometer a qualidade e a satisfação do cliente, enquanto investir sem planejamento pode gerar desperdício de recursos."
          },          
          {
            "id": 44,
            "pergunta": "Uma empresa global de viagens anunciou uma reestruturação na empresa para reinvestir os lucros em tecnologia voltada para o cliente. O orçamento de TI foi realocado em 20% para o próximo ano; portanto, a equipe será forçada a fazer padronizações e eficiências com o novo orçamento até que a nova tecnologia gere lucros maiores. A empresa de viagens está planejando implantar um novo aplicativo para otimizar seus processos internos. Qual abordagem seria mais eficiente para a implantação do aplicativo?",
            "alternativas": [
              "Utilizar servidores dedicados para garantir maior controle e segurança.",
              "Adotar uma arquitetura sem servidor para reduzir custos com infraestrutura.",
              "Implantar o aplicativo em servidores físicos internos para aumentar o desempenho.",
              "Utilizar um modelo híbrido, combinando servidores físicos e em nuvem."
            ],
            "respostaCorreta": 1,
            "comentario": "Adotar uma arquitetura sem servidor (serverless) é uma opção eficiente para reduzir custos com infraestrutura e garantir escalabilidade."
          },
          {
            "id": 45,
            "pergunta": "A empresa está implementando uma estratégia de segurança para proteger dados sensíveis dos clientes. Eles desejam garantir que as chaves de acesso aos serviços da AWS sejam rotacionadas automaticamente a cada 90 dias. Qual serviço da AWS pode ajudar a atender a esse requisito de segurança?",
            "alternativas": [
              "AWS Identity and Access Management (IAM)",
              "AWS Key Management Service (KMS)",
              "Amazon CloudWatch",
              "AWS Systems Manager"
            ],
            "respostaCorreta": 1,
            "comentario": "O AWS Key Management Service (KMS) permite a rotação automática de chaves de acesso, ajudando a manter a segurança no gerenciamento de chaves criptográficas."
          },
          {
            "id": 46,
            "pergunta": "A equipe de segurança da empresa está procurando uma maneira de monitorar atividades suspeitas em sua infraestrutura AWS. Eles querem uma solução que forneça visibilidade contínua e alerta sobre possíveis ameaças sem sobrecarregar os administradores. Qual serviço da AWS é mais adequado para esse tipo de monitoramento?",
            "alternativas": [
              "AWS CloudTrail",
              "Amazon GuardDuty",
              "AWS WAF",
              "AWS Trusted Advisor"
            ],
            "respostaCorreta": 1,
            "comentario": "O Amazon GuardDuty oferece monitoramento contínuo de segurança, detectando ameaças e fornecendo alertas automáticos sem sobrecarregar os administradores."
          },
          {
            "id": 47,
            "pergunta": "A empresa está desenvolvendo uma aplicação que precisa armazenar grandes volumes de dados não estruturados, como imagens e vídeos. Qual serviço da AWS seria mais adequado para esse tipo de armazenamento?",
            "alternativas": [
              "Amazon RDS",
              "Amazon S3",
              "AWS Lambda",
              "Amazon EFS"
            ],
            "respostaCorreta": 1,
            "comentario": "O Amazon S3 é a melhor solução para armazenar grandes volumes de dados não estruturados, como imagens e vídeos, devido à sua escalabilidade e custo-benefício."
          },
          {
            "id": 48,
            "pergunta": "A empresa está usando instâncias do EC2 para rodar suas aplicações e deseja garantir que os dados armazenados nas instâncias sejam automaticamente criptografados. Qual serviço da AWS deve ser configurado para garantir isso?",
            "alternativas": [
              "Amazon S3",
              "AWS KMS",
              "Amazon EBS",
              "Amazon CloudWatch"
            ],
            "respostaCorreta": 2,
            "comentario": "O Amazon EBS permite a criptografia de volumes de armazenamento, garantindo que os dados em disco sejam automaticamente criptografados."
          },
          {
            "id": 49,
            "pergunta": "A empresa precisa garantir que suas aplicações possam escalar automaticamente com base na demanda. Qual serviço da AWS deve ser utilizado para atingir esse objetivo?",
            "alternativas": [
              "AWS Auto Scaling",
              "Amazon Route 53",
              "AWS CloudFormation",
              "AWS Elastic Beanstalk"
            ],
            "respostaCorreta": 0,
            "comentario": "O AWS Auto Scaling permite que as aplicações escalem automaticamente com base na demanda, garantindo alta disponibilidade e custo eficiente."
          },
          {
            "id": 50,
            "pergunta": "A empresa deseja implementar uma solução para gerenciar suas configurações e garantir que as instâncias da AWS sigam práticas recomendadas. Qual serviço da AWS seria mais adequado para esse gerenciamento?",
            "alternativas": [
              "AWS Config",
              "AWS Systems Manager",
              "AWS CloudFormation",
              "AWS Elastic Beanstalk"
            ],
            "respostaCorreta": 0,
            "comentario": "O AWS Config permite que a empresa monitore e gerencie as configurações de recursos da AWS, garantindo conformidade com práticas recomendadas."
          },
          {
            "id": 51,
            "pergunta": "A empresa está considerando a adoção de contêineres para suas aplicações. Eles precisam de uma solução para orquestrar e gerenciar os contêineres. Qual serviço da AWS seria mais adequado para esse propósito?",
            "alternativas": [
              "Amazon ECS",
              "Amazon EKS",
              "AWS Lambda",
              "Amazon S3"
            ],
            "respostaCorreta": 1,
            "comentario": "O Amazon EKS é uma solução de orquestração de contêineres gerenciada baseada no Kubernetes, ideal para gerenciar contêineres de forma escalável e eficiente."
          }
    ]
    
    res.json(questions);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
