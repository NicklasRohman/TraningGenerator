import http from "../http-common";

class TagDataService {
    getAll() {
        return http.get("/tag/all");
    }

    get(id){
        return http.get(`/tag/${id}`);
    }

    create(data) {
        return http.post("/tag/create", data);
    }

    update(id,data) {
        return http.put(`/tag/update/${id}`, data);
    }

    delete(id){
        return http.delete(`/tag/delete/${id}`);
    }

    findByTagName(tagName){
        return http.get(`/tag/search/${exerciseName}`);
    }

}

export default new TagDataService();