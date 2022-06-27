const http = require("http");

const users = [
  {
    id: 1,
    email: "test@test.com",
    password: "1q2w3e**",
    lastName: "전",
    firstName: "지현",
    nickName: "져니",
    phoneNum: "010-1234-5678",
  },
];

const PORT = process.env.PORT || 8000;

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(200, makeHeader()).end();
    return;
  }

  if (await handleLogin(req, res)) {
    return;
  }

  if (await handleSignup(req, res)) {
    return;
  }

  if (await handleProfile(req, res)) {
    return;
  }

  res.writeHead(404, makeHeader()).end();
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

/**
 * LOGIN - POST
 */
async function handleLogin(req, res) {
  if (req.url === "/users/login" && req.method === "POST") {
    let email, password;

    try {
      const data = JSON.parse(await getReqData(req));

      email = data.email;
      password = data.password;
    } catch (err) {
      res.writeHead(400, makeHeader()).end();
      return true;
    }

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      res.writeHead(403, makeHeader()).end();
      return true;
    }

    res
      .writeHead(200, makeHeader())
      .end(JSON.stringify({ access_token: user.id }));

    return true;
  }
}

/**
 * SIGNUP - POST
 */
async function handleSignup(req, res) {
  if (req.url === "/users/signup" && req.method === "POST") {
    let lastName, firstName, nickName, email, password, phoneNum;

    try {
      const data = JSON.stringify(await getReqData(req));

      lastName = data.lastName;
      firstName = data.firstName;
      nickName = data.nickName;
      email = data.email;
      password = data.password;
      phoneNum = data.phoneNum;
    } catch (err) {
      res.writeHead(400, makeHeader()).end();
      return true;
    }

    if (users.some(u => u.nickName === nickName)) {
      res
        .writeHead(400, makeHeader())
        .end(JSON.stringify({ message: "USERNAME Already Exists" }));
      return true;
    }

    if (users.some(u => u.email === email)) {
      res
        .writeHead(400, makeHeader())
        .end(JSON.stringify({ message: "Email Already Exists" }));
      return true;
    }

    if (users.some(u => u.phoneNum === phoneNum)) {
      res
        .writeHead(400, makeHeader())
        .end(JSON.stringify({ message: "PHONE_NUMBER Already Exists" }));
      return true;
    }

    users.push({
      id: users.length + 1,
      email,
      password,
      lastName,
      firstName,
      nickName,
      phoneNum,
    });

    res.writeHead(200, makeHeader()).end();

    return true;
  }
}

/**
 * PROFILE - GET
 */
async function handleProfile(req, res) {
  if (req.url === "/products/user_nav" && req.method === "GET") {
    const auth = req.headers["authorization"];

    if (!auth) {
      res.writeHead(401, makeHeader()).end();
      return true;
    }

    const user = users.find(u => u.id === Number(auth));

    if (!user) {
      res.writeHead(403, makeHeader()).end();
      return true;
    }

    res
      .writeHead(200, makeHeader())
      .end(JSON.stringify({ full_name: `${user.lastName}${user.firstName}` }));

    return true;
  }
}

function getReqData(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      req.on("data", chunk => {
        body += chunk.toString();
      });
      req.on("end", () => {
        resolve(body);
      });
    } catch (error) {
      reject(error);
    }
  });
}

function makeHeader() {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}
