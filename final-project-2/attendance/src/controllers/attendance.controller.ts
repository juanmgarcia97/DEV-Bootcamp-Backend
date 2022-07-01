import axios, { AxiosError } from 'axios';
import express, { NextFunction, Request, Response } from 'express';
import container from '../../inversify.config';
import { Attendance } from '../domain/attendance';
import { InvalidAttendance } from '../domain/exceptions/invalidAttendance';
import { UserNotFound } from '../domain/exceptions/userNotFound';
import { AttendanceService } from '../service/attendance.service';

const router = express.Router();

const attendanceService: AttendanceService =
  container.get<AttendanceService>('AttendanceService');

const usersApi = 'http://localhost:3000/users';

router.get(
  '/user/:userId',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { userId } = request.params;
      const users = await attendanceService.findAllByUser(userId);
      response.status(200).json({
        message: 'Attendances found',
        data: users,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const attendance = request.body;
      if (attendance !== {}) throw new InvalidAttendance();
      const newAttendance = await attendanceService.createAttendance(
        attendance
      );
      response.status(201).json({
        message: 'Attendance created',
        data: newAttendance,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.all('*', () => {
  throw new Error('Page not found');
});

export default router;
