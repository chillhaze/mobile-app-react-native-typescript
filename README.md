# CGS Test project

> For This project use [MERN stask](https://www.mongodb.com/languages/mern-stack-tutorial)

## Pre requirements

Watch this video:
[Hook Setup](https://www.youtube.com/watch?v=jM0Jqfmr9sc&ab_channel=CodeGenerationSoftware)

1. Pull repo.
2. `git checkout -b <name that you have set in pre-requirements>/main`
3. `git push origin <name that you have set in pre-requirements>/main`
4. If you are windows user, make sure that `bash` have been installed if not check [Installation link](https://hackernoon.com/how-to-install-bash-on-windows-10-lqb73yj3);
5. Open Terminal in your project (make sure that you are in main directory with `hooks` folder)
6. (ONLY FOR WINDOWS USERS) Change first line in `./hooks/commit-msg`, `./hooks/pre-commit` and `./hooks/setup/hooks` from `#!/bin/sh` to `#!/bin/bash`;
7. Run `cat ./hooks/pre-commit` and change `USER_NAME="user_name"` on third string to `USER_NAME="<YOUR-NAME_LAST_NAME>"` Example: `USER_NAME="vasia_bumper"` and save the file.
8. Run command `./hooks/setup-hooks` (FOR WINDOWS USERS `bash hooks/setup-hooks`);
9. Run command `cd ./server && yarn && cd ../mobile && yarn`

Now you can run project by calling backend `cd ./server && yarn server` and mobile `cd ./mobile && yarn start`

Avoid Upper case! Do not use `N_Surname` syntax or `Implement-Crud-Todo` syntax

If you keep experiencing something like: **tslint: command not found**
please do the following:

```

yarn global add tslint typescript

```

link: https://stackoverflow.com/questions/36910592/enabling-eslint-on-typescript-files/64175035#64175035

## Time-frames

Time-frames of the test task is highly important! You have only 2 weeks for the task below, please use this time wisely. Good luck!

## Required features

1. **Todo list - CRUD operations on backend**;

- _Each `PUT` `POST` rout should has validation of `req.body` and throw `400` error in case of failed validation_
- _Separate your logic from routes. You should perform all interactions with `DB` inside your `services/<filename>.service.ts` file and import it to `controllers/<filename>.controller.ts`. After that you can call your controllers in routes_

2. **Todo list - Connect your CRUD operations with mobile**;

- _You should split your code on logical components ( `<TodoContainer />`, `<TodoElement/>` etc);_
- _For Edit/Add you should use forms written with [Formik](https://formik.org/docs/overview);_
- _Put logic related to server interactions inside `service/http.ts` file (check [Our Documentation](https://github.com/CodeGeneration-2020/code-generation-code-style/blob/main/docs/javascript.md#server-interactions-))_
- _For data fetching you can use [React Query](https://react-query.tanstack.com/), it also help you to globally store your data_
- _Use `<FlatList />` for render dynamic list (reed RN docs: https://reactnative.dev/docs/flatlist)_
- _Use React Native EXPO in order to install RN for both iOS & Android (https://docs.expo.dev/index.html)_
- _Const with colors, spacings and font sizes should be in separate conts called THEME, QURU_KEYS should be in separeate const too

3. **Authorization (login/signup) backend;**

- _Use jwt [authorization](https://nodejsdev.ru/doc/jwt/) and [Passport](http://www.passportjs.org/) for that_
- _Logic related to token processing should be stored in `middlewares/auth.middleware.ts`_

4. **Authorization (login/signup) frontend;**

- _Should store token in localStorage_
- _Use Formik for handling validation and submit func_

5. **Filters for todo list by title and statuses (private and completed);**

- _You should pass filter params through `req.params`(`localhost:3000/todo?search=test&status=completed`)_

6. **Button pagination;**

- _All pagination should be handled by backend_

## Advanced features

> This features will be available only after successful finished of required features.

### Graph QL implementation

1. **Attach express-graphql to backend**

- _Take existent controllers in your backend and create another `/graphql` route with all this controllers_
- _Use axios for querying a controllers_
- _Graphql api should work in parallel with existing REST api_

### NOTES

> Backend should have stored in `server` dir, mobile should be stored in `mobile` dir.
> Use technologies from `Useful links and technologies`. You should create separate pr for each task.

Design: [drive.google](https://drive.google.com/file/d/1uSkWwYC7yrvgDFJznxNlKPqQl_SahGzZ/view)

7. **React Native details;**

- _Front-end should ONLY be launched with React Native EXPO, not (CLI)_
- _For navigation between screens use React Native Navigation (https://reactnavigation.org/docs/getting-started/)_
- _Try to play around with bottom stack navigation, while working with navigation (https://reactnavigation.org/docs/bottom-tab-navigator)_
- _Use `useRoute` + `useNavigation`_

8. **ESlint**

- _ESlint should be configured for all the files in the app_

## PR convention

1. Each intern will be attached to a branch (`<name that you have set in pre-requirements>/main`);
2. When you are working on a feature you should create a separate branch from `<name that you have set in pre-requirements>/main` with the following name:
   `feature/<name that you have set in pre-requirements>/<feature-name>` or `bug/<name that you have set in pre-requirements>/<feature-name>`. Once you are done with a subtask you should create a PR into `<name that you have set in pre-requirements>/main` and ping `Danyyl Kuchkov & Oleksii Samoilenko` for review;
3. Title of ypur PR's should be `feat: <name of your feature>` or `bug-fix: <name of your bugfix>`. Description field should contain short info about feature/bug;
4. PR's are under review ONLY between 9AM - 9:30AM (Kyiv EET time)

> If you will face with some issues with git. Ask `Danyyl Kuchkov` via slack;

## Useful links and technologies

[Corporate Codestyle](https://github.com/CodeGeneration-2020/code-generation-code-style)
[Formik](https://formik.org/docs/overview)
[Mongoose](https://mongoosejs.com/)
[Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
[Passport](http://www.passportjs.org/)
[Expo](https://docs.expo.io/)
[React Query](https://react-query.tanstack.com/)

```

```
