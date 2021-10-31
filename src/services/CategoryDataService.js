import http from "../http-common";

class CategoryDataService {
    getAll() {
        return http.get("/category/all");
    }

    get(id){
        return http.get(`/category/${id}`);
    }

    create(data) {
        return http.post("/category/create", data);
    }

    update(id,data) {
        return http.put(`/category/update/${id}`, data);
    }

    delete(id){
        return http.delete(`/category/delete/${id}`);
    }

    findByCategoryName(categoryName){
        return http.get(`/category/search/${categoryName}`);
    }

}

export default new CategoryDataService();