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

    findByExerciseName(exerciseName){
        return http.get(`/exercise/search/${exerciseName}`);
    }

    getRandomExercise(data) {
        return http.get(`/exercise/random/?numberOfExercises=${data.numberOfExercises}&minDifficulty=${data.minDifficultLevel}&maxDifficulty=${data.maxDifficultLevel}&minEstimatedTime=${data.minEstimatedTime}&maxEstimatedTime=${data.maxEstimatedTime}`);
    }
}

export default new ExerciseDataService();