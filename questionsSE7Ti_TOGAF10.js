const questions = [ 
    {
        "QUESTION_NUMBER": "1",
        "QUESTION_TEXT": "Qual é o propósito dos Princípios de Arquitetura segundo o TOGAF?",
        "POSSIBLE_ANSWERS": [
            "A. Guiar o desenvolvimento de soluções específicas para problemas técnicos.",
            "B. Prover uma base de referência para governança e tomadas de decisão.",
            "C. Fornecer uma lista detalhada de requisitos técnicos.",
            "D. Estabelecer uma metodologia de desenvolvimento de software."
        ],
        "EXPLANATION_TEXT": "Explicação: O propósito dos Princípios de Arquitetura é prover uma base de referência para guiar a tomada de decisões no nível corporativo e alinhar as iniciativas de TI com os objetivos estratégicos da organização. (KLP: G184 §4.3.3)",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "1",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "2",
        "QUESTION_TEXT": "De acordo com o TOGAF, qual elemento NÃO faz parte do template recomendado para Princípios de Arquitetura?",
        "POSSIBLE_ANSWERS": [
            "A. Nome do Princípio.",
            "B. Justificativa.",
            "C. Descrição do Cenário Atual.",
            "D. Implicações."
        ],
        "EXPLANATION_TEXT": "Explicação: O template recomendado para Princípios de Arquitetura inclui Nome, Declaração, Justificativa e Implicações. 'Descrição do Cenário Atual' não faz parte desse modelo. (KLP: {S2} §2.3)",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "2",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "3",
        "QUESTION_TEXT": "Qual das opções abaixo caracteriza um bom Princípio de Arquitetura segundo o TOGAF?",
        "POSSIBLE_ANSWERS": [
            "A. Curto, específico, e alinhado com os objetivos estratégicos.",
            "B. Abrangente, detalhado e focado em uma área técnica específica.",
            "C. Flexível, genérico e fácil de modificar ao longo do tempo.",
            "D. Baseado exclusivamente em preferências tecnológicas."
        ],
        "EXPLANATION_TEXT": "Explicação: Um bom Princípio de Arquitetura deve ser claro, específico, consistente com os objetivos estratégicos e capaz de orientar decisões arquiteturais eficazmente. (KLP: {S2} §2.4)",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "3",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "4",
        "QUESTION_TEXT": "Quais são as características essenciais de um bom Princípio de Arquitetura segundo o TOGAF?",
        "POSSIBLE_ANSWERS": [
            "A. Relevante, específico e com justificativa e implicações claras.",
            "B. Extensível, dependente de tecnologia e com foco em inovação.",
            "C. Flexível, alinhado a tendências e com múltiplos significados possíveis.",
            "D. Baseado em requisitos funcionais e em mudanças frequentes."
        ],
        "EXPLANATION_TEXT": "Explicação: Um bom Princípio de Arquitetura deve ser relevante para a organização, específico em sua aplicação, e fornecer justificativa e implicações claras para orientar decisões. (KLP: {S2} §2.4.1)",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "4",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "5",
        "QUESTION_TEXT": "Como o TOGAF recomenda descrever as Implicações em um Princípio de Arquitetura?",
        "POSSIBLE_ANSWERS": [
            "A. De forma genérica, aplicável a qualquer contexto.",
            "B. Detalhando os impactos operacionais, financeiros e técnicos.",
            "C. Focando apenas nos impactos positivos para os objetivos do projeto.",
            "D. Evitando especificar os impactos para facilitar a interpretação."
        ],
        "EXPLANATION_TEXT": "Explicação: O TOGAF recomenda que as Implicações sejam detalhadas, abordando como o princípio afetará os processos, custos e decisões futuras. (KLP: {S4} §4.2.4)",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "5",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "6",
        "QUESTION_TEXT": "Qual das opções abaixo corresponde corretamente a um elemento do template recomendado para Princípios de Arquitetura no TOGAF?",
        "POSSIBLE_ANSWERS": [
            "A. Nome, Declaração, Justificativa e Implicações.",
            "B. Declaração, Exemplos Práticos, Impactos Financeiros e Tecnológicos.",
            "C. Nome, Descrição Técnica, Justificativa e Conformidade.",
            "D. Nome, Lista de Projetos Relevantes, Justificativa e Resultados Esperados."
        ],
        "EXPLANATION_TEXT": "Explicação: O template recomendado para Princípios de Arquitetura no TOGAF inclui os seguintes elementos: Nome, Declaração, Justificativa e Implicações. Esses componentes asseguram que os princípios sejam claros, objetivos e aplicáveis. (KLP: {S2} §2.3)",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "6",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "7",
        "QUESTION_TEXT": "Ao criar um bom Princípio de Arquitetura, qual das características abaixo é ESSENCIAL, segundo o TOGAF?",
        "POSSIBLE_ANSWERS": [
            "A. Ser flexível para prover interpretações diferentes.",
            "B. Ser relevante, compreensível e consistente com os objetivos organizacionais.",
            "C. Apresentar alta complexidade técnica.",
            "D. Ser aplicável apenas a um projeto específico."
        ],
        "EXPLANATION_TEXT": "Explicação: Um bom Princípio de Arquitetura deve ser relevante para a organização, compreensível para os stakeholders e consistente com os objetivos estratégicos. Isso garante que ele sirva como uma diretriz eficaz. (KLP: {S2} §2.4.1)",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "7",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "8",
        "QUESTION_TEXT": "No template recomendado pelo TOGAF para Princípios de Arquitetura, o que deve ser descrito na seção 'Declaração'?",
        "POSSIBLE_ANSWERS": [
            "A. Uma justificativa detalhada para o princípio.",
            "B. A descrição breve e clara do princípio em uma única frase.",
            "C. Uma lista de implicações financeiras e técnicas.",
            "D. Um exemplo prático de aplicação do princípio."
        ],
        "EXPLANATION_TEXT": "Explicação: No template do TOGAF, a 'Declaração' deve descrever o Princípio de Arquitetura de forma breve e clara, geralmente em uma única frase, capturando sua essência e objetivo. (KLP: {S2} §2.3)",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "8",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "9",
        "QUESTION_TEXT": "Qual é o propósito da Avaliação de Prontidão para Transformação do Negócio no contexto do padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Identificar possíveis soluções técnicas para problemas de TI.",
            "B. Avaliar a capacidade da organização de planejar e implementar uma transformação estratégica.",
            "C. Propor um cronograma detalhado para a execução de projetos de transformação.",
            "D. Realizar auditorias financeiras para projetos estratégicos."
        ],
        "EXPLANATION_TEXT": "Explicação: O propósito da Avaliação de Prontidão para Transformação do Negócio é avaliar a capacidade da organização de planejar e implementar uma transformação estratégica, identificando os pontos fortes e lacunas que podem impactar o sucesso da transformação. (KLP: {S2} §8.1)",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "9",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "10",
        "QUESTION_TEXT": "Em qual fase do Ciclo ADM o padrão TOGAF® recomenda o uso da Avaliação de Prontidão para Transformação do Negócio?",
        "POSSIBLE_ANSWERS": [
            "A. Fase A (Visão da Arquitetura).",
            "B. Fase B (Arquitetura de Negócio).",
            "C. Fase E (Oportunidades e Soluções).",
            "D. Todas as fases do ADM."
        ],
        "EXPLANATION_TEXT": "Explicação: O padrão TOGAF® recomenda o uso da Avaliação de Prontidão para Transformação do Negócio na Fase A (Visão da Arquitetura) do ADM, pois é nesse estágio que são avaliadas as capacidades organizacionais para suportar a transformação proposta. (KLP: {S2} §8.1)",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "10",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "11",
        "QUESTION_TEXT": "Qual dos seguintes fatores é avaliado em uma Avaliação de Prontidão para Transformação do Negócio segundo o padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Estrutura da equipe de TI.",
            "B. Maturidade da governança organizacional.",
            "C. Inventário completo de aplicativos legados.",
            "D. Soluções específicas de fornecedores."
        ],
        "EXPLANATION_TEXT": "Explicação: A Avaliação de Prontidão para Transformação do Negócio avalia fatores como maturidade da governança organizacional, cultura, capacidades e outros elementos que podem influenciar a transformação. (KLP: {S2} §8.1)",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "11",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "12",
        "QUESTION_TEXT": "O que é mais importante ao conduzir uma Avaliação de Prontidão para Transformação do Negócio, de acordo com o padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Assegurar a precisão dos dados técnicos coletados.",
            "B. Garantir o alinhamento dos stakeholders em relação à capacidade organizacional de transformação.",
            "C. Avaliar a conformidade com as normas técnicas do setor.",
            "D. Criar um modelo financeiro detalhado para apoiar os investimentos."
        ],
        "EXPLANATION_TEXT": "Explicação: O alinhamento dos stakeholders em relação às capacidades organizacionais é crucial para assegurar que todos compreendam e apoiem os desafios e os recursos necessários para a transformação. (KLP: {S2} §8.1)",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "12",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "13",
        "QUESTION_TEXT": "Segundo o padrão TOGAF®, qual é o benefício principal de realizar uma Avaliação de Prontidão para Transformação do Negócio?",
        "POSSIBLE_ANSWERS": [
            "A. Reduzir os custos operacionais de curto prazo.",
            "B. Identificar e mitigar os riscos que podem impactar a transformação.",
            "C. Fornecer detalhes técnicos para integração de sistemas.",
            "D. Proporcionar uma lista de fornecedores confiáveis."
        ],
        "EXPLANATION_TEXT": "Explicação: O principal benefício de realizar essa avaliação é identificar e mitigar riscos que podem impactar a transformação, aumentando a probabilidade de sucesso da iniciativa estratégica. (KLP: {S2} §8.1)",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "13",
        "Probability": 1
    },
{
    "QUESTION_NUMBER": "14",
    "QUESTION_TEXT": "De acordo com o padrão TOGAF®, como é definido o termo 'Parte Interessada' (Stakeholder)?",
    "POSSIBLE_ANSWERS": [
        "A. Uma pessoa ou grupo com interesse direto nos objetivos e resultados de uma organização.",
        "B. Uma pessoa que é diretamente responsável por executar tarefas de arquitetura.",
        "C. Qualquer membro da equipe de TI.",
        "D. Um fornecedor externo envolvido no desenvolvimento de sistemas."
    ],
    "EXPLANATION_TEXT": "Explicação: No padrão TOGAF®, uma 'Parte Interessada' é definida como qualquer pessoa ou grupo que tenha interesse nos objetivos e resultados de uma organização e que possa influenciar ou ser influenciada pela arquitetura corporativa. (KLP: {S0} §4.75)",
    "CORRECT_ANSWER": "A",
    "JSONINDEX": "14",
    "Probability": 1
},

    {
        "QUESTION_NUMBER": "15",
        "QUESTION_TEXT": "Qual é o principal objetivo da Análise de Diferenças segundo o Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Identificar riscos e oportunidades ao comparar arquiteturas linha de base e alvo.",
            "B. Criar o modelo de arquitetura detalhada para a organização.",
            "C. Definir os princípios arquiteturais para governança corporativa.",
            "D. Desenvolver o roadmap de transição das arquiteturas."
        ],
        "EXPLANATION_TEXT": "Explicação: O principal objetivo da Análise de Diferenças é identificar lacunas, riscos e oportunidades ao comparar o estado linha de base e alvo da arquitetura, ajudando a planejar mudanças organizacionais. (KLP: {S2} §5.1)",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "15",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "16",
        "QUESTION_TEXT": "Na Análise de Diferenças descrita no Padrão TOGAF®, qual aspecto é crucial para determinar os impactos das mudanças planejadas?",
        "POSSIBLE_ANSWERS": [
            "A. Identificar os requisitos de segurança da arquitetura.",
            "B. Comparar os componentes de arquitetura existentes com os planejados.",
            "C. Determinar a capacidade técnica da organização.",
            "D. Analisar os benefícios de curto prazo das iniciativas arquiteturais."
        ],
        "EXPLANATION_TEXT": "Explicação: Um dos aspectos centrais da Análise de Diferenças é a comparação entre os componentes das arquiteturas linha de base e futura, permitindo avaliar os impactos no contexto organizacional. (KLP: G186 §15.2.3)",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "16",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "17",
        "QUESTION_TEXT": "De acordo com o Padrão TOGAF®, como a Análise de Diferenças apoia o desenvolvimento do Roadmap de Implementação?",
        "POSSIBLE_ANSWERS": [
            "A. Identificando as lacunas que precisam ser preenchidas antes do desenvolvimento das soluções.",
            "B. Determinando os critérios de aceitação para novos sistemas.",
            "C. Estabelecendo diretrizes para os ciclos iterativos do ADM.",
            "D. Mapeando as prioridades organizacionais no momento atual."
        ],
        "EXPLANATION_TEXT": "Explicação: A Análise de Diferenças apoia o desenvolvimento do Roadmap de Implementação ao identificar as diferenças que precisam ser preenchidas, ajudando a priorizar as iniciativas para alcançar a arquitetura alvo. (KLP: {S2} §5.1)",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "17",
        "Probability": 1
    },

    {
	"QUESTION_NUMBER": "18",
	"QUESTION_TEXT": "Como o Padrão TOGAF® define interoperabilidade em uma Arquitetura Corporativa?",
	"POSSIBLE_ANSWERS": [
		"A. A capacidade de uma organização adaptar-se rapidamente às mudanças tecnológicas.",
		"B. A habilidade de diferentes sistemas e organizações trabalharem juntos de maneira eficiente e efetiva.",
		"C. Um conjunto de regras que determinam como as aplicações devem ser desenvolvidas.",
		"D. A implementação de um único padrão tecnológico em toda a organização."
	],
	"EXPLANATION_TEXT": "Explicação: O Padrão TOGAF® define interoperabilidade como a capacidade de diferentes sistemas ou organizações trabalharem juntos de forma eficiente e efetiva, garantindo que a troca de informações e processos aconteça de maneira adequada. (KLP: {S0} §3.9)",
	"CORRECT_ANSWER": "B",
	"JSONINDEX": "18",
	"Probability": 1
    },

    {
	"QUESTION_NUMBER": "19",
	"QUESTION_TEXT": "Quais são os principais aspectos da interoperabilidade mencionados no Padrão TOGAF®?",
	"POSSIBLE_ANSWERS": [
        	"A. Interoperabilidade operacional, interoperabilidade de informações e interoperabilidade técnica.",
	        "B. Exclusão de tecnologias legadas, padronização completa e utilização de um único fornecedor de software.",
	        "C. Adoção obrigatória de arquiteturas orientadas a serviços (SOA) e microsserviços.",
        	"D. Implementação de um banco de dados único para toda a organização."
    ],
	"EXPLANATION_TEXT": "Explicação: O Padrão TOGAF® descreve a interoperabilidade organizacional como um dos aspectos essenciais da interoperabilidade, pois envolve a coordenação de processos, políticas e modelos de negócio entre diferentes organizações para garantir um funcionamento harmonioso.(KLP: {S0} §3.9)",
	"CORRECT_ANSWER": "A",
	"JSONINDEX": "19",
	"Probability": 1
    },

    {
	"QUESTION_NUMBER": "20",
	"QUESTION_TEXT": "Qual é um dos principais desafios da interoperabilidade conforme descrito no Padrão TOGAF®?",
	"POSSIBLE_ANSWERS": [
        	"A. Garantir que a interoperabilidade ocorra apenas no nível de infraestrutura tecnológica.",
	        "B. Evitar a padronização, permitindo que cada unidade de negócio utilize sua própria tecnologia.",
        	"C. Eliminar completamente os sistemas legados independentemente do impacto operacional.",
	        "D. Alinhar os diferentes domínios de arquitetura, garantindo que dados, aplicações e processos funcionem de forma integrada."
	],
	"EXPLANATION_TEXT": "Explicação: Um dos desafios principais da interoperabilidade é alinhar os diferentes domínios de arquitetura, garantindo integração adequada entre dados, aplicações e processos.(KLP: {S0} §3.9)",
	"CORRECT_ANSWER": "D",
	"JSONINDEX": "20",
	"Probability": 1
    },

    {
        "QUESTION_NUMBER": "21",
        "QUESTION_TEXT": "Por que o Padrão TOGAF® é considerado adequado como framework para Arquitetura Corporativa?",
        "POSSIBLE_ANSWERS": [
            "A. Porque define estruturas rígidas para implementar sistemas de TI em ambientes específicos.",
            "B. Porque provê um repositório centralizado de todas as soluções de TI de mercado.",
            "C. Porque oferece um método comprovado e flexível para desenvolver e gerenciar arquiteturas corporativas.",
            "D. Porque é obrigatório para todos os projetos de transformação digital em organizações públicas."
        ],
        "EXPLANATION_TEXT": "Explicação: O Padrão TOGAF® é amplamente utilizado como framework de Arquitetura Corporativa porque provê um método confiável, testado e flexível que pode ser adaptado a diferentes contextos organizacionais. (KLP: S0 §1.1 | 1.4)",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "21",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "22",
        "QUESTION_TEXT": "Qual das alternativas melhor descreve uma vantagem da adoção do Padrão TOGAF® por uma organização?",
        "POSSIBLE_ANSWERS": [
            "A. Impede que mudanças nos negócios sejam feitas sem aprovação prévia da TI.",
            "B. Elimina a necessidade de ferramentas e técnicas adicionais na prática de arquitetura.",
            "C. Fornece uma linguagem comum e estrutura para conduzir iniciativas de Arquitetura Corporativa.",
            "D. Substitui todos os modelos de processo existentes por um único modelo padronizado."
        ],
        "EXPLANATION_TEXT": "Explicação: Um dos principais benefícios do Padrão TOGAF® é oferecer uma linguagem comum e uma estrutura para melhorar a colaboração e a coerência na condução das práticas de Arquitetura Corporativa. (KLP: S0 §1.1 | 1.4)",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "22",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "23",
        "QUESTION_TEXT": "Em relação ao papel do Padrão TOGAF® nas práticas de Arquitetura Corporativa, é correto afirmar que:",
        "POSSIBLE_ANSWERS": [
            "A. Ele substitui completamente a necessidade de governança organizacional.",
            "B. Ele é projetado para ser seguido rigidamente, sem adaptações.",
            "C. Ele serve como um ponto de partida, podendo ser ajustado conforme as necessidades da organização.",
            "D. Ele é específico para ambientes de TI e não deve ser aplicado em domínios de negócio."
        ],
        "EXPLANATION_TEXT": "Explicação: O Padrão TOGAF® não é prescritivo. Ele fornece diretrizes e métodos que podem (e devem) ser ajustados para atender à realidade de cada organização. (KLP: S0 §1.1 | 1.4)",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "24",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "24",
        "QUESTION_TEXT": "Como o Ciclo ADM (Método de Desenvolvimento da Arquitetura) se relaciona com as Diretrizes e Técnicas de Apoio, segundo o Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. O ADM é uma alternativa ao uso das Diretrizes e Técnicas de Apoio.",
            "B. As Diretrizes e Técnicas de Apoio substituem o ADM em contextos específicos.",
            "C. O ADM é apoiado pelas Diretrizes e Técnicas de Apoio que ajudam o arquiteto a executá-lo seguindo as necessidades da organização.",
            "D. As Diretrizes e Técnicas de Apoio são aplicadas apenas após a conclusão do ADM."
        ],
        "EXPLANATION_TEXT": "Explicação: Segundo o Padrão TOGAF®, o ADM é apoiado por Diretrizes e Técnicas que ajudam o arquiteto a executar o método adaptando-o às necessidades específicas da organização. Elas não substituem o ADM, mas o complementam. (KLP: {S1} §1.1.3)",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "24",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "25",
        "QUESTION_TEXT": "Onde está localizada a orientação sobre como aplicar o Padrão TOGAF® de maneira prática?",
        "POSSIBLE_ANSWERS": [
            "A. No TOGAF Fundamental Content, que contém os conceitos essenciais.",
            "B. No TOGAF Series Guides, que oferece orientação prática para diferentes contextos.",
            "C. Na TOGAF Library, que apresenta diretrizes, modelos, padrões e outras formas de material de referência para acelerar a criação de novas arquiteturas para a empresa.",
            "D. Em documentos acadêmicos externos que comentam o Padrão TOGAF®."
        ],
        "EXPLANATION_TEXT": "Explicação: A orientação prática sobre como aplicar o Padrão TOGAF® está nos TOGAF Series Guides, que fazem parte do conjunto de documentos oficiais do Padrão TOGAF®. Eles complementam o TOGAF Fundamental Content (conteúdo essencial) com exemplos, práticas específicas, variações por setor, entre outros. (KLP: {S0} §2.2)",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "25",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "26",
        "QUESTION_TEXT": "Qual é a estrutura de documentação do Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Um conjunto modular de documentos, permitindo aplicação seletiva conforme o contexto.",
            "B. Um único documento contendo todos os conceitos e práticas.",
            "C. Um repositório online com informações sobre técnicas e ferramentas.",
            "D. Uma série de normas técnicas obrigatórias para todas as empresas que escolhem adotar o padrão."
        ],
        "EXPLANATION_TEXT": "Explicação: O Padrão TOGAF® é apresentado como um conjunto modular de documentos, permitindo que diferentes componentes sejam utilizados de forma independente ou combinada, conforme necessário, para apoiar práticas específicas de arquitetura corporativa. (KLP: {S0} §2.2)",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "26",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "27",
        "QUESTION_TEXT": "Segundo o Padrão TOGAF®, qual é um dos principais benefícios de sua organização em diversos documentos?",
        "POSSIBLE_ANSWERS": [
            "A. Evitar a centralização de todo o conteúdo em um único volume que facilitaria a leitura linear.",
            "B. Restringir o uso do padrão a organizações com maturidade avançada.",
            "C. Eliminar a necessidade de personalização do conteúdo para diferentes contextos.",
            "D. Permitir que diferentes assuntos e questões sejam tratados de forma modular e adaptável."
        ],
        "EXPLANATION_TEXT": "Explicação: A separação do Padrão TOGAF® em documentos como o TOGAF Fundamental Content, TOGAF Series Guides e TOGAF Library permite abordar diferentes assuntos em profundidade, tratar questões de forma isolada e possibilita que organizações adotem o padrão de maneira gradual e adaptada à sua realidade, inclusive implementando partes específicas conforme necessário. (KLP: {S0} §2.2)",
        "CORRECT_ANSWER": "D",
        "JSONINDEX": "27",
        "Probability": 1
    },

    {
        "QUESTION_NUMBER": "28",
        "QUESTION_TEXT": "O que é realizado na Fase Preliminar do ADM, segundo o Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. A execução dos projetos-piloto de arquitetura corporativa.",
            "B. A criação de visões com catálogos e matrizes para uso no ciclo ADM.",
            "C. A preparação da capacidade de arquitetura, incluindo a customização do framework e definição de princípios.",
            "D. O detalhamento das arquiteturas-alvo de negócio, dados, aplicações e tecnologia."
        ],
        "EXPLANATION_TEXT": "Explicação: A fase preliminar descreve as atividades de preparação e iniciação necessárias para estabelecer uma Capacidade de Arquitetura, incluindo a customização do Padrão TOGAF® e a definição de Princípios de Arquitetura. (KLP: {S0} §3.4)",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "28",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "29",
        "QUESTION_TEXT": "De acordo com o Padrão TOGAF®, qual é o papel da fase preliminar em relação às fases cíclicas do ADM?",
        "POSSIBLE_ANSWERS": [
            "A. Estabelecer uma base metodológica antes do início do ciclo contínuo.",
            "B. Definir a arquitetura alvo antes das fases de execução.",
            "C. Fornecer informações operacionais para cada fase do ciclo.",
            "D. Consolidar os entregáveis finais do ciclo ADM."
        ],
        "EXPLANATION_TEXT": "Explicação: A fase preliminar prepara o ambiente organizacional, metodológico e de governança antes do início do ciclo contínuo do ADM. Ela está posicionada fora do ciclo justamente por esse papel introdutório. (KLP: {S0} §3.4)",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "29",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "30",
        "QUESTION_TEXT": "Em que momento a fase preliminar deve ser revisitada dentro do ciclo do ADM?",
        "POSSIBLE_ANSWERS": [
            "A. Sempre que uma nova demanda de arquitetura surgir.",
            "B. Apenas quando houver mudança estratégica significativa ou necessidade de atualização na capacidade de Arquitetura Corporativa.",
            "C. No início de cada fase do ciclo.",
            "D. Durante a transição entre a fase B e C."
        ],
        "EXPLANATION_TEXT": "Explicação: A fase preliminar não é revisitada a cada nova demanda, mas pode ser reavaliada caso haja mudanças estruturais, estratégicas ou necessidade de atualização da prática de arquitetura. (KLP: {S0} §3.4)",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "30",
        "Probability": 1
    },
   {
        "QUESTION_NUMBER": "31",
        "QUESTION_TEXT": "Qual é o objetivo principal da Fase A do ADM, segundo o Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Executar a transição da arquitetura atual para a futura.",
            "B. Detalhar todos os modelos arquiteturais para o ciclo completo.",
            "C. Definir o escopo, os stakeholders e a Visão da Arquitetura.",
            "D. Validar a solução proposta com testes técnicos e funcionais."
        ],
        "EXPLANATION_TEXT": "Explicação: A Fase A tem como foco a definição do escopo da iniciativa de arquitetura, identificação dos stakeholders, criação da Visão da Arquitetura e obtenção da aprovação para seguir com o desenvolvimento. (KLP: {S0} §3.4)",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "31",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "32",
        "QUESTION_TEXT": "Qual das atividades abaixo NÃO faz parte da Fase A no Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Criação da Visão da Arquitetura.",
            "B. Obtenção de aprovação para prosseguir com o desenvolvimento da arquitetura.",
            "C. Identificação dos stakeholders relevantes.",
            "D. Implementação das soluções propostas."
        ],
        "EXPLANATION_TEXT": "Explicação: A implementação das soluções ocorre após as fases de planejamento. A Fase A está focada em definir a proposta em alto nível, com base em necessidades do negócio, e obter o alinhamento necessário para seguir com o desenvolvimento da arquitetura. (KLP: {S0} §3.4)",
        "CORRECT_ANSWER": "D",
        "JSONINDEX": "32",
        "Probability": 1
    },
   {
        "QUESTION_NUMBER": "33",
        "QUESTION_TEXT": "Qual é o principal objetivo da Fase B do ADM, segundo o Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Desenvolver a Arquitetura de Negócio para apoiar a Visão da Arquitetura acordada.",
            "B. Planejar a implementação de projetos de tecnologia.",
            "C. Avaliar a viabilidade técnica da arquitetura-alvo.",
            "D. Consolidar os artefatos para as fases posteriores."
        ],
        "EXPLANATION_TEXT": "Explicação: A Fase B do ADM descreve o desenvolvimento da Arquitetura de Negócio com o objetivo de apoiar a Visão da Arquitetura acordada. (KLP: {S0} §3.4)",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "33",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "34",
        "QUESTION_TEXT": "Qual das alternativas apresenta corretamente a associação entre fases do ADM e seus respectivos domínios, segundo o Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Fase B – Infraestrutura, Fase C – Processos, Fase D – Sistemas de Informação",
            "B. Fase B – Negócio, Fase C – Sistemas de Informação, Fase D – Tecnologia",
            "C. Fase B – Sistemas de Informação, Fase C – Estratégia, Fase D – Governança",
            "D. Fase B – Negócio, Fase C – Aplicativos, Fase D – Tecnologia"
        ],
        "EXPLANATION_TEXT": "Explicação: A associação correta entre as fases e seus domínios é: Fase B – Negócio, Fase C – Sistemas de Informação (dados e aplicativos), Fase D – Tecnologia. (KLP: {S0} §3.4)",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "34",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "35",
        "QUESTION_TEXT": "O que é desenvolvido nas Fases B, C e D do ADM, segundo o Padrão TOGAF?",
        "POSSIBLE_ANSWERS": [
            "A. A definição da Visão da Arquitetura e dos stakeholders envolvidos.",
            "B. A criação de planos de implementação detalhados e cronogramas.",
            "C. A elaboração das arquiteturas linha de base e alvo para os respectivos domínios.",
            "D. A avaliação de riscos técnicos e planejamento de mitigação."
        ],
        "EXPLANATION_TEXT": "Explicação: Durante as Fases B (Arquitetura de Negócio), C (Arquiteturas de Sistemas de Informação) e D (Arquitetura de Tecnologia), são desenvolvidas as arquiteturas linha de base (estado atual) e alvo (estado futuro) para cada domínio. Essa atividade é fundamental para realizar a análise de diferenças (gap analysis), que orienta os próximos passos do ADM. (KLP: {S0} §3.4)",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "35",
        "Probability": 1
    },
{
    "QUESTION_NUMBER": "36",
    "QUESTION_TEXT": "Qual fase do ADM trata da criação de um plano detalhado para mover da arquitetura linha de base para a arquitetura alvo, segundo o Padrão TOGAF®?",
    "POSSIBLE_ANSWERS": [
        "A. Fase D",
        "B. Fase E",
        "C. Fase F",
        "D. Fase G"
    ],
    "EXPLANATION_TEXT": "Explicação: A Fase F do ADM trata do planejamento de migração, ou seja, detalha como a organização vai sair da arquitetura atual (linha de base) para alcançar a arquitetura futura (alvo), por meio de um plano estruturado. (KLP: {S0} §3.4)",
    "CORRECT_ANSWER": "C",
    "JSONINDEX": "36",
    "Probability": 1
},
{
    "QUESTION_NUMBER": "37",
    "QUESTION_TEXT": "Qual é o foco principal da Fase E do ADM, segundo o Padrão TOGAF®?",
    "POSSIBLE_ANSWERS": [
        "A. Criar os modelos detalhados da arquitetura-alvo.",
        "B. Conduzir o planejamento inicial da implementação e identificar os pacotes de trabalho.",
        "C. Elaborar o roteiro de governança para a arquitetura.",
        "D. Validar a arquitetura com os stakeholders e ajustar os requisitos."
    ],
    "EXPLANATION_TEXT": "Explicação: A Fase E do ADM é responsável por conduzir o planejamento inicial da implementação e identificar os pacotes de trabalho mais adequados para viabilizar a arquitetura definida nas fases anteriores. (KLP: {S0} §3.4)",
    "CORRECT_ANSWER": "B",
    "JSONINDEX": "37",
    "Probability": 1
},
{
    "QUESTION_NUMBER": "38",
    "QUESTION_TEXT": "Qual é a principal finalidade da Fase F do ADM, segundo o Padrão TOGAF®?",
    "POSSIBLE_ANSWERS": [
        "A. Monitorar a execução do portfólio de projetos.",
        "B. Detalhar o plano de implementação e migração da arquitetura.",
        "C. Validar os requisitos de arquitetura com a área de negócios.",
        "D. Construir o repositório de arquitetura corporativa."
    ],
    "EXPLANATION_TEXT": "Explicação: A Fase F trata do planejamento de migração, isto é, como sair da arquitetura linha de base e alcançar a arquitetura alvo por meio de um plano de implementação e migração detalhado. (KLP: {S0} §3.4)",
    "CORRECT_ANSWER": "B",
    "JSONINDEX": "38",
    "Probability": 1
},
{
    "QUESTION_NUMBER": "39",
    "QUESTION_TEXT": "Quais fases do ADM são responsáveis por converter a arquitetura alvo planejada em ações concretas para a futura implementação, segundo o Padrão TOGAF®?",
    "POSSIBLE_ANSWERS": [
        "A. Fases A e G",
        "B. Fases D e H",
        "C. Fases E e F",
        "D. Fases B e C"
    ],
    "EXPLANATION_TEXT": "Explicação: As Fases E (Oportunidades e Soluções) e F (Planejamento da Migração) são voltadas à transição entre o planejamento arquitetural e a execução. Elas identificam as soluções possíveis e organizam a sequência de implementação para atingir a arquitetura alvo. (KLP: {S0} §3.4)",
    "CORRECT_ANSWER": "C",
    "JSONINDEX": "39",
    "Probability": 1
},
{
    "QUESTION_NUMBER": "40",
    "QUESTION_TEXT": "Qual das atividades está mais associada à Fase E do ADM, segundo o Padrão TOGAF®?",
    "POSSIBLE_ANSWERS": [
        "A. Identificar pacotes de trabalho e possíveis soluções de entrega",
        "B. Detalhar os componentes técnicos da solução.",
        "C. Criar um modelo de dados completo para a arquitetura-alvo.",
        "D. Avaliar a viabilidade de migração dos sistemas legados."
    ],
    "EXPLANATION_TEXT": "Explicação: A Fase E (Oportunidades e Soluções) é responsável por iniciar o planejamento da implementação, identificando pacotes de trabalho para concretizar a arquitetura definida nas fases anteriores. (KLP: {S0} §3.4)",
    "CORRECT_ANSWER": "A",
    "JSONINDEX": "40",
    "Probability": 1
},
  {
    "QUESTION_NUMBER": "41",
    "QUESTION_TEXT": "Qual é o foco principal da Fase G do ADM, segundo o Padrão TOGAF®?",
    "POSSIBLE_ANSWERS": [
      "A. Construir os componentes da arquitetura técnica.",
      "B. Acompanhar a implementação para garantir conformidade com a arquitetura.",
      "C. Detalhar os pacotes de trabalho da solução.",
      "D. Planejar a migração para a arquitetura-alvo."
    ],
    "EXPLANATION_TEXT": "Explicação: A Fase G do ADM (Implementation Governance) é responsável por fornecer supervisão arquitetural durante a implementação, garantindo que ela esteja em conformidade com a arquitetura aprovada. (KLP: {S0} §3.4)",
    "CORRECT_ANSWER": "B",
    "JSONINDEX": "41",
    "Probability": 1
  },
  {
    "QUESTION_NUMBER": "42",
    "QUESTION_TEXT": "Durante qual fase do ADM o arquiteto corporativo exerce supervisão para assegurar que a solução seja implementada conforme o planejado?",
    "POSSIBLE_ANSWERS": [
      "A. Fase D",
      "B. Fase E",
      "C. Fase F",
      "D. Fase G"
    ],
    "EXPLANATION_TEXT": "Explicação: A Fase G é a etapa do ADM em que ocorre a governança da implementação, com o arquiteto acompanhando a execução para assegurar que ela siga os direcionamentos definidos anteriormente. (KLP: {S0} §3.4)",
    "CORRECT_ANSWER": "D",
    "JSONINDEX": "42",
    "Probability": 1
  },
  {
    "QUESTION_NUMBER": "43",
    "QUESTION_TEXT": "De acordo com o Padrão TOGAF®, o que a Fase G busca garantir ao longo do processo de implementação?",
    "POSSIBLE_ANSWERS": [
      "A. Que as entregas estejam tecnicamente viáveis.",
      "B. Que a execução ocorra com aderência à arquitetura aprovada.",
      "C. Que os cronogramas sejam revisados continuamente.",
      "D. Que as mudanças organizacionais sejam evitadas."
    ],
    "EXPLANATION_TEXT": "Explicação: A principal finalidade da Fase G é garantir que a implementação dos sistemas e soluções ocorra de forma alinhada à arquitetura definida e aprovada nas fases anteriores. (KLP: {S0} §3.4)",
    "CORRECT_ANSWER": "B",
    "JSONINDEX": "43",
    "Probability": 1
  },
   {
        "QUESTION_NUMBER": "44",
        "QUESTION_TEXT": "Qual é o objetivo principal da Fase H do ADM, segundo o Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Estabelecer procedimentos para gerenciar mudanças na arquitetura implantada.",
            "B. Validar os requisitos de negócio com os stakeholders.",
            "C. Desenvolver a arquitetura de dados e aplicativos.",
            "D. Elaborar os modelos de arquitetura para os domínios corporativos."
        ],
        "EXPLANATION_TEXT": "Explicação: A Fase H - Gerenciamento da Mudança na Arquitetura do ADM estabelece os procedimentos para gerenciar mudanças na nova arquitetura após sua implantação. (KLP: {S0} §3.4)",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "44",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "45",
        "QUESTION_TEXT": "O que a fase de Gerenciamento de Requisitos busca garantir no ciclo do ADM, segundo o Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. A documentação de requisitos apenas nas fases iniciais.",
            "B. A realização de auditorias ao final de cada fase.",
            "C. A integração entre projetos de software e infraestrutura.",
            "D. A operação contínua do processo de gestão de requisitos de arquitetura ao longo do ADM."
        ],
        "EXPLANATION_TEXT": "Explicação: A Fase Gerenciamento de Requisitos opera o processo de gestão de requisitos ao longo de todo o ADM, garantindo alinhamento contínuo entre as fases e as necessidades da organização. (KLP: {S0} §3.4)",
        "CORRECT_ANSWER": "D",
        "JSONINDEX": "45",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "46",
        "QUESTION_TEXT": "Durante qual fase do ADM se estabelecem os procedimentos para adaptar a arquitetura já implantada?",
        "POSSIBLE_ANSWERS": [
            "A. Fase A",
            "B. Fase C",
            "C. Fase G",
            "D. Fase H"
        ],
        "EXPLANATION_TEXT": "Explicação: A Fase H trata do Gerenciamento de Mudanças na Arquitetura, ou seja, da adaptação da arquitetura implantada diante de novas necessidades. (KLP: {S0} §3.4)",
        "CORRECT_ANSWER": "D",
        "JSONINDEX": "46",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "47",
        "QUESTION_TEXT": "Em qual ponto do ciclo ADM atua o Gerenciamento de Requisitos, segundo o Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Ao longo de todo o ciclo do ADM",
            "B. Após a entrega da arquitetura final",
            "C. Apenas nas fases de desenvolvimento de soluções",
            "D. Exclusivamente na Fase A"
        ],
        "EXPLANATION_TEXT": "Explicação: A Fase Gerenciamento de Requisitos atua ao longo de todo o ADM, permitindo o acompanhamento e atualização contínua dos requisitos de arquitetura. (KLP: {S0} §3.4)",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "47",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "48",
        "QUESTION_TEXT": "Qual das afirmações representa corretamente o papel da Fase H no ADM do Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Responsável por garantir a governança de projeto no nível operacional.",
            "B. Responsável pela criação dos documentos de baseline.",
            "C. Responsável pela execução da arquitetura planejada.",
            "D. Responsável pela manutenção da arquitetura implantada diante de mudanças."
        ],
        "EXPLANATION_TEXT": "Explicação: A Fase H - Gerenciamento da Mudança na Arquitetura é dedicada a garantir que a arquitetura implantada continue relevante e adequada, mesmo diante de mudanças. (KLP: {S0} §3.4)",
        "CORRECT_ANSWER": "D",
        "JSONINDEX": "48",
        "Probability": 1
    },
  {
    "QUESTION_NUMBER": "49",
    "QUESTION_TEXT": "Qual é o principal papel do Panorama de Arquitetura segundo o Padrão TOGAF®?",
    "POSSIBLE_ANSWERS": [
      "A. Representar exclusivamente o estado futuro desejado da arquitetura.",
      "B. Ajudar na identificação e uso de blocos reutilizáveis em diferentes projetos.",
      "C. Documentar os resultados de projetos de TI em um repositório separado.",
      "D. Substituir o repositório de arquitetura como principal fonte de referência."
    ],
    "EXPLANATION_TEXT": "Explicação: O Panorama de Arquitetura tem como função apoiar a identificação e a reutilização de blocos de construção de arquitetura em diferentes projetos e estágios da arquitetura. (KLP: {S0} §4.15)",
    "CORRECT_ANSWER": "B",
    "JSONINDEX": "49",
    "Probability": 1
  },
  {
    "QUESTION_NUMBER": "50",
    "QUESTION_TEXT": "De que forma o Panorama de Arquitetura contribui para decisões corporativas, segundo o Padrão TOGAF®?",
    "POSSIBLE_ANSWERS": [
      "A. Padronizando processos operacionais e reduzindo custos.",
      "B. Suportando decisões com base em uma visão integrada e dinâmica da arquitetura.",
      "C. Promovendo a substituição de sistemas legados por novas soluções.",
      "D. Garantindo a execução dos projetos de arquitetura no prazo."
    ],
    "EXPLANATION_TEXT": "Explicação: O Panorama de Arquitetura apoia a tomada de decisões ao fornecer uma visão dinâmica, integrada e evolutiva da arquitetura corporativa em seus diversos estados. (KLP: {S0} §4.15)",
    "CORRECT_ANSWER": "B",
    "JSONINDEX": "50",
    "Probability": 1
  },
  {
    "QUESTION_NUMBER": "51",
    "QUESTION_TEXT": "Representação arquitetural dos ativos em uso ou planejados pela organização em determinados momentos. Estamos falando de qual conceito do Padrão TOGAF®?",
    "POSSIBLE_ANSWERS": [
      "A. Panorama de Arquitetura",
      "B. Repositório de Arquitetura",
      "C. Catálogo de Aplicações",
      "D. Mapa de Capabilidades"
    ],
    "EXPLANATION_TEXT": "Explicação: O Panorama de Arquitetura (Architecture Landscape), segundo o Padrão TOGAF®, é a representação arquitetural dos ativos em uso ou planejados pela organização em determinados pontos no tempo. Ele oferece uma base visual para rastrear a evolução da arquitetura e dar suporte à tomada de decisões. (KLP: {S0} §4.15)",
    "CORRECT_ANSWER": "A",
    "JSONINDEX": "51",
    "Probability": 1
  },
  {
    "QUESTION_NUMBER": "52",
    "QUESTION_TEXT": "Qual das alternativas expressa corretamente o uso do Panorama de Arquitetura em contextos práticos?",
    "POSSIBLE_ANSWERS": [
      "A. Serve apenas como artefato de planejamento estratégico.",
      "B. Deve ser utilizado apenas em ambientes de arquitetura orientada a serviços.",
      "C. É restrito às fases iniciais do ADM.",
      "D. É utilizado para representar diferentes estágios da arquitetura no tempo."
    ],
    "EXPLANATION_TEXT": "Explicação: O Panorama de Arquitetura pode representar arquiteturas no estado atual, no estado de transição e no estado futuro, refletindo a evolução da arquitetura ao longo do tempo. (KLP: {S0} §4.15)",
    "CORRECT_ANSWER": "D",
    "JSONINDEX": "52",
    "Probability": 1
  },

    {
        "QUESTION_NUMBER": "53",
        "QUESTION_TEXT": "Qual é a principal função da descrição do estado futuro da organização segundo o Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Registrar os processos operacionais atuais.",
            "B. Atender aos requisitos legais e regulatórios.",
            "C. Orientar as mudanças necessárias para alcançar os objetivos da organização.",
            "D. Automatizar os serviços de TI existentes."
        ],
        "EXPLANATION_TEXT": "Explicação: O Padrão TOGAF® define a Arquitetura Corporativa como uma forma de descrever o estado futuro da organização, permitindo orientar as mudanças necessárias para alcançar suas metas e objetivos. (KLP: G184 §3.3)",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "53",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "54",
        "QUESTION_TEXT": "Qual é o propósito da Arquitetura Corporativa quando usada para apoiar um projeto, de acordo com o Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Criar uma visão estratégica de longo prazo para o portfólio.",
            "B. Alinhar iniciativas corporativas com os princípios arquiteturais.",
            "C. Detalhar requisitos, apoiar a integração e garantir conformidade com a governança arquitetural.",
            "D. Estabelecer a estrutura organizacional da área de projetos."
        ],
        "EXPLANATION_TEXT": "Explicação: A arquitetura usada para apoiar um projeto tem como foco detalhar requisitos, identificar sinergias e dependências futuras, assegurar conformidade com a governança e promover alinhamento entre projetos. (KLP: G184 §3.3)",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "54",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "55",
        "QUESTION_TEXT": "Quando a Arquitetura Corporativa é usada para apoiar a entrega de soluções, qual das características abaixo é mais comum?",
        "POSSIBLE_ANSWERS": [
            "A. Conteúdo altamente detalhado, com foco em restrições e controles para a implementação.",
            "B. Conteúdo genérico, com foco no alinhamento estratégico.",
            "C. Visão ampla e de longo prazo, com baixa atualização.",
            "D. Baixo nível de detalhe, com foco em recomendações regulatórias."
        ],
        "EXPLANATION_TEXT": "Explicação: A arquitetura para apoiar a entrega de soluções é altamente detalhada e tem foco em restrições, controles e requisitos para o projeto, servindo como estrutura de governança para a mudança. (KLP: G186 §3.2.2)",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "55",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "56",
        "QUESTION_TEXT": "Qual das alternativas representa corretamente os quatro propósitos principais de uma Capacidade de Arquitetura segundo o Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Estratégia, Operações, Projetos e Indicadores.",
            "B. Estratégia, Portfólio, Projeto e Entrega de Solução.",
            "C. Estratégia, Governança, Projeto e Qualidade.",
            "D. Portfólio, Solução, Tecnologia e Métricas."
        ],
        "EXPLANATION_TEXT": "Explicação: Os quatro propósitos principais de uma Capacidade de Arquitetura, segundo o Padrão TOGAF®, são: apoiar a estratégia, o portfólio, os projetos e a entrega de soluções. (KLP: G184 §3.3)",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "56",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "57",
        "QUESTION_TEXT": "Qual é a principal diferença entre a arquitetura para apoiar a estratégia e a arquitetura para apoiar o projeto?",
        "POSSIBLE_ANSWERS": [
            "A. A primeira é mais detalhada e orientada a soluções técnicas.",
            "B. A segunda é mais ampla e voltada ao direcionamento estratégico.",
            "C. A primeira é menos detalhada e voltada para o longo prazo, enquanto a segunda é mais detalhada e foca na execução de curto prazo.",
            "D. Ambas têm o mesmo nível de detalhe, mas focam em equipes diferentes."
        ],
        "EXPLANATION_TEXT": "Explicação: A arquitetura para apoiar a estratégia é menos detalhada e voltada ao longo prazo (3 a 10 anos), enquanto a arquitetura para projeto é mais detalhada e aplicada a prazos mais curtos (até 2 anos). (KLP: G186 §3.2.2)",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "57",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "58",
        "QUESTION_TEXT": "De acordo com o Padrão TOGAF®, qual das afirmações sobre os quatro propósitos de aplicação da Arquitetura Corporativa está correta?",
        "POSSIBLE_ANSWERS": [
            "A. A arquitetura usada para apoiar o portfólio é geralmente mais detalhada que a usada para apoiar projetos.",
            "B. A arquitetura para apoiar a entrega de soluções normalmente contém apenas orientações gerais e estratégicas.",
            "C. Os quatro propósitos do ADM são mutuamente exclusivos e só podem ser aplicados de forma isolada.",
            "D. A mesma Capacidade de Arquitetura pode apoiar mais de um propósito, como estratégia e projetos."
        ],
        "EXPLANATION_TEXT": "Explicação: Segundo o Padrão TOGAF®, uma Capacidade de Arquitetura pode ser utilizada para apoiar mais de um propósito, conforme as necessidades da organização. Os propósitos não são excludentes. (KLP: G184 §3.3)",
        "CORRECT_ANSWER": "D",
        "JSONINDEX": "58",
        "Probability": 1
    },

    {
        "QUESTION_NUMBER": "59",
        "QUESTION_TEXT": "Qual é a finalidade do Framework de Conteúdo do Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Estruturar as descrições de arquitetura e os produtos gerados nas fases do ADM",
            "B. Classificar os projetos de transformação digital com base na urgência e importância",
            "C. Garantir que todos os artefatos sejam modelados com a mesma ferramenta computacional",
            "D. Criar listas de verificação para uso em auditorias de governança"
        ],
        "EXPLANATION_TEXT": "Explicação: O Framework de Conteúdo é utilizado para estruturar as descrições de arquitetura, os produtos de trabalho e os modelos gerados durante o ADM. (KLP: {S0} §3.12)",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "59",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "60",
        "QUESTION_TEXT": "Durante a Fase Preliminar do ADM, uma das tarefas essenciais é:",
        "POSSIBLE_ANSWERS": [
            "A. Selecionar fornecedores de ferramentas de modelagem",
            "B. Definir o framework de conteúdo das descrições de arquitetura",
            "C. Implementar o repositório central de dados operacionais",
            "D. Mapear os objetivos estratégicos dos stakeholders"
        ],
        "EXPLANATION_TEXT": "Explicação: Uma das tarefas essenciais da Fase Preliminar é definir o framework de conteúdo para estruturar as descrições de arquitetura e os produtos gerados. (KLP: {S0} §3.12) | As demais opções estão erradas porque: ( A ) Selecionar fornecedores de ferramentas de modelagem – está parcialmente relacionado, mas não essencial porque a escolha de ferramenta pode influenciar o framework de conteúdo, mas ela não é essencial para que a arquitetura seja desenvolvida. ( C ) Implementar o repositório central de dados operacionais – está incorreta porque embora o uso de repositórios seja citado no Padrão TOGAF®, não se refere a dados operacionais, mas sim a repositórios de artefatos e informações arquiteturais. ( D ) Mapear os objetivos estratégicos dos stakeholders – é importante em fases iniciais, como a Fase A, mas não é o foco da Fase Preliminar.", 
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "60",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "61",
        "QUESTION_TEXT": "A escolha do Framework de Conteúdo pode ser influenciada por:",
        "POSSIBLE_ANSWERS": [
            "A. O nível de maturidade dos times de desenvolvimento ágil",
            "B. A frequência das revisões trimestrais de arquitetura",
            "C. A política de segurança cibernética vigente na organização",
            "D. A ferramenta computacional utilizada como apoio à prática de arquitetura"
        ],
        "EXPLANATION_TEXT": "Explicação: A escolha do Framework de Conteúdo pode ser influenciada tanto pelo framework de arquitetura adotado quanto pelo software de suporte utilizado na prática de arquitetura corporativa. (KLP: {S0} §3.12)",
        "CORRECT_ANSWER": "D",
        "JSONINDEX": "61",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "62",
        "QUESTION_TEXT": "Segundo o Padrão TOGAF®, qual é a principal relação entre o ADM e o Framework de Conteúdo?",
        "POSSIBLE_ANSWERS": [
            "A. O ADM organiza as informações em fases, enquanto o Framework define os papéis dos stakeholders",
            "B. O ADM representa o método de desenvolvimento, enquanto o Framework de Conteúdo organiza os produtos gerados",
            "C. Ambos tratam dos artefatos que compõem a arquitetura, mas o Framework trata apenas da fase preliminar",
            "D. O Framework de Conteúdo define a estrutura da organização, enquanto o ADM define o orçamento de TI"
        ],
        "EXPLANATION_TEXT": "Explicação: O ADM descreve o como a arquitetura será criada, usada e mantida. Já o Framework de Conteúdo estrutura os elementos e produtos arquiteturais gerados ao longo do ADM, ou seja, é o que está sendo manipulado. (KLP: {S0} §3.12)",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "62",
        "Probability": 1
    },

    {
        "QUESTION_NUMBER": "63",
        "QUESTION_TEXT": "Qual é a principal característica de um entregável segundo o Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. É um documento técnico mantido apenas pela equipe de arquitetura",
            "B. É um produto de trabalho informal, usado apenas para comunicação interna",
            "C. É formalmente revisado, acordado e assinado pelos stakeholders",
            "D. É uma documentação opcional que pode ser descartada após o projeto"
        ],
        "EXPLANATION_TEXT": "Explicação: O entregável é um produto de trabalho da arquitetura formalmente revisado, acordado e assinado pelos stakeholders. (KLP: {S0} §4.40)",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "63",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "64",
        "QUESTION_TEXT": "De acordo com o Padrão TOGAF®, o que melhor descreve um artefato?",
        "POSSIBLE_ANSWERS": [
            "A. Um conjunto de entregáveis organizados por domínio",
            "B. Um documento de alto nível que define objetivos estratégicos",
            "C. Um modelo de referência aplicável a múltiplos projetos",
            "D. Um produto de trabalho de arquitetura que descreve um aspecto específico da arquitetura"
        ],
        "EXPLANATION_TEXT": "Explicação: O artefato é um produto de trabalho de arquitetura que descreve um aspecto da arquitetura. (KLP: {S0} §4.23)",
        "CORRECT_ANSWER": "D",
        "JSONINDEX": "64",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "65",
        "QUESTION_TEXT": "O que pode acontecer com os entregáveis após a conclusão de um projeto, conforme o Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. São revisados continuamente por um comitê de governança externa",
            "B. São arquivados ou transferidos para o Repositório de Arquitetura",
            "C. São descartados e substituídos por artefatos técnicos mais recentes",
            "D. São convertidos em documentos executivos para apresentação à diretoria"
        ],
        "EXPLANATION_TEXT": "Explicação: Após a conclusão de um projeto, os entregáveis podem ser arquivados ou transferidos para o Repositório de Arquitetura como modelo de referência, padrão ou snapshot do Cenário de Arquitetura. (KLP: {S0} §4.40)",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "65",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "66",
        "QUESTION_TEXT": "Qual é a relação entre entregável e artefato no contexto do Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. O entregável pode ser composto por artefatos que detalham partes da arquitetura",
            "B. O artefato é desenvolvido antes do entregável e substitui seu conteúdo final",
            "C. O artefato é um tipo de entregável com maior valor estratégico",
            "D. Ambos são produtos de arquitetura, mas o artefato é voltado apenas para documentação técnica"
        ],
        "EXPLANATION_TEXT": "Explicação: No contexto do Padrão TOGAF®, entregáveis podem ser compostos por artefatos, que detalham aspectos específicos da arquitetura. (KLPs: {S0} §4.40, {S0} §4.23)",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "66",
        "Probability": 1
    },

    {
        "QUESTION_NUMBER": "67",
        "QUESTION_TEXT": "Qual das opções expressa corretamente uma característica de um bom bloco de construção segundo o Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Pode ser reutilizável, substituível e bem especificado",
            "B. Deve ser exclusivo para cada arquitetura desenvolvida",
            "C. Deve conter todos os detalhes técnicos logo na primeira versão",
            "D. Pode ignorar padrões tecnológicos, pois é apenas conceitual"
        ],
        "EXPLANATION_TEXT": "Explicação: Um bom bloco de construção deve ser reutilizável, substituível, bem especificado e considerar sua evolução com uso e padrões. (KLP: {S4} §5.2.2)",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "67",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "68",
        "QUESTION_TEXT": "O que caracteriza a forma como os blocos de construção interagem entre si no Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Só interagem se pertencerem ao mesmo tipo de metamodelo",
            "B. Operam de forma isolada, sem dependência entre elementos",
            "C. Podem interoperar com outros blocos interdependentes",
            "D. São substituídos por entregáveis nas fases posteriores"
        ],
        "EXPLANATION_TEXT": "Explicação: Blocos de construção podem interoperar com outros blocos interdependentes, promovendo integração e flexibilidade. (KLP: {S4} §5.2.2)",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "68",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "69",
        "QUESTION_TEXT": "O que é considerado uma boa prática ao definir o nível de detalhe de um bloco de construção?",
        "POSSIBLE_ANSWERS": [
            "A. Sempre detalhar ao máximo, com no mínimo 50 páginas por bloco",
            "B. Ajustar o nível de detalhe de acordo com os objetivos da arquitetura",
            "C. Trabalhar apenas com descrições genéricas para manter flexibilidade",
            "D. Ignorar o nível de detalhe até a implementação da solução"
        ],
        "EXPLANATION_TEXT": "Explicação: O nível de detalhe de um bloco de construção deve ser ajustado conforme os objetivos da arquitetura, podendo variar ao longo do desenvolvimento. (KLP: {S4} §5.2.2)",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "69",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "70",
        "QUESTION_TEXT": "Qual é a vantagem de manter o limite e a especificação de um bloco de construção fracamente acoplados à sua implementação?",
        "POSSIBLE_ANSWERS": [
            "A. Facilita a substituição de padrões por frameworks visuais",
            "B. Permite maior controle sobre o código-fonte envolvido",
            "C. Garante que o bloco funcione em qualquer sistema operacional",
            "D. Possibilita realizá-lo de várias maneiras sem impactar seu uso"
        ],
        "EXPLANATION_TEXT": "Explicação: Manter o limite e especificação fracamente acoplados à implementação permite diferentes realizações do bloco sem comprometer sua estrutura. (KLP: {S4} §5.2.2)",
        "CORRECT_ANSWER": "D",
        "JSONINDEX": "70",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "71",
        "QUESTION_TEXT": "Trata-se de um pacote de funcionalidades, reconhecido pelos especialistas como “uma coisa”, com limites bem definidos, que pode ser montado ou decomposto em outros elementos e reaproveitado em diferentes contextos. Qual conceito do Padrão TOGAF® está sendo descrito?",
        "POSSIBLE_ANSWERS": [
            "A. Entregável",
            "B. Bloco de construção",
            "C. Artefato",
            "D. Building Capability"
        ],
        "EXPLANATION_TEXT": "Explicação: A descrição corresponde ao conceito de bloco de construção: pacote de funcionalidades com limites definidos, reconhecível, montável, decomposto e reutilizável. (KLP: {S4} §5.2.2)",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "71",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "72",
        "QUESTION_TEXT": "Qual é o principal papel do Repositório de Arquitetura segundo o Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Armazenar apenas os artefatos da arquitetura corrente em produção.",
            "B. Controlar o ciclo de vida de aplicações empresariais específicas.",
            "C. Armazenar diferentes classes de resultados arquiteturais em múltiplos níveis de abstração.",
            "D. Substituir repositórios externos usados por projetos de TI."
        ],
        "EXPLANATION_TEXT": "Explicação: O Repositório de Arquitetura armazena diferentes classes de resultados arquiteturais produzidos durante o trabalho de arquitetura, organizados em múltiplos níveis de abstração. (KLP: {S0} §3.11)",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "72",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "73",
        "QUESTION_TEXT": "Uma equipe de arquitetura está estruturando uma proposta de solução e deseja utilizar elementos previamente aprovados e já existentes na organização. Para isso, decide consultar um componente específico do Repositório de Arquitetura previsto no Padrão TOGAF®. Qual elemento é mais adequado para esse tipo de reutilização?",
        "POSSIBLE_ANSWERS": [
            "A. Repositório de Governança",
            "B. Biblioteca de Referência",
            "C. Repositório de Requisitos de Arquitetura",
            "D. Capacidade de Arquitetura"
        ],
        "EXPLANATION_TEXT": "Explicação: A Biblioteca de Referência é um dos componentes do Repositório de Arquitetura e fornece materiais como modelos, diretrizes e templates que podem ser reutilizados no desenvolvimento de arquiteturas específicas. (KLP: {S0} §3.11)",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "73",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "74",
        "QUESTION_TEXT": "Durante o desenvolvimento da arquitetura de uma nova unidade de negócio, o arquiteto responsável quer entender quais blocos de construção já estão implantados na organização, em diferentes níveis de detalhe, para apoiar seu planejamento. Qual elemento do Repositório de Arquitetura deve ser consultado?",
        "POSSIBLE_ANSWERS": [
            "A. Panorama de Arquitetura",
            "B. Biblioteca de Padrões",
            "C. Repositório de Soluções",
            "D. Metamodelo de Arquitetura"
        ],
        "EXPLANATION_TEXT": "Explicação: O Panorama de Arquitetura é um dos componentes do Repositório de Arquitetura e mostra a representação dos ativos arquiteturais implantados, organizados por diferentes níveis de abstração, conforme os objetivos arquiteturais. (KLP: {S0} §3.11)",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "74",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "75",
        "QUESTION_TEXT": "Ao revisar o Repositório de Arquitetura, um arquiteto encontra três conjuntos de informações: requisitos amplos e de longo prazo, requisitos de uma área específica da organização e requisitos associados a projetos e pacotes de trabalho. Essa estrutura corresponde a qual princípio do Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Distribuição de requisitos por área de negócios",
            "B. Separação entre domínios de arquitetura",
            "C. Organização dos requisitos por níveis de granularidade",
            "D. Definição de responsabilidades por fase do ADM"
        ],
        "EXPLANATION_TEXT": "Explicação: Os requisitos de arquitetura são divididos em três níveis de granularidade: estratégico, segmento e capacidade, para refletir diferentes escopos e necessidades. (KLP: {S0} §3.11)",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "75",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "76",
        "QUESTION_TEXT": "Um arquiteto júnior está organizando a documentação gerada durante as fases do ADM e deseja entender onde cada elemento deve ser armazenado. Qual das afirmações abaixo está de acordo com o Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. O Panorama de Arquitetura armazena os dados gerados pelas soluções implementadas.",
            "B. O Repositório de Requisitos guarda os padrões obrigatórios aprovados pela organização.",
            "C. A Biblioteca de Padrões armazena apenas modelos de fornecedores externos.",
            "D. O Panorama de Soluções representa os blocos de construção de solução usados para suportar os blocos de construção arquiteturais."
        ],
        "EXPLANATION_TEXT": "Explicação: O Panorama de Soluções contém a representação dos blocos de construção de solução (SBBs) que suportam os blocos de construção de arquitetura (ABBs). Ele não armazena os dados gerados pelas soluções. (KLP: {S0} §3.11)",
        "CORRECT_ANSWER": "D",
        "JSONINDEX": "76",
        "Probability": 1
    },

    {
        "QUESTION_NUMBER": "78",
        "QUESTION_TEXT": "Qual das opções expressa corretamente o papel do Framework de Conteúdo no contexto do Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Modelar os processos de negócios a partir de notações específicas como BPMN.",
            "B. Estruturar os artefatos e produtos de trabalho gerados durante o ADM.",
            "C. Substituir a escolha de ferramentas utilizadas na modelagem da arquitetura.",
            "D. Definir os papéis e responsabilidades dos envolvidos na governança."
        ],
        "EXPLANATION_TEXT": "Explicação: O Framework de Conteúdo define uma estrutura de categorização usada para descrever os blocos de construção e artefatos da arquitetura, organizando os produtos de trabalho gerados em cada fase do ADM. (KLP: S0 §3.12.2)",
        "CORRECT_ANSWER": "B",
        "JSONINDEX": "1",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "79",
        "QUESTION_TEXT": "Qual é um dos benefícios diretos de utilizar um Metamodelo Corporativo no desenvolvimento da Arquitetura segundo o Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. Garantir que todos os artefatos sigam a notação UML.",
            "B. Permitir a substituição de fases do ADM por frameworks alternativos.",
            "C. Oferecer uma base integrada para consistência e rastreabilidade dos modelos.",
            "D. Eliminar a necessidade de validação do contexto estratégico."
        ],
        "EXPLANATION_TEXT": "Explicação: O Metamodelo Corporativo fornece valor ao garantir consistência, integralidade e rastreabilidade nos modelos de arquitetura criados pela organização. (KLP: S0 §3.12.3)",
        "CORRECT_ANSWER": "C",
        "JSONINDEX": "2",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "80",
        "QUESTION_TEXT": "Qual é a relação entre o ADM e o Framework de Conteúdo segundo o Padrão TOGAF®?",
        "POSSIBLE_ANSWERS": [
            "A. O ADM orienta a criação de conteúdo que será estruturado pelo Framework.",
            "B. O Framework de Conteúdo substitui a estrutura do ADM nos projetos menores.",
            "C. O Framework de Conteúdo determina quais fases do ADM devem ser executadas.",
            "D. O ADM e o Framework de Conteúdo são usados exclusivamente na Fase Preliminar."
        ],
        "EXPLANATION_TEXT": "Explicação: O ADM fornece as fases e as entregas, enquanto o Framework de Conteúdo estrutura os elementos que compõem essas entregas. Um complementa o outro. (KLP: S0 §3.12.1)",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "3",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "81",
        "QUESTION_TEXT": "De acordo com o Padrão TOGAF®, o que o Metamodelo Corporativo representa?",
        "POSSIBLE_ANSWERS": [
            "A. A relação entre projetos, investimentos, cronogramas e entregas.",
            "B. O conjunto de ferramentas utilizadas na arquitetura.",
            "C. O roteiro de transformação de uma arquitetura linha de base para uma alvo.",
            "D. Os tipos de entidades que aparecem nos modelos arquiteturais e seus relacionamentos dentro da empresa."
        ],
        "EXPLANATION_TEXT": "Explicação: O Metamodelo Corporativo representa os tipos de entidades que aparecem nos modelos que descrevem a empresa (como papéis, aplicações, processos etc.) e os relacionamentos entre essas entidades. (KLP: S0 §3.12.3)",
        "CORRECT_ANSWER": "D",
        "JSONINDEX": "4",
        "Probability": 1
    },
    {
        "QUESTION_NUMBER": "82",
        "QUESTION_TEXT": "Por que o Padrão TOGAF® não impõe uma única notação de modelagem para representar a arquitetura?",
        "POSSIBLE_ANSWERS": [
            "A. Porque há flexibilidade para usar diferentes linguagens conforme o contexto.",
            "B. Porque a escolha da notação depende da linguagem de programação adotada.",
            "C. Porque apenas notações visuais são permitidas.",
            "D. Porque o ADM não requer representação formal da arquitetura."
        ],
        "EXPLANATION_TEXT": "Explicação: O Padrão TOGAF® permite o uso de diversas linguagens de modelagem (como ArchiMate®, BPMN™, UML® etc.) para que a representação da arquitetura possa se adaptar ao contexto da organização. (KLP: S0 §3.12.3)",
        "CORRECT_ANSWER": "A",
        "JSONINDEX": "5",
        "Probability": 1
    },
  {
    "QUESTION_NUMBER": "83",
    "QUESTION_TEXT": "O que define quais informações a Capacidade de AE deve ter “à mão”, segundo o Padrão TOGAF®?",
    "POSSIBLE_ANSWERS": [
      "A. A lista de sistemas legados em uso.",
      "B. A finalidade da Capacidade de AE.",
      "C. O orçamento anual de TI.",
      "D. O catálogo completo de processos da organização."
    ],
    "EXPLANATION_TEXT": "Explicação: A finalidade da Capacidade de AE define o que precisa estar “à mão”; as demais necessidades derivam da biblioteca de viewpoints e das informações que a suportam. (KLP: G184 §8.3, Padrão TOGAF®)",
    "CORRECT_ANSWER": "B",
    "JSONINDEX": "83",
    "Probability": 1
  },
  {
    "QUESTION_NUMBER": "84",
    "QUESTION_TEXT": "Qual prática é apontada como a mais bem-sucedida para definir os conceitos que irão compor o Metamodelo de Arquitetura?",
    "POSSIBLE_ANSWERS": [
      "A. Adotar um metamodelo pré-empacotado sem ajustes.",
      "B. Mapear todos os componentes possíveis antes de ouvir os stakeholders.",
      "C. Replicar integralmente um framework externo de referência.",
      "D. Partir das perguntas centrais do contexto, identificar preocupações e pontos de vista e, então, derivar o metamodelo."
    ],
    "EXPLANATION_TEXT": "Explicação: A prática mais bem-sucedida parte das perguntas centrais, identifica preocupações e viewpoints, e deixa a biblioteca de pontos de vista definir o metamodelo; o excesso vira ruído. (KLP: G184 §8.3, Padrão TOGAF®)",
    "CORRECT_ANSWER": "D",
    "JSONINDEX": "84",
    "Probability": 1
  },
  {
    "QUESTION_NUMBER": "85",
    "QUESTION_TEXT": "Qual prática reduz o esforço de gestão de informações e mantém o repositório sustentável?",
    "POSSIBLE_ANSWERS": [
      "A. Diferenciar o que precisa estar disponível facilmente do que pode ser coletado sob demanda, definindo o mínimo obrigatório.",
      "B. Coletar o máximo de informações para evitar lacunas futuras.",
      "C. Expandir continuamente o escopo de modelos e relacionamentos.",
      "D. Centralizar todas as respostas em um único diagrama geral."
    ],
    "EXPLANATION_TEXT": "Explicação: Recomenda-se separar o mínimo obrigatório “à mão” daquilo que é “sob demanda”, mantendo rastreabilidade e foco no propósito. (KLP: G184 §8.3, Padrão TOGAF®)",
    "CORRECT_ANSWER": "A",
    "JSONINDEX": "85",
    "Probability": 1
  },
  {
    "QUESTION_NUMBER": "86",
    "QUESTION_TEXT": "Por que a maioria das partes interessadas não precisa conhecer o Metamodelo de Arquitetura em detalhes?",
    "POSSIBLE_ANSWERS": [
      "A. Porque o metamodelo é de uso exclusivo do time de TI.",
      "B. Porque as partes interessadas se preocupam com questões específicas e resultados, não com a estrutura do metamodelo.",
      "C. Porque o metamodelo é confidencial.",
      "D. Porque sempre se usa uma abordagem de domínio restrito."
    ],
    "EXPLANATION_TEXT": "Explicação: Stakeholders buscam respostas para questões específicas; não precisam conhecer a estrutura do metamodelo em si. (KLP: G184 §8.3, Padrão TOGAF®)",
    "CORRECT_ANSWER": "B",
    "JSONINDEX": "86",
    "Probability": 1
  },
  {
    "QUESTION_NUMBER": "87",
    "QUESTION_TEXT": "Qual ação é recomendada para confirmar se a informação levantada é suficiente para responder às perguntas das partes interessadas?",
    "POSSIBLE_ANSWERS": [
      "A. Capturar toda a informação que pode ser útil no futuro.",
      "B. Adotar apenas UML e BPMN como padrão.",
      "C. Escolher uma única técnica de modelagem e aplicá-la a tudo.",
      "D. Testar os catálogos, matrizes e diagramas necessários para capturar, analisar e responder às perguntas."
    ],
    "EXPLANATION_TEXT": "Explicação: O Padrão TOGAF® recomenda testar catálogos, matrizes e diagramas para verificar se a informação é suficiente para responder às perguntas. (KLP: G184 §8.3)",
    "CORRECT_ANSWER": "D",
    "JSONINDEX": "87",
    "Probability": 1
  },
  {
    "QUESTION_NUMBER": "88",
    "QUESTION_TEXT": "O que ocorre quando se amplia o conjunto de questões críticas que a Capacidade de Arquitetura Corporativa deve responder?",
    "POSSIBLE_ANSWERS": [
      "A. Aumenta a complexidade do repositório e amplia as possibilidades de análise.",
      "B. Reduz-se a necessidade de pontos de vista, por outro lado, aumenta-se a quantidade de visões.",
      "C. Elimina-se a necessidade de modelos de capacidade e processo já que toda a informação já estará disponível.",
      "D. Mantém-se o mesmo volume de informações, já que as informações serão apenas reorganizadas."
    ],
    "EXPLANATION_TEXT": "Explicação: Ampliar o conjunto de questões expande os requisitos de informação a serem mantidos, aumentando a complexidade do repositório. (KLP: G184 §8.3, Padrão TOGAF®)",
    "CORRECT_ANSWER": "A",
    "JSONINDEX": "88",
    "Probability": 1
  },

