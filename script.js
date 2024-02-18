function exibirDesc(index){
    const parDesc = window.document.querySelector('p#desc')
    const desc =
    [   
        // HTML
        'Minha jornada com HTML tem em média 1 ano e 3 meses de usabilidade. Ainda não tive grandes usous de HTML no mercado de trabalho, mas já utilizei. Meu maior uso dessa tecnologia foram em projetos acadêmicos e pessoais',

        // CSS
        'Minha experiência com CSS, está diretamente ligada com o HTML, 1 ano e 3 meses de usabilidade. Utilizei CSS em projetos acadêmicos e pessoais',

        // JS
        'A linguagem JavaScript, tenho mais experiência, utilizo atualmente em meu estágio. Há 1 ano que utilizo JavaScript todos os dias, mas não voltado para Desenvolvimento Web, utilizo para manipulação de planilhas Google Sheets, em uma extensão do Google',

        // JAVA
        'A linguagem Java, utilizo no meu projeto extensionista da minha faculdade (um sistema para uma transportadora), são 1 ano e 6 meses, com algumas pausas, utilizando Java, aplicando sua propriedade de Orientação a Objeto',

        // MYSQL
        'A linguagem MySQL para banco de dados, faz parte do meu projeto extensionista (um sistema para uma transportadora), Há 1 ano utilizo',

        // ORACLE
        'Banco de dados Oracle, utilizo atualmente em meu estágio, Há 1 ano, para fazer consultas (querys) para extrair informações que me interessam, para ser utilizadas em projetos/dashboards no PowerBI',

        // POWERBI
        'Utilizo esta ferramenta há 1 ano em meu estágio, contribuindo junto com um time de analistas, buscando melhores caminhos, obtendo insights, para melhorar as tomadas de decisões das gerências',

        // GIT
        'Sou certificado pelo Dio em um curso de Versionamento de Código com Git e GitHub, ainda não coloquei em prática meus conhecimentos no mercado de trabalho, somente em projetos pessoais',

        // APPSCRIPT
        'Utilizo esta linguaguem, que é inspirada em JavaScript, há 1 ano em meu estágio. É uma extensão do Google Sheets, que permite manipular 100% uma planilha. Com ela faço manutenções em códigos, atualizo funcionalidades para melhorar performance, crio novas funções, documentações e outras manipulações'
    ]
    parDesc.textContent = `${desc[index]}.`;
}