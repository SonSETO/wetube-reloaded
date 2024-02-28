export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "wetube";
  res.locals.loggedInUser = req.session.user || [];
  next();
};

export const protectorMiddleware = (req, res, next) => {
  // 유저가 있다면 보내주고 없다면 로그인으로 리다이렉
  if (req.session.loggedIn) {
    next();
  } else {
    return res.redirect("/login");
  }
};

export const publicOnlyMiddleware = (req, res, next) => {
  // 로그인이 되어있다면 홈으로 보냄
  if (!req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/");
  }
};

/*

localsMiddleware:

이 미들웨어는 현재 세션에 로그인되어 있는지 여부를 확인하고, 해당 정보를 res.locals 객체에 추가합니다.
loggedIn: 세션이 로그인되어 있는 경우 true, 그렇지 않으면 false로 설정됩니다.
siteName: 웹 애플리케이션의 이름을 "wetube"로 설정합니다.
loggedInUser: 세션에 사용자 정보가 있는 경우 해당 사용자 정보를 로컬 변수에 할당합니다. 세션에 사용자 정보가 없는 경우 빈 배열로 설정됩니다.
이 미들웨어는 각각의 라우터나 템플릿에서 이 정보들을 편리하게 사용할 수 있도록 합니다.

protectorMiddleware:
이 미들웨어는 요청이 로그인된 사용자에게만 허용되도록 보호합니다.
현재 세션이 로그인되어 있는지를 확인하고, 로그인되어 있다면 다음 미들웨어로 요청을 전달합니다. 세션이 로그인되어 있지 않다면 "/login" 경로로 리디렉션됩니다.

publicOnlyMiddleware:
이 미들웨어는 로그인되지 않은 사용자만 접근할 수 있도록 합니다.
현재 세션이 로그인되어 있지 않은 경우에만 다음 미들웨어로 요청을 전달합니다. 세션이 로그인되어 있는 경우 "/" 경로로 리디렉션됩니다.


*/
