import axios from "axios";

class InstaApi {
  constructor(baseURL, headers) {
    this.client = axios.create({
      baseURL,
      headers,
    });
  }

  async getList() {
    try {
      const list = await this.client.post("/get_plans.php");
      return list.data;
    } catch (error) {
      throw error;
    }
  }
}

const api = new InstaApi("https://core.poprey.com/api", {
  Accept: "multipart/form-data",
  "Content-Type": "multipart/form-data",
  "X-IDENTITY-SITE": "social-likes.com",
});

export async function getlist() {
  const list = await api.getList();
  return list;
}
