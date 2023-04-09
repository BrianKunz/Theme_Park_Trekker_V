import axios, { AxiosInstance, AxiosResponse } from "axios";

class TripService {
  private instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:3000",
    });
    this.instance.interceptors.response.use(this.responseInterceptor);
  }
  private responseInterceptor({ data }: AxiosResponse<any, any>) {
    return data;
  }

  async getAll() {
    return await this.instance.get("/trips/");
  }
  async getOne(id: string) {
    return await this.instance.get(`/trips/${id}`);
  }
  async create(trip: Trip) {
    return await this.instance.post("/trips", { ...trip });
  }
  async update(trip: Trip) {
    return await this.instance.put(`/trips/${trip.id}`, { ...trip });
  }
  async delete(id: string) {
    return await this.instance.delete(`/trips/${id}`);
  }
}

export const tripService = new TripService();
