import { toastr } from "react-redux-toastr";

import TagService from "./../../service/TagService";
import TypeAction from "../../config/TypeAction";

const tagService = new TagService();

const listar = () => {
    return async dispath => {
        const results = await tagService.findAll();
        return dispath({ type: TypeAction.LISTAR_TAG, data: { tags: results }});
    }
};

const save = (newTag) => {
    return async dispatch => {
        try {
            await tagService.save(newTag);
            toastr.success("Tag", "Salvo com successo");
            dispatch([
                {
                    type: TypeAction.ADD_TAG,
                    data: {
                        name: "",
                    }
                },
                cleanForm()
            ]);
        } catch(error) {
            toastr.error("Tag", error.response.data.msg);
            dispatch(cleanForm())
        }
    }
};

const modifiedDataForm = (key, valueTypingInput) => {
    return {
        type: TypeAction.MODIFIED_VALUE_FIELD,
        data: {
            [key]: valueTypingInput,
        }
    }
};

const cleanForm = () => {
    return { type: TypeAction.CLEAN_FORM, data: { name: "" }}
};

export { listar, save, cleanForm, modifiedDataForm }