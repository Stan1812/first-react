function renderApp(newAppState, oldAppState = {}) {
  if (newAppState === oldAppState) return;
  console.log("render app");
  renderTitle(newAppState.title, oldAppState.title);
  renderContent(newAppState.content, oldAppState.content);
}
function renderTitle(newTitle, oldTitle = {}) {
  if (newTitle === oldTitle) return;
  const titleDOM = document.getElementById("title");
  titleDOM.innerHTML = newTitle.text;
  titleDOM.style.color = newTitle.color;
}
function renderContent(newContent, oldContent) {
  if (newContent === oldContent) return;
  const contentDOM = document.getElementById("content");
  contentDOM.innerHTML = newoContent.text;
  contentDOM.style.color = newContent.color;
}
function createStore(stateChanger) {
  let state = {};
  const listeners = [];
  const subscribe = listener => {
    listeners.push(listener);
  };
  const getState = () => {
    state;
  };
  const dispatch = action => {
    stateChanger(state, action);
    listeners.forEach(listener => listener());
  };
  dispatch({});
  return {
    getState,
    dispatch,
    subscribe
  };
}

function stateChanger(state, action) {
  if (!state) {
    return {
      title: {
        text: "React.js 小书",
        color: "red"
      },
      content: {
        text: "React.js 小书内容",
        color: "blue"
      }
    };
  }
  switch (action.type) {
    case "UPDATE_TITLE_TEXT":
      return {
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      };
    case "UPDATE_TITLE_COLOR":
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      };
    default:
      return state;
  }
}
const store = createStore(appState, stateChanger);

let oldState = store.getState(); // 缓存旧的 state
store.subscribe(() => {
  const newState = store.getState(); // 数据可能变化，获取新的 state
  renderApp(newState, oldState); // 把新旧的 state 传进去渲染
  oldState = newState; // 渲染完以后，新的 newState 变成了旧的 oldState，等待下一次数据变化重新渲染
});

// function stateChanger(state, action) {
//   switch (action.type) {
//     case "UPDATE_TITLE_TEXT":
//       state.title.text = action.text;
//       break;
//     case "UPDATE_TITLE_COLOR":
//       state.title.color = action.color;
//       break;
//     default:
//       break;
//   }
// }
// const store = createStore(appState, stateChanger);
// renderApp(store.getState()); // 首次渲染页面
// store.subscribe(() => renderApp(store.getState()));
// store.dispatch({ type: "UPDATE_TITLE_TEXT", text: "《React.js 小书》" });
// store.dispatch({ type: "UPDATE_TITLE_COLOR", color: "blue" });

// 1.0
// function dispatch(action) {
//   switch (action.type) {
//     case "UPDATE_TITLE_TEXT":
//       appState.title.text = action.text;
//       break;
//     case "UPDATE_TITLE_COLOR":
//       appState.title.color = action.color;
//       break;
//     default:
//       break;
//   }
// }
// renderApp(appState); // 首次渲染页面
// dispatch({ type: "UPDATE_TITLE_TEXT", text: "《React.js 小书》" }); // 修改标题文本
// dispatch({ type: "UPDATE_TITLE_COLOR", color: "blue" }); // 修改标题颜色
// renderApp(appState);
