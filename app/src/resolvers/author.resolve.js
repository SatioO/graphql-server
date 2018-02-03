import { Authors } from "../data";
import find from "lodash/find";

export const getAuthors = _ => Authors;
export const getAuthorByPost = post =>
	find(getAuthors(), a => a.id == post.author_id);
