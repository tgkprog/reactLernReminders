import axios from "axios";
import Reminder from "../model/reminder";
class ReminderService {
  idNext: number = 203;
  remoteCall = axios.create({
    //baseURL: "http://jsonplaceholder.typicode.com/",
    baseURL: "http://a.b:3001/",
  });

  async getReminders() {
    const response = await this.remoteCall.get<Reminder[]>("todos");
    console.log("response get", response);
    return response.data;
  }

  async editReminder(title: string) {
    const snd = {
      title,
    };
    console.log("sndReminderEdit ", snd);
    const response = await this.remoteCall.post<Reminder>("todos", snd);
    const rtn = response.data;
    console.log("response ReminderEdit ", response, "\nrtn", rtn);
    return rtn;
    //return ;
  }

  async removeReminder(id: number) {
    const response = await this.remoteCall.delete("todos/" + id);
    console.log("response removeReminder ", response);
    return response.data;
  }
}
export default new ReminderService();
