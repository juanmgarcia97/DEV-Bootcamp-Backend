import axios from 'axios';
export class AttendanceService {
    private attendanceApi = 'http://localhost:3001/attendances'

    async getAttendancesByUserId(id: string) {
        const response = await axios.get(`${this.attendanceApi}/user/${id}`);
        return response.data.data;
    }
}