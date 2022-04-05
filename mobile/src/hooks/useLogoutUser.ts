import { useMutation } from 'react-query';
import UserService from '../service/user.service';
const userService = new UserService();

export default function useLogoutUser() {
  const { mutateAsync } = useMutation((props) => userService.logoutUser(props));

  return { logoutUserQuery: mutateAsync };
}
