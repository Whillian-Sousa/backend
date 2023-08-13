import { User } from "../entities/User";

interface UserRepository {
  add(event: User): Promise<User>;
  verifyIsUserExist(email: string): Promise<any>
}

export { UserRepository };
