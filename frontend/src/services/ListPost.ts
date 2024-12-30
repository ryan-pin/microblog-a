import axiosInstance from "./axiosinstance";

class Posts {
  async list() {
    // try {
      const response = await axiosInstance.get("/publicacao/?page=1");
      console.log(response.data.results)
      return response.data.results;
//       .data;
//     } catch (error) {
//       console.error(error);
//       return [];
//     }
   }
}

export default new Posts();