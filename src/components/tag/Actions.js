import { toastr } from "react-redux-toastr";

import TagService from "./../../service/TagService";
import ErrorResponseService from "./../../service/ErrorResponseService";
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
            toastr.error("Tag", ErrorResponseService.getMsgErroInReponse(error));
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

const remove = (id) => {
    return async dispatch => {
        try {
            await tagService.remove(id);
            toastr.success("Tag", "Deleted success!");
            return dispatch(listar());
        } catch(error) {
            toastr.error("Tag", ErrorResponseService.getMsgErroInReponse(error));
        }
    }
};

const update = (id, data) => {
    return async dispatch => {
        try {
            await tagService.update(id, data);
            toastr.success("Tag", "Updated success!");
            return dispatch([
                cleanForm()
            ]);
        } catch(error) {
            toastr.error("Tag", ErrorResponseService.getMsgErroInReponse(error));
        }
    }
};

const findById = (id) => {
  return async dispatch => {
      try {
          const result = await tagService.findById(id);
          return dispatch({ type: TypeAction.FIND_ID, data: { name: result.name } })
      } catch(error) {
          toastr.error("Tag", ErrorResponseService.getMsgErroInReponse(error));
      }
  }
};



export { listar, save, update, findById, remove, cleanForm, modifiedDataForm }