import http from "../http-common";

class ExerciseDataService {
    getAll() {
        return http.get("/exercise/all");
    }

    get(id){
        return http.get(`/exercise/${id}`);
    }

    create(data) {
        return http.post("/exercise/create", data);
    }

    update(id,data) {
        return http.put(`/exercise/update/${id}`, data);
    }

    delete(id){
        return http.delete(`/exercise/delete/${id}`);
    }
}

export default new ExerciseDataService();