{
"QUESTION_NUMBER": "89",
"QUESTION_TEXT": "Segundo o Padrão TOGAF®, o que melhor define uma Visão de Arquitetura?",
"POSSIBLE_ANSWERS": [
"A. Um conjunto de diagramas que descreve a solução final aprovada.",
"B. Uma representação de uma parte da arquitetura sob a perspectiva de um conjunto relacionado de preocupações de partes interessadas.",
"C. Uma descrição textual de requisitos e restrições.",
"D. Um conjunto de processos e papéis para governança."
],
"EXPLANATION_TEXT": "Explicação: Visão de Arquitetura é a representação de uma parte da arquitetura com interesse para uma parte interessada. (KLP: S4 §3.1 — Padrão TOGAF®)",
"CORRECT_ANSWER": "B",
"JSONINDEX": "89",
"Probability": 1
},
{
"QUESTION_NUMBER": "90",
"QUESTION_TEXT": "O que é um Ponto de Vista de Arquitetura no Padrão TOGAF®?",
"POSSIBLE_ANSWERS": [
"A. A opinião das partes interessadas sobre a arquitetura.",
"B. Um catálogo de modelos reutilizáveis para qualquer situação.",
"C. A especificação das convenções para um tipo de visão, estabelecendo como construir, interpretar e usar a visão para tratar preocupações de partes interessadas.",
"D. Uma lista de stakeholders e suas responsabilidades."
],
"EXPLANATION_TEXT": "Explicação: Ponto de Vista de Arquitetura é a especificação das convenções para um tipo de visão e define como construir, interpretar e usar essa visão para tratar preocupações específicas. (KLP: S4 §3.1 — Padrão TOGAF®)",
"CORRECT_ANSWER": "C",
"JSONINDEX": "90",
"Probability": 1
},
{
"QUESTION_NUMBER": "91",
"QUESTION_TEXT": "Qual afirmação descreve corretamente a relação entre Ponto de Vista e Visão?",
"POSSIBLE_ANSWERS": [
"A. A Visão define o esquema, a notação e as regras de construção, e o Ponto de Vista segue o modelo produzido.",
"B. O Ponto de Vista é o diagrama final usado para comunicar a preocupação da parte interessada e a Visão é o esquema que define tal diagrama.",
"C. Ponto de Vista e Visão são equivalentes na prática e podem ser usados como sinônimos sem prejuízo.",
"D. O Ponto de Vista define a perspectiva e o recorte; a Visão é a representação construída conforme esse esquema para tratar preocupações específicas das partes interessadas."
],
"EXPLANATION_TEXT": "Explicação: O Ponto de Vista fornece a perspectiva e as convenções; a Visão é construída a partir desse esquema para abordar preocupações específicas. (KLP: S4 §3.1 — Padrão TOGAF®)",
"CORRECT_ANSWER": "D",
"JSONINDEX": "91",
"Probability": 1
},
{
"QUESTION_NUMBER": "92",
"QUESTION_TEXT": "Qual prática favorece um Repositório de AE sustentável segundo o Padrão TOGAF®?",
"POSSIBLE_ANSWERS": [
"A. Minimizar o que é coletado e mantido, registrando apenas o necessário ao projeto atual e à rastreabilidade mínima.",
"B. Modelar de ponta a ponta antes de qualquer decisão.",
"C. Capturar o máximo de informações para futuras análises.",
"D. Criar modelos adicionais sempre que houver tempo disponível."
],
"EXPLANATION_TEXT": "Explicação: Um repositório sustentável depende da minimização implacável da informação coletada e mantida, restringindo-se ao necessário para o projeto atual e à rastreabilidade mínima. (KLP: G186 §5.1 — Padrão TOGAF®)",
"CORRECT_ANSWER": "A",
"JSONINDEX": "92",
"Probability": 1
},

  {
    "QUESTION_NUMBER": "93",
    "QUESTION_TEXT": "Qual é uma vantagem de criar Visões usando Pontos de Vista já definidos em uma biblioteca?",
    "POSSIBLE_ANSWERS": [
      "A. Aumentar a quantidade de Visões produzidas, mesmo que nem todas respondam a preocupações relevantes.",
      "B. Reduzir o esforço do arquiteto, gerar Visões mais rapidamente e facilitar a compreensão das partes interessadas por já lidarem com formatos familiares.",
      "C. Eliminar a necessidade de analisar conflitos entre as partes interessadas, já que os pontos de vista predefinidos atendem todos os casos.",
      "D. Permitir que o arquiteto automatize completamente o processo de modelagem, sem necessidade de análise ou validação."
    ],
    "EXPLANATION_TEXT": "Explicação: Usar Pontos de Vista já definidos reduz o trabalho do arquiteto, acelera a criação das Visões, aumenta a clareza para as Partes Interessadas (que se acostumam com formatos consistentes) e fortalece a confiança na validade das representações. (KLP: S4 §3.2 | Esta KLP é da prova de nível 2, Padrão TOGAF®)",
    "CORRECT_ANSWER": "B",
    "JSONINDEX": "93",
    "Probability": 1
  },
  {
    "QUESTION_NUMBER": "94",
    "QUESTION_TEXT": "O que o arquiteto deve fazer quando surge a necessidade de uma Visão sem um Ponto de Vista predefinido?",
    "POSSIBLE_ANSWERS": [
      "A. Criar um Ponto de Vista novo ou uma Visão ad hoc e depois decidir se vale incluir na biblioteca de Pontos de Vista.",
      "B. Ignorar a necessidade até que uma biblioteca de Pontos de Vista seja atualizada.",
      "C. Reaproveitar qualquer Ponto de Visão anterior, mesmo que não trate da preocupação correta.",
      "D. Solicitar aprovação da Parte Interessada antes de produzir a Visão."
    ],
    "EXPLANATION_TEXT": "Explicação: Quando não há Ponto de Vista predefinido, o arquiteto pode criar um novo ou gerar uma Visão ad hoc e depois avaliar se o Ponto de Vista deve ser formalizado e incluído na biblioteca de Pontos de Vista. (KLP: S4 §3.2 | Esta KLP é da prova de nível 2, Padrão TOGAF®)",
    "CORRECT_ANSWER": "A",
    "JSONINDEX": "94",
    "Probability": 1
  },

