import axios from "axios"

class CharactersPost {
    async listarPersonagens() {
        const response = await axios.get("https://hp-api.onrender.com/api/characters")
        return response;
    }
}

export default new CharactersPost();