export interface Project {
    title: string;
    status: "Completed" | "In Development";

    image: string;

    overview: string;

    problem: string;

    solution: string;

    impact: string;

    tech: string[];

    github?: string;

    demo?: string;
}

export const projects: Project[] = [
    {
        title: "Cemetery Navigation & Management System",

        status: "Completed",

        image: "/projects/cemetery.jpg",

        overview:
            "A desktop and Android application that digitizes cemetery record management while helping visitors locate graves through interactive navigation.",

        problem:
            "Traditional cemetery records make it difficult for visitors to locate graves quickly, while administrators often manage records manually.",

        solution:
            "Built a React dashboard and React Native Android mobile application integrated with Supabase and Mapbox to manage burial records, search graves, and provide GPS-based navigation.",

        impact:
            "Provides a centralized management platform and significantly improves the experience of locating graves within large cemetery grounds.",

        tech: [
            "React",
            "React Native",
            "Expo",
            "TypeScript",
            "Supabase",
            "Mapbox",
        ],

        github: "",

        demo: "",
    },

    {
        title: "Offline Inventory System",

        status: "In Development",

        image: "/projects/inventory.png",

        overview:
            "An offline-first inventory management system built for small businesses.",

        problem:
            "Inventory records are managed manually in Excel, making stock updates, sales tracking, and inventory monitoring inefficient and prone to errors as the business grows.",
        
        solution:
            "Developing an offline-first inventory and point-of-sale system that allows owners to manage products, process sales, track inventory, and generate reports without relying on an internet connection. The system also supports local backup and restore for data protection.",
        
        impact:
            "Designed to streamline daily operations by replacing manual spreadsheet-based inventory management with a centralized desktop application that continues to function completely offline.",

        tech: [
            "React",
            "TypeScript",
            "SQLite",
        ],

        github: "",
    },
];