{
    "QUESTION_NUMBER": "95",
    "QUESTION_TEXT": "O que o Enterprise Continuum fornece para apoiar o trabalho do arquiteto?",
    "POSSIBLE_ANSWERS": [
        "A. Uma lista fixa de modelos obrigatórios para todas as organizações.",
        "B. Um método para classificar artefatos conforme evoluem do genérico ao específico.",
        "C. Um repositório físico que armazena somente artefatos internos.",
        "D. Um conjunto de processos para substituir o ADM."
    ],
    "EXPLANATION_TEXT": "Explicação: O Enterprise Continuum classifica artefatos conforme evoluem de arquiteturas de fundação para arquiteturas específicas da organização. (KLP: {S0} §3.10)",
    "CORRECT_ANSWER": "B",
    "JSONINDEX": "95",
    "Probability": 1
},
{
    "QUESTION_NUMBER": "96",
    "QUESTION_TEXT": "Sobre os artefatos que podem compor o Enterprise Continuum, qual afirmação está correta?",
    "POSSIBLE_ANSWERS": [
        "A. Ele inclui apenas modelos criados dentro da organização.",
        "B. Ele aceita apenas SBBs, nunca ABBs.",
        "C. Ele exclui padrões de arquitetura que ainda estejam emergindo.",
        "D. Ele inclui artefatos internos e externos, desde TRM até modelos de consórcios setoriais."
    ],
    "EXPLANATION_TEXT": "Explicação: O Enterprise Continuum inclui artefatos internos e externos, desde TRM até modelos de consórcios de indústria. (KLP: {S4} §6.2)",
    "CORRECT_ANSWER": "D",
    "JSONINDEX": "96",
    "Probability": 1
},
{
    "QUESTION_NUMBER": "97",
    "QUESTION_TEXT": "Qual é o benefício principal de compreender “em que ponto do contínuo você está”?",
    "POSSIBLE_ANSWERS": [
        "A. Evitar discussões desencontradas durante debates arquiteturais.",
        "B. Facilitar auditorias financeiras.",
        "C. Reduzir a quantidade de artefatos exigidos pelo ADM.",
        "D. Eliminar a necessidade de arquiteturas específicas da organização."
    ],
    "EXPLANATION_TEXT": "Explicação: O Padrão TOGAF® afirma que a falta dessa compreensão faz as pessoas ‘falarem em sentidos opostos’. (KLP: {S4} §6.2)",
    "CORRECT_ANSWER": "A",
    "JSONINDEX": "97",
    "Probability": 1
},
{
    "QUESTION_NUMBER": "98",
    "QUESTION_TEXT": "O Enterprise Continuum apoia a reutilização ao permitir que a organização:",
    "POSSIBLE_ANSWERS": [
        "A. Construa todas as soluções do zero.",
        "B. Substitua completamente os repositórios internos.",
        "C. Classifique e reutilize ativos relevantes internos ou externos.",
        "D. Use apenas padrões altamente genéricos."
    ],
    "EXPLANATION_TEXT": "Explicação: O contínuo organiza artefatos reutilizáveis, internos ou externos, maximizando o valor da arquitetura. (KLP: {S4} §6.2)",
    "CORRECT_ANSWER": "C",
    "JSONINDEX": "98",
    "Probability": 1
},

  {
    "QUESTION_NUMBER": "99",
    "QUESTION_TEXT": "Segundo o Padrão TOGAF®, como o risco é definido no contexto de Arquitetura Corporativa?",
    "POSSIBLE_ANSWERS": [
      "A. Como a probabilidade de falhas técnicas em sistemas críticos.",
      "B. Como o impacto financeiro negativo associado a decisões estratégicas.",
      "C. Como a exposição a ameaças externas ao ambiente organizacional.",
      "D. Como o efeito da incerteza sobre os objetivos."
    ],
    "EXPLANATION_TEXT": "Explicação: O Padrão TOGAF® define risco como o efeito da incerteza sobre os objetivos, considerando desvios positivos ou negativos em relação ao que é esperado. (KLP: G152 §3.1.1)",
    "CORRECT_ANSWER": "D",
    "JSONINDEX": "99",
    "Probability": 1
  },
  {
    "QUESTION_NUMBER": "100",
    "QUESTION_TEXT": "De acordo com o Padrão TOGAF®, por que a mitigação de riscos deve ser tratada como um esforço contínuo?",
    "POSSIBLE_ANSWERS": [
      "A. Porque todos os riscos podem ser completamente eliminados com o tempo.",
      "B. Porque os gatilhos de risco podem surgir fora do escopo dos planejadores de transformação.",
      "C. Porque a mitigação ocorre apenas após a aprovação da governança.",
      "D. Porque os riscos só podem ser avaliados após a implementação da solução."
    ],
    "EXPLANATION_TEXT": "Explicação: A mitigação é contínua porque os gatilhos de risco podem estar fora do escopo dos planejadores, exigindo monitoramento constante do contexto da transformação. (KLP: S2 §9.1)",
    "CORRECT_ANSWER": "B",
    "JSONINDEX": "100",
    "Probability": 1
  },
  {
    "QUESTION_NUMBER": "101",
    "QUESTION_TEXT": "Qual alternativa descreve corretamente a diferença entre o nível inicial de risco e o nível de risco residual no Padrão TOGAF®?",
    "POSSIBLE_ANSWERS": [
      "A. O nível inicial de risco considera apenas riscos estratégicos, enquanto o residual considera riscos operacionais.",
      "B. O nível inicial de risco é definido após a mitigação, e o residual antes dela.",
      "C. O nível inicial de risco é categorizado antes das ações de mitigação, e o residual após sua implementação.",
      "D. O nível inicial de risco é tratado fora da governança, enquanto o residual é tratado dentro dela."
    ],
    "EXPLANATION_TEXT": "Explicação: O nível inicial de risco é categorizado antes da definição e implementação das ações de mitigação; o risco residual é categorizado após essas ações. (KLP: S2 §9.1)",
    "CORRECT_ANSWER": "C",
    "JSONINDEX": "101",
    "Probability": 1
  },
  {
    "QUESTION_NUMBER": "102",
    "QUESTION_TEXT": "Segundo o processo de gerenciamento de riscos do Padrão TOGAF®, qual atividade ocorre imediatamente após a identificação dos riscos?",
    "POSSIBLE_ANSWERS": [
      "A. Monitoramento de risco.",
      "B. Avaliação inicial de risco.",
      "C. Mitigação de riscos e avaliação de risco residual.",
      "D. Aceitação de riscos pela governança."
    ],
    "EXPLANATION_TEXT": "Explicação: Após a identificação dos riscos, o processo prevê a realização da avaliação inicial de risco, antes da definição das ações de mitigação. (KLP: S2 §9.1)",
    "CORRECT_ANSWER": "B",
    "JSONINDEX": "102",
    "Probability": 1
  },
  {
    "QUESTION_NUMBER": "103",
    "QUESTION_TEXT": "No contexto do Padrão TOGAF®, qual é o papel da governança na gestão de riscos?",
    "POSSIBLE_ANSWERS": [
      "A. Eliminar riscos antes que eles sejam identificados.",
      "B. Definir exclusivamente riscos operacionais.",
      "C. Monitorar riscos sem necessidade de aceitação formal.",
      "D. Aceitar os riscos antes que eles sejam gerenciados."
    ],
    "EXPLANATION_TEXT": "Explicação: Embora o arquiteto possa identificar e mitigar riscos, o Padrão TOGAF® destaca que os riscos precisam ser aceitos dentro da estrutura de governança antes de serem gerenciados. (KLP: S2 §9.1)",
    "CORRECT_ANSWER": "D",
    "JSONINDEX": "103",
    "Probability": 1
  },
  {
    "QUESTION_NUMBER": "104",
    "QUESTION_TEXT": "Segundo o Padrão TOGAF®, em quais níveis organizacionais o risco pode ser observado?",
    "POSSIBLE_ANSWERS": [
      "A. Apenas no nível operacional.",
      "B. Apenas no nível estratégico.",
      "C. Nos níveis estratégico, tático e operacional.",
      "D. Exclusivamente em projetos de transformação."
    ],
    "EXPLANATION_TEXT": "Explicação: O risco pode ser observado no nível estratégico, no nível tático (programas e projetos) e no nível operacional, sempre direcionado de cima para baixo a partir do valor de negócio. (KLP: G152 §3.1.1)",
    "CORRECT_ANSWER": "C",
    "JSONINDEX": "104",
    "Probability": 1
  },
  {
    "QUESTION_NUMBER": "105",
    "QUESTION_TEXT": "Qual é o principal objetivo do gerenciamento de riscos segundo o Padrão TOGAF®?",
    "POSSIBLE_ANSWERS": [
      "A. Eliminar completamente a incerteza do processo decisório.",
      "B. Garantir conformidade com frameworks de segurança.",
      "C. Reduzir exclusivamente riscos técnicos.",
      "D. Otimizar os resultados de negócio, maximizando valor e minimizando perdas."
    ],
    "EXPLANATION_TEXT": "Explicação: O objetivo do gerenciamento de riscos é otimizar os resultados de negócio, maximizando o valor e minimizando perdas decorrentes da incerteza. (KLP: G152 §3.1.1)",
    "CORRECT_ANSWER": "D",
    "JSONINDEX": "105",
    "Probability": 1
  },

