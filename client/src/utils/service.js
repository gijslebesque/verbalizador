import axios from "axios";

export class Service {
  constructor() {
    this.baseURL = process.env.REACT_APP_BASE_URL;
    this.service = axios.create({
      baseURL: this.baseURL
    });
  }

  addVerb = payload => {
    return this.service.post("/verb", payload);
  };

  getVerbs = () => {
    return this.service.get("/verb");
  };
}
