import User from '../../../domain/user';
import UserEntity from '../entities/user.entity';

export default class UserMapper {
  static toDomain(entity: UserEntity): User {
    const domain = new User(
      entity.id,
      entity.nickname,
      entity.fullName,
      Number(entity.age),
      entity.attendance
    );
    domain.attendances = entity.attendances;
    return domain;
  }

  static toEntity(domain: User): UserEntity {
    const userEntity = new UserEntity();
    userEntity.id = domain.id;
    userEntity.nickname = domain.nickname;
    userEntity.fullName = domain.fullName;
    userEntity.age = domain.age;
    userEntity.attendance = domain.attendance;
    userEntity.attendances = domain.attendances;
    return userEntity;
  }

  static toDomainList(entities: UserEntity[]): User[] {
    return entities.map((entity) => {
      const domain = new User(
        entity.id,
        entity.nickname,
        entity.fullName,
        Number(entity.age),
        entity.attendance
      );
      domain.attendances = entity.attendances;
      return domain;
    });
  }
}
