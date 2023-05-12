import axios from "axios";
import Reminder from "../model/reminder";
class ReminderService {
  remoteCall = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com/",
  });

  async getReminders() {
    const response = await this.remoteCall.get<Reminder[]>("todos");
    console.log("response get", response);
    return response.data;
  }

  async addReminder(title: string) {
    const response = await this.remoteCall.post("todos", { title: { title } });
    console.log("response addReminder ", response);
    return response.data;
  }

  async removeReminder(id: number) {
    const response = await this.remoteCall.delete("todos/" + id);
    console.log("response removeReminder ", response);
    return response.data;
  }
}
export default new ReminderService();
