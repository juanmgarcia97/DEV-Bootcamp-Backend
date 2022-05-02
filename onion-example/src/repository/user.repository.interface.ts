import User from "../domain/user";

export interface IUserRepository extends CrudRepository<User, String> {

}