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
                url: "/tag/novo"
            },
            {
                icon: "fa fa-list-ul",
                text: "List tags",
                url: "/tag"
            }
        ]
    }
];

export default menu;