const menu = [
    {
        active: true,
        icon: "fa fa-dashboard",
        text: "Dashboard",
        url: "/"
    },
    {
        active: false,
        icon: "fa fa-tags",
        text: "Tag",
        childrens: [
            {
                icon: "fa fa-tag",
                text: "New tag",
                url: "/tag/novo"
            },
            {
                icon: "fa fa-list-ul",
                text: "List tags",
                url: "/tag/novo"
            }
        ]
    }
];

export default menu;