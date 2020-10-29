import { NavigationActions } from "react-navigation";
//  memory leak here
let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function back() {
  _navigator.dispatch(NavigationActions.back());
}

export { navigate, back, setTopLevelNavigator };
