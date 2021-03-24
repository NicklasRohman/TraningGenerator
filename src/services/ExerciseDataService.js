import http from "../http-common";

class ExerciseDataService {
    getAll() {
        return http.get("/all");
    }

    get(id){
        return http.get(`/${id}`);
    }

    create(data) {
        return http.post("/create", data);
    }

    update(id,data) {
        return http.put(`/update/${id}`, data);
    }

    delete(id){
        return http.delete(`/${id}`);
    }
}

export default new ExerciseDataService();