import { BehaviorSubject } from "rxjs";

const API_SERVER = "http://localhost:8881";

export const jwt = new BehaviorSubject(null);
//jwt.subsribe((token) => console.log(token));
//jwt.next(newValue);

export const login = (username, password) =>
  fetch(`${API_SERVER}/auth/login`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      jwt.next(data.access_token);
      return data.access_token;
    });

export function useLoggedIn() {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);
  useEffect(() => {}, []);
  return loggedIn;
}
