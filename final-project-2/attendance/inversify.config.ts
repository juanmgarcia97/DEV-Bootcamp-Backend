import { Container } from 'inversify';
import { AttendanceRepository } from './src/repository/attendance.repository';
import { AttendanceRepositoryImpl } from './src/infrastructure/attendance.repository.impl';
import { AttendanceService } from './src/service/attendance.service';
import { AttendanceServiceImpl } from './src/service/attendance.service.impl';
const container = new Container();

container
  .bind<AttendanceRepository>('AttendanceRepository')
  .to(AttendanceRepositoryImpl);
container
  .bind<AttendanceService>('AttendanceService')
  .to(AttendanceServiceImpl);

export default container;
