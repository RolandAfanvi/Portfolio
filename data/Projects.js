export const projects = [
    
    
    
    {
        "_id": 1,
        "name": "Manufacturing Analytics Dashboard",
        "description": "Ce projet consistait à développer un Dashboard complet de suivi de la production des tuyaux de canalisation. Il consolide les données des lignes ZMU, PEW, PEU, Glue, et calcule les KPI clés : Total Pipe produit, Poids total par ligne, OEE/ TRS (Taux de Rendement Synthétique), Suivi par shift (Morning / Afternoon / Night). Ce tableau de bord permet à l’usine de visualiser la performance journalière et d’améliorer l’efficacité.",
        "image": "PamDeutsch.png",
        "links:": {
            "github": "#"
        },
        "skills": ["Power BI", "SQL", "SQL Server", "Ignition"]
    },

    {
        "_id": 2,
        "name": "Snowflake Architecture Data Lake / Data Warehouse (DB Organization)",
        "description": "Ce projet a permis de mettre en place une base de données dans la plateforme Snowflake. L’ide était de concevoir le modèle de données  et ensuite procéder a l’intégration des données.",
        "image": "Snowflake.png",
        "links:": {
            "github": "#"
        },
        "skills": ["SnowSQL", "Snowflake", "Azure Data Factory (ADF)"]
    },

    {
        "_id": 3,
        "name": "Data Pipeline: API Ingestion to Snowflake Data Warehouse",
        "description": "Ce projet a permis  de mettre en place un pipeline de données qui fait de l’ingestion de données depuis une API de transporeon. Comme le montre le schema, Il est divisé en plusieurs phases dont la Récupération des données via Azure Data Factory, Stockage dans Azure Blob Storage, Chargement dans le Snowflake Stage, Chargement dans le schema  RAW de Snowflake et pour finir avec une modelistion et integration dans le Data Warehouse Snowflake.",
        "image": "ADF.png",
        "links:": {
            "github": "#"
        },
        "skills": [ "Azure Data Factory (ADF)", "API REST", "Azure Blob Storage", "Snowflake (Stage, RAW, DWH)"]
    },

    {
        "_id": 4,
        "name": "E‑commerce Sales Analytics Dashboard (Amazon Dataset)",
        "description": "Ce projet consistait a créer un tableau de bord analysant les ventes d’un produit Amazon. Il presente le total des ventes, le nombre de commandes, la répartition par Etats et la visualisation du trend de ventes sur plusieurs mois.",
        "image": "AmazonSales.png",
        "links:": {
            "github": "#"
        },
        "skills": ["Power BI", "Power Query", "CSV File"]
    },

    {
        "_id": 5,
        "name": "Supply Chain Performance Dashboard",
        "description": "L’objectif de ce projet est de réaliser une application qui simule un jeu de memory. Le jeu de memory se joue avec un ensemble de paires de cartes disposées sur un plateau de jeu. Chaque paire de cartes représente le même personnage. Les paires de cartes de personnages sont disposées sur le plateau faces cachées. Le jeu se déroule avec au moins deux joueurs. Les joueurs retournent deux cartes du plateau à tour de rôle. Lorsque les deux cartes retournées représentent le même personnage, elles restent apparentes et le joueur continue de jouer en retournant deux autres cartes. Dans le cas contraire les deux cartes se retournent automatiquement au bout d’un court laps de temps et le joueur passe la main au joueur suivant. Le but du jeu est de trouver le plus grand nombre de paires de cartes représentant les mêmes personnages.",
        "image": "SupplyChain.png",
        "links:": {
            "github": "#"
        },
        "skills": ["Power BI", "Power Query", "CSV File"]
    },
    
   
    {
        "_id": 6,
        "name": "Portfolio",
        "description": "Ce projet est le portfolio que vous êtes en train de consulter. Il a pour but de me présenter moi ainsi que mon parcours professionnel. C’était également l’occasion pour moi d’apprendre de nouvelles technologies comme NextJS ou encore Framer motion. ",
        "image": "portfolio.png",
        "links": {
            "github": "https://github.com/RolandAfanvi/Portfolio",
            "website": "https://portfolio-8jh189dke-rolandafanvis-projects.vercel.app/"
        },
        "skills": ["NextJS", "Tailwindcss", "Framer Motion", "Docker"]
    },
    
    {
        "_id": 7,
        "name": "EasySave",
        "description": "EasySave est une application de sauvegarde polyvalente développée en C# avec des interfaces console et WPF. Il permet aux utilisateurs de créer et d'exécuter des sauvegardes, en copiant des fichiers d'un répertoire source vers un répertoire cible. L'application a évolué à travers différentes versions, chacune introduisant de nouvelles fonctionnalités et améliorations.",
        "image": "EasySave.png",
        "links": {
            "github": "https://github.com/Arkcoz/EasySave"
        },
        "skills": ["C#", "WPF",, ".NetCore"]
    },

    {
        "_id": 8,
        "name": "Bowling Game",
        
        "description": "L’objectif du travail est de réaliser une interface web qui simule un jeu de bowling. Une version augmentée, avec différentes fonctionnalités est proposée dans le cadre de ce projet. (Projet Scolaire).",
        "image": "bowling.png",
        "links": {
            "github": "https://github.com/RolandAfanvi/Bowling_Game"
        },
        "skills": ["JavaScript", "Html", "CSS", "THREEjs"]
    },

     {
        "_id": 9,
        "name": "Jeu Memory",
        "description": "L’objectif de ce projet est de réaliser une application qui simule un jeu de memory. Le jeu de memory se joue avec un ensemble de paires de cartes disposées sur un plateau de jeu. Chaque paire de cartes représente le même personnage. Les paires de cartes de personnages sont disposées sur le plateau faces cachées. Le jeu se déroule avec au moins deux joueurs. Les joueurs retournent deux cartes du plateau à tour de rôle. Lorsque les deux cartes retournées représentent le même personnage, elles restent apparentes et le joueur continue de jouer en retournant deux autres cartes. Dans le cas contraire les deux cartes se retournent automatiquement au bout d’un court laps de temps et le joueur passe la main au joueur suivant. Le but du jeu est de trouver le plus grand nombre de paires de cartes représentant les mêmes personnages.",
        "image": "memory.png",
        "links:": {
            "github": "https://github.com/RolandAfanvi/Jeu-Memory"
        },
        "skills": ["Netbeans", "Java", "Github"]
    },
]
