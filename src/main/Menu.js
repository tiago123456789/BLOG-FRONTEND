const menu = [
    {
        active: true,
        id: "dashboard",
        icon: "fa fa-dashboard",
        text: "Dashboard",
        url: "/"
    },
    {
        active: false,
        id: "tag",
        icon: "fa fa-tags",
        text: "Tag",
        childrens: [
            {
                icon: "fa fa-tag",
                text: "New tag",
                url: "/tag/nova"
            },
            {
                icon: "fa fa-list-ul",
                text: "List tags",
                url: "/tag"
            }
        ]
    },
    {
        active: false,
        id: "category",
        icon: "fa fa-list",
        text: "Categoria",
        childrens: [
            {
                icon: "fa fa-tag",
                text: "Nova categoria",
                url: "/categoria/nova"
            },
            {
                icon: "fa fa-list-ul",
                text: "Lista de categorias",
                url: "/categoria"
            }
        ]
    },
    {
        active: false,
        id: "article",
        icon: "fa fa-list",
        text: "Artigo",
        childrens: [
            {
                icon: "fa fa-file",
                text: "Nova artigo",
                url: "/artigo/novo"
            },
            {
                icon: "fa fa-file",
                text: "Lista de artigos",
                url: "/artigo"
            }
        ]
    }
];

export default menu;