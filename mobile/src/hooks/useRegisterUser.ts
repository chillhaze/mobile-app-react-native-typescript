import { useMutation } from 'react-query';
import UserService from '../service/user.service';
import AuthStorage from '../service/storage';
const userService = new UserService();

export default function useRegisterUser() {
  const { mutateAsync, isSuccess } = useMutation(
    (props) => userService.registerUser(props),
    {
      async onSuccess(result) {
        return AuthStorage.storeItem(result.data.data.token);
      },
    },
  );

  return { registerUserMutation: mutateAsync, isRegistered: isSuccess };
}