{
  "QUESTION_NUMBER": "106",
  "QUESTION_TEXT": "Qual alternativa lista exemplos de artefatos externos referenciados no Enterprise Continuum?",
  "POSSIBLE_ANSWERS": [
    "A. Apenas soluções proprietárias de um único fornecedor.",
    "B. Diagramas informais criados por uma equipe de projeto.",
    "C. Modelos de referência da indústria, como o TOGAF TRM, arquiteturas de referência SOA ou modelos de consórcios da indústria.",
    "D. Exclusivamente serviços de infraestrutura em nuvem."
  ],
  "EXPLANATION_TEXT": "Explicação: O Enterprise Continuum inclui artefatos externos, como o TOGAF TRM, arquiteturas de referência SOA e modelos de consórcios da indústria, como TM Forum ou ARTS. (KLP: {S4} §6.2)",
  "CORRECT_ANSWER": "C",
  "JSONINDEX": "99",
  "Probability": 1
},

  {
    "QUESTION_NUMBER": "107",
    "QUESTION_TEXT": "Segundo o Padrão TOGAF®, por que é importante considerar arquiteturas alvo alternativas?",
    "POSSIBLE_ANSWERS": [
      "A. Porque a Visão da Arquitetura normalmente não é definida no início do ADM.",
      "B. Porque raramente existe uma única Arquitetura Alvo que atenda a todas as preocupações das partes interessadas.",
      "C. Porque os Princípios de Arquitetura exigem múltiplas soluções técnicas.",
      "D. Porque o ADM determina obrigatoriamente a criação de várias arquiteturas finais."
    ],
    "EXPLANATION_TEXT": "Explicação: O Padrão TOGAF® afirma que frequentemente há mais de uma Arquitetura Alvo possível que esteja em conformidade com a Visão, os Princípios e os Requisitos, e que uma única alternativa raramente atende a todas as preocupações dos stakeholders. (KLP: {S1} §1.6)",
    "CORRECT_ANSWER": "B",
    "JSONINDEX": "107",
    "Probability": 1
  },
  {
    "QUESTION_NUMBER": "108",
    "QUESTION_TEXT": "De acordo com o Padrão TOGAF®, qual é um dos principais benefícios de apresentar alternativas arquiteturais e trade-offs aos stakeholders?",
    "POSSIBLE_ANSWERS": [
      "A. Facilitar a documentação técnica detalhada da Arquitetura Alvo.",
      "B. Reduzir a necessidade de governança arquitetural.",
      "C. Eliminar conflitos entre domínios arquiteturais.",
      "D. Ajudar a revelar agendas, princípios e requisitos ocultos que podem impactar a Arquitetura Alvo final."
    ],
    "EXPLANATION_TEXT": "Explicação: Apresentar alternativas e trade-offs aos stakeholders ajuda a revelar agendas, princípios e requisitos ocultos que podem impactar a Arquitetura Alvo final. (KLP: {S1} §1.6)",
    "CORRECT_ANSWER": "D",
    "JSONINDEX": "108",
    "Probability": 1
  },
  {
    "QUESTION_NUMBER": "109",
    "QUESTION_TEXT": "Segundo o Padrão TOGAF®, qual alternativa descreve corretamente as três fases da técnica de Trade-offs, na ordem em que são executadas?",
    "POSSIBLE_ANSWERS": [
      "A. Definir alternativas técnicas detalhadas, avaliar impactos de implementação e validar a arquitetura final com os stakeholders.",
      "B. Selecionar critérios com base na visão, princípios e requisitos; definir e compreender as alternativas; selecionar ou combinar alternativas para criar a proposta.",
      "C. Identificar stakeholders, avaliar riscos associados às alternativas e aprovar a arquitetura por meio da governança.",
      "D. Definir alternativas por domínio, eliminar opções inviáveis e documentar a arquitetura escolhida para referência futura."
    ],
    "EXPLANATION_TEXT": "Explicação: O Padrão TOGAF® descreve a técnica de Architecture Alternatives and Trade-offs em três partes: selecionar critérios com base na Visão da Arquitetura, Princípios e Requisitos; definir e compreender as alternativas; e selecionar ou combinar alternativas para criar a proposta. (KLP: {S1} §1.6.1)",
    "CORRECT_ANSWER": "B",
    "JSONINDEX": "109",
    "Probability": 1
  },
  {
    "QUESTION_NUMBER": "110",
    "QUESTION_TEXT": "De acordo com o Padrão TOGAF®, em qual momento o método de Trade-Offs pode ser utilizado?",
    "POSSIBLE_ANSWERS": [
      "A. Apenas na Fase A do ADM.",
      "B. Somente em arquiteturas de nível estratégico.",
      "C. Apenas durante a definição da Arquitetura de Tecnologia.",
      "D. Em qualquer Fase do ADM e para qualquer nível de arquitetura."
    ],
    "EXPLANATION_TEXT": "Explicação: O método de Trade-Offs pode ser utilizado em qualquer fase e em qualquer nível de uma arquitetura, conforme descrito pelo Padrão TOGAF®. (KLP: {S1} §1.6.1)",
    "CORRECT_ANSWER": "D",
    "JSONINDEX": "110",
    "Probability": 1
  }


];


