import TagService from "./../../service/TagService";

const tagService = new TagService();

const listar = () => {
    return async dispath => {
        const results = await tagService.findAll();
        console.log(results);
        return dispath({ type: TypeAction.LISTAR_TAG, data: results })
    }
};

export { listar }