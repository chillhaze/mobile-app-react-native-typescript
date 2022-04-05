import { useMutation } from 'react-query';
import UserService from '../service/user.service';
import AuthStorage from '../service/storage';
const userService = new UserService();

export default function useLoginUser() {
  const { mutateAsync, isSuccess, data, status } = useMutation(
    (props: void | { email: string; password: string }) =>
      userService.loginUser(props),
    {
      onSuccess(result) {
        return AuthStorage.storeItem(result.data.data.token);
      },
    },
  );

  return {
    loginUserMutation: mutateAsync,
    isLoggedIn: isSuccess,
    data,
    status,
  };
}
