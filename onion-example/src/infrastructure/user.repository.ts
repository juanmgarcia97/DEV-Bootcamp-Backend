import { injectable } from 'inversify';
import user from '../domain/user';
import { IUserRepository } from '../repository/user.repository.interface';

@injectable()
export class UserRepository implements IUserRepository {
    getAll(): Promise<user[]> {
        throw new Error('Method not implemented.');
    }
    findById(id: String): Promise<user> {
        throw new Error('Method not implemented.');
    }
    save(entity: user): Promise<user> {
        throw new Error('Method not implemented.');
    }
    delete(id: String): Promise<boolean> {
        throw new Error('Method not implemented.');
    }